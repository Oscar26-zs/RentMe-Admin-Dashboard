import { collection, addDoc, Timestamp } from 'firebase/firestore';
import type { CreateUser } from '../model/type';
import { db } from '@/services/firebase';

const USUARIOS_COLLECTION = 'usuarios';

export const usuarioService = {
  async create(usuario: CreateUser): Promise<string> {
    const docRef = await addDoc(collection(db, USUARIOS_COLLECTION), {
      ...usuario,
      fechaCreacion: Timestamp.now(),
      fechaActualizacion: Timestamp.now()
    });
    return docRef.id;
  },
  }