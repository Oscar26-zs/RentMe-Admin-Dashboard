import { motion } from "framer-motion";
import type { RippleEffectProps } from "./types";

export function RippleEffect({
  x,
  y,
  size = 20,
  color = "var(--ripple-button-ripple-color, rgba(255,255,255,0.6))",
  scale = 10,
  duration = 0.6,
}: RippleEffectProps) {
  const half = size / 2;

  return (
    <motion.span
      initial={{ scale: 0, opacity: 0.5 }}
      animate={{ scale, opacity: 0 }}
      transition={{ duration, ease: "easeOut" }}
      style={{
        position: "absolute",
        width: size,
        height: size,
        top: y - half,
        left: x - half,
        borderRadius: "50%",
        pointerEvents: "none",
        backgroundColor: color,
      }}
    />
  );
}
