import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import notFoundImage from '../shared/assets/404_Error-bro.png'
import { ButtonRipple } from '@/shared/components/ui'


const NotFoundPage = () => {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {!imgError ? (
        <img 
          src={notFoundImage}
          alt="404 Error Illustration" 
          className="max-w-md w-full h-auto mb-8"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full max-w-md h-64 mb-8 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">404</span>
        </div>
      )}
      
      <h1 className="text-2xl font-bold text-[#52655B] mb-4">
        ¡Página no encontrada!
      </h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link to="/">
         <ButtonRipple variant="primary" size="sm" >
                Volver al inicio
          </ButtonRipple>
      </Link>
    </div>
  )
}

export default NotFoundPage