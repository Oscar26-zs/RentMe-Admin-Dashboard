import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, ButtonRipple } from '@/shared/components/ui';
import { useCreateUserSheet } from '../lib/createUserFormLogic';

interface CreateUserSheetProps {
  children?: React.ReactNode;
}

export const CreateUserSheet = ({ children }: CreateUserSheetProps) => {
  const { formData, isPending, onSubmit, handleInputChange, open, setOpen } = useCreateUserSheet();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children || (
          <ButtonRipple variant="primary" size='lg' className="flex items-center gap-2">
            Crear Nuevo Usuario
          </ButtonRipple>
        )}
      </SheetTrigger>
      <SheetContent className="px-4">
        <SheetHeader>
          <SheetTitle>Crear Nuevo Usuario</SheetTitle>
          <SheetDescription>
            Ingresa los datos del nuevo usuario del sistema
          </SheetDescription>
        </SheetHeader>
        
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre completo</Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Juan Pérez"
              value={formData.nombre}
              onChange={(e) => handleInputChange('nombre', e.target.value)}
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
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Rol</Label>
            <Select
              value={formData.role}
              onValueChange={(value) => handleInputChange('role', value)}
              disabled={isPending}
            >
              <SelectTrigger id="role">
                <SelectValue placeholder="Selecciona un rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrador</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-6">
            <ButtonRipple type="submit" variant='primary' disabled={isPending} size='sm' className='flex-1'>
              {isPending ? 'Creando...' : 'Crear Usuario'}
            </ButtonRipple>
            <ButtonRipple
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              size='sm'
              className='flex-1'
            >
              Cancelar
            </ButtonRipple>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};