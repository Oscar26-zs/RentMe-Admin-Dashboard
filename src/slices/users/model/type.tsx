export interface CreateUser {
  email: string;
  nombre: string;
  role: 'admin' | 'editor';
  active: boolean;
}

export interface User extends CreateUser {
  id: string;
  fechaCreacion: Date;
  fechaActualizacion: Date;
}