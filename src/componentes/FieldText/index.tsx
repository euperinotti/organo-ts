import { ChangeEvent } from "react";
import "./FieldText.css";

interface FieldTextProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required: boolean;
  placeholder: string;
  type?: "text" | "password" | "date" | "email" | "number";
}

const FieldText = ({
  label,
  value,
  onChange,
  required,
  placeholder,
  type = "text",
}: FieldTextProps) => {
  const newPlaceholder = `${placeholder}...`;

  const handleInput = (evento: ChangeEvent<HTMLInputElement>) => {
    onChange(evento.target.value);
  };

  return (
    <div className="field-text">
      <label>{label}</label>
      <input
        value={value}
        onChange={handleInput}
        required={required}
        placeholder={newPlaceholder}
        type={type}
      />
    </div>
  );
};

export default FieldText;
