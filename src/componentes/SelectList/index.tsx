import "./SelectList.css";

interface SelectListProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required: boolean;
  items: any[];
}

const SelectList = ({
  label,
  value,
  onChange,
  required,
  items,
}: SelectListProps) => {
  return (
    <div className="select-list">
      <label>{label}</label>
      <select
        onChange={(evento) => onChange(evento.target.value)}
        required={required}
        value={value}
      >
        <option value=""></option>
        {items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectList;
