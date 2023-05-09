import { Lugar } from './lugar.model';
export interface User {
  email: string;
  nombre: string;
  password: string;
  confirmPassword: string;
  language: string;
  lugaresFavoritos: string[];
  imagenPerfil: string;
}
