export const ease = (t: number) => {
  return Math.round(0.5 * (1 - Math.cos(Math.PI * t)) * 100);
}

export const fun = (t: number) => {
  return Math.round(0.7 * (1 - Math.cos(Math.PI * t)) * 100);
}

export const linear = (t: number) => {
  return Math.round(t * 100);
}