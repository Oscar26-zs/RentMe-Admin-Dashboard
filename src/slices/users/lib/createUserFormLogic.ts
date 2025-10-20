import { useState } from 'react';
import { useCreateUser } from '../hooks/mutations/useCreateUser';
import type { CreateUser } from '../model/type';

const initialFormData: CreateUser = {
  email: '',
  nombre: '',
  role: 'editor',
  active: true,
};

export const useCreateUserSheet = () => {
  const { mutate, isPending } = useCreateUser();
  const [open, setOpen] = useState(false);
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

  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    setOpen(false);
    resetForm();
  };


  return {
    formData,
    open,
    setOpen,
    onSubmit,
    isPending,
    handleSubmit,
    handleInputChange,
    resetForm,
  };
};