import { useState } from 'react';
import { useCreateUser } from '../hooks/mutations/useCreateUser';
import type { CreateUser } from '../model/type';

const initialFormData: CreateUser = {
  email: '',
  nombre: '',
  role: 'inquilino',
  active: true,
};

export const useCreateUserForm = () => {
  const { mutate, isPending } = useCreateUser();
  const [formData, setFormData] = useState<CreateUser>(initialFormData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        setFormData(initialFormData);
      },
    });
  };

  const handleInputChange = (field: keyof CreateUser, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    isPending,
    handleSubmit,
    handleInputChange,
    resetForm,
  };
};