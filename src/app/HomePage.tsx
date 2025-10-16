
import homeImage from '../shared/assets/Onboarding-bro.png'
import { ButtonRipple } from '@/shared/components/ui/button/ButtonRipple'

export default function HomePage() {
  return (
       <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {
        <img 
          src={homeImage}
          alt="Onboarding Illustration" 
          className="max-w-md w-full h-auto mb-8"
        />
     }
    <h1 className="text-2xl font-bold text-[#52655B] mb-4">
      Bienvenido a RentMe Admin Dashboard
    </h1>
    <p className="text-gray-600 mb-6 text-center max-w-md">
      Gestiona usuarios, alojamientos, reservas y ventas de manera eficiente y sencilla.
    </p>
      <ButtonRipple variant="primary" size="sm" >
       Comenzar
    </ButtonRipple>
    </div>  
  )
}