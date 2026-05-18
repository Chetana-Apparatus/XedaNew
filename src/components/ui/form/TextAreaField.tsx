interface TextAreaFieldProps {
  label: string;
  placeholder: string;
  name?: string;
  required?: boolean;
}

export default function TextAreaField({
  label,
  placeholder,
  name,
  required = false,
}: TextAreaFieldProps) {
  const fieldId = name ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label
        htmlFor={fieldId}
        className="mb-3 block text-sm font-medium uppercase tracking-wide text-white/80"
      >
        {label}
      </label>

      <textarea
        id={fieldId}
        rows={6}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full resize-none border-b-2 border-lime-400 bg-[#2a5a5a] px-5 py-5 text-lg text-white outline-none placeholder:text-white/60 transition-all duration-300 focus:border-white"
      />
    </div>
  );
}
