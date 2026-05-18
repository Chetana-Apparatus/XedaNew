interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
  required?: boolean;
  compact?: boolean;
  maxLength?: number;
  inputMode?: "numeric" | "text" | "tel" | "email" | "search" | "url";
  pattern?: string;
}

export default function FormField({
  label,
  placeholder,
  type = "text",
  name,
  required = false,
  compact = false,
  maxLength,
  inputMode,
  pattern,
}: FormFieldProps) {
  const labelClass = compact
    ? "mb-2 block text-xs font-medium uppercase tracking-wide text-white/80"
    : "mb-3 block text-sm font-medium uppercase tracking-wide text-white/80";

  const inputClass = compact
    ? "h-12 w-full border-b-2 border-lime-400 bg-[#2a5a5a] px-4 text-base text-white outline-none placeholder:text-white/60 transition-all duration-300 focus:border-white"
    : "h-16 w-full border-b-2 border-lime-400 bg-[#2a5a5a] px-5 text-lg text-white outline-none placeholder:text-white/60 transition-all duration-300 focus:border-white";

  const id = name ?? label.replace(/\W/g, "").toLowerCase();

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        pattern={pattern}
        className={inputClass}
      />
    </div>
  );
}
