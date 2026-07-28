type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

//CSS en base a la variante del boton.
const primaryClass = "bg-baltic-blue-500 hover:bg-baltic-blue-600 focus-visible:ring-white/80";
const secondaryClass = "bg-transparent ring ring-silver-300 text-silver-100 hover:bg-silver-800/50 focus-visible:ring-baltic-blue-500";

export function Button({ variant="primary", children, className, ...props }: ButtonProps ) {
  return (
    <button className={`text-white p-4 rounded-md focus-visible:ring-2 focus-visible:outline-none transition-colors ease-in-out duration-300 select-none ${variant === "primary" ? primaryClass : secondaryClass} ${className}`} {...props}>{children}</button>
  )
}
