import type { ReactNode } from "react";

interface SelectFieldProps {
  label: string;
  name: string;
  required?: boolean;
  compact?: boolean;
  children: ReactNode;
}

export default function SelectField({
  label,
  name,
  required = false,
  compact = false,
  children,
}: SelectFieldProps) {
  const labelClass = compact
    ? "mb-2 block text-xs font-medium uppercase tracking-wide text-white/80"
    : "mb-3 block text-sm font-medium uppercase tracking-wide text-white/80";

  const selectClass = compact
    ? "h-12 w-full cursor-pointer border-b-2 border-lime-400 bg-[#2a5a5a] px-4 text-base text-white outline-none transition-all duration-300 focus:border-white [&>option]:bg-[#2a5a5a] [&>option]:text-white"
    : "h-16 w-full cursor-pointer border-b-2 border-lime-400 bg-[#2a5a5a] px-5 text-lg text-white outline-none transition-all duration-300 focus:border-white [&>option]:bg-[#2a5a5a] [&>option]:text-white";

  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <select id={name} name={name} required={required} className={selectClass}>
        {children}
      </select>
    </div>
  );
}
