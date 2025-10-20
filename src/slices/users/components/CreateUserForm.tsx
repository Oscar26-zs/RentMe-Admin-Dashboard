import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { useCreateUserForm } from '../lib/createUserFormLogic';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select';
import { ButtonRipple } from '@/shared/components/ui';

export const CreateUserForm = () => {
  const { formData, isPending, handleSubmit, handleInputChange } = useCreateUserForm();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Crear Nuevo Usuario</CardTitle>
        <CardDescription>
          Ingresa los datos del nuevo usuario del sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre completo</Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Juan Pérez"
              value={formData.nombre}
              onChange={(e: { target: { value: string | boolean; }; }) => handleInputChange('nombre', e.target.value)}
              required
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={(e: { target: { value: string | boolean; }; }) => handleInputChange('email', e.target.value)}
              required
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Rol</Label>
            <Select
              value={formData.role}
              onValueChange={(value: string | boolean) => handleInputChange('role', value)}
              disabled={isPending}
            >
              <SelectTrigger id="role">
                <SelectValue placeholder="Selecciona un rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrador</SelectItem>
                <SelectItem value="propietario">Editor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ButtonRipple type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Creando usuario...' : 'Crear Usuario'}
          </ButtonRipple>
        </form>
      </CardContent>
    </Card>
  );
};