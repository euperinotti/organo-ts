import { ChangeEvent, SyntheticEvent } from "react";
import "./FieldText.css";

interface FieldTextProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required: boolean;
  placeholder: string;
}

const FieldText = ({
  label,
  value,
  onChange,
  required,
  placeholder,
}: FieldTextProps) => {
  const newPlaceholder = `${placeholder}...`;

  const handleInput = (evento: ChangeEvent<HTMLInputElement>) => {
    onChange(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={value}
        onChange={handleInput}
        required={required}
        placeholder={newPlaceholder}
      />
    </div>
  );
};

export default FieldText;
