import emailjs from '@emailjs/browser';

interface SendWelcomeEmailParams {
  userName: string;
  userEmail: string;
  userRole: string;
  otpCode: string;
}

const roleMapping: Record<string, string> = {
  admin: 'Administrador',
  editor: 'Editor'
};

export const emailService = {
  async sendWelcomeEmail({ userName, userEmail, userRole, otpCode }: SendWelcomeEmailParams) {
    try {
      const templateParams = {
        user_name: userName,
        otp_code: otpCode,
        user_email: userEmail,
        user_role: roleMapping[userRole] || userRole,
        email: userEmail,  // ← Campo que EmailJS usa como destinatario
        from_name: import.meta.env.VITE_EMAILJS_FROM_NAME,
      };

      console.log('📧 Enviando email a:', userEmail);
      console.log('Template params:', templateParams);

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Email enviado exitosamente:', response);
      return response;
    } catch (error) {
      console.error('❌ Error enviando email:', error);
      throw error;
    }
  },
};