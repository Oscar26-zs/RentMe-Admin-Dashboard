export interface CreateUser {
  email: string;
  nombre: string;
  role: 'admin' | 'propietario' | 'inquilino';
  active: boolean;
}

export interface User extends CreateUser {
  id: string;
  fechaCreacion: Date;
  fechaActualizacion: Date;
}