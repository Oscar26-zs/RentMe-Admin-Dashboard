import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usuarioService } from '../../api/create';
import type { CreateUser } from '../../model/type';
import { toast } from 'sonner';
import { userKeys } from '../keys';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (usuario: CreateUser) => usuarioService.create(usuario),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
      toast.success('Usuario creado exitosamente');
    },
    onError: (error: Error) => {
      toast.error(`Error al crear usuario: ${error.message}`);
    },
  });
};