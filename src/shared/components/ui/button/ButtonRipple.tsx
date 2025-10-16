// src/shared/components/ui/button/ButtonRipple.tsx
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { RippleEffect } from "./RippleEffect"
import { type ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ButtonRippleProps } from "./types"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Ripple = { x: number; y: number; size: number; key: number }

export function ButtonRipple({
  children,
  variant = "default",
  size = "default",
  className,
  onClick,
  rippleColor,
  rippleScale = 10,
  rippleDuration = 0.6,
  ...props
}: ButtonRippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    return () => setRipples([])
  }, [])

  // Disparamos el ripple apenas se presiona
  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    // puedes usar el tamaño del botón si prefieres una onda más grande
    const baseSize = Math.max(rect.width, rect.height) * 0.25 // punto de partida pequeño
    const newRipple: Ripple = { x, y, size: baseSize, key: Date.now() + Math.random() }

    setRipples(prev => [...prev, newRipple])

    // limpiar tras terminar la animación (match con rippleDuration)
    window.setTimeout(() => {
      setRipples(prev => prev.filter(r => r.key !== newRipple.key))
    }, rippleDuration * 1000)

    props.onPointerDown?.(e)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
  }

  const variants = {
    default: `bg-gray-100 text-gray-900 hover:bg-gray-200/90 hover:scale-105 ${isPressed ? 'bg-gray-300/90' : ''}`,
    primary: `bg-[#52655B] text-white hover:bg-[#52655B]/90 hover:scale-105 ${isPressed ? 'bg-[#52655B]/80' : ''}`,
    outline: `border-2 border-[#52655B] text-[#52655B] hover:scale-105`,
    ghost: `hover:bg-gray-100/50 hover:scale-105 ${isPressed ? 'bg-gray-200/50' : ''}`,
  } as const

  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-10 px-6",
    icon: "h-9 w-9",
  } as const

  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-md font-medium transition-all duration-200",
        "outline-none focus-visible:ring-2 focus-visible:ring-[#52655B]/50 focus-visible:ring-offset-1",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        size === 'icon' && "flex items-center justify-center",
        className
      )}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => {
        setIsPressed(false)
        const el = document.activeElement as HTMLElement | null
        el?.blur()
      }}
      onBlur={() => setIsPressed(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* ripples */}
      <AnimatePresence>
        {ripples.map(({ x, y, size, key }) => (
          <RippleEffect
            key={key}
            x={x}
            y={y}
            size={size}                    // tamaño inicial pequeño; la animación lo lleva al scale final
            color={rippleColor}            // si no lo pasas, usa la CSS var por defecto
            scale={rippleScale}            // por defecto 10 (igual que Animate UI)
            duration={rippleDuration}      // por defecto 0.6s (igual que Animate UI)
          />
        ))}
      </AnimatePresence>
    </button>
  )
}
