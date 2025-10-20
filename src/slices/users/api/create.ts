import { collection, addDoc, Timestamp } from 'firebase/firestore';
import type { CreateUser } from '../model/type';
import { db } from '@/services/firebase';
import { emailService } from './sendEmail';

const USUARIOS_COLLECTION = 'usuarios';

// Función para generar OTP de 6 dígitos
const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const usuarioService = {
  async create(usuario: CreateUser): Promise<string> {
    // Generar OTP
    const otpCode = generateOTP();
    const otpExpiration = new Date();
    otpExpiration.setMinutes(otpExpiration.getMinutes() + 15); // 15 minutos

    // Crear usuario en Firestore
    const docRef = await addDoc(collection(db, USUARIOS_COLLECTION), {
      ...usuario,
      otp: otpCode,
      otpExpiration: Timestamp.fromDate(otpExpiration),
      passwordSet: false,
      fechaCreacion: Timestamp.now(),
      fechaActualizacion: Timestamp.now()
    });

    // Enviar email con OTP
    try {
      await emailService.sendWelcomeEmail({
        userName: usuario.nombre,
        userEmail: usuario.email,
        userRole: usuario.role,
        otpCode: otpCode,
      });
    } catch (error) {
      console.error('Error enviando email:', error);
      // Opcional: Podrías eliminar el usuario si falla el envío del email
      // await deleteDoc(doc(db, USUARIOS_COLLECTION, docRef.id));
      throw new Error('Error al enviar el correo de bienvenida');
    }

    return docRef.id;
  },
};