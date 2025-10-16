export interface ButtonRippleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  /** Opcionales para el efecto ripple */
  rippleColor?: string                     // ej: 'rgba(255,255,255,.6)' o usa la CSS var por defecto
  rippleScale?: number                     // cuánto escala la onda (por defecto 10)
  rippleDuration?: number                  // duración en segundos (por defecto .6)
}

export interface RippleEffectProps {
  x: number;
  y: number;
  size?: number;          // diámetro inicial del círculo
  color?: string;         // puedes setear --ripple-button-ripple-color en CSS
  scale?: number;         // a cuánto escala la onda
  duration?: number;      // tiempo total de animación
}