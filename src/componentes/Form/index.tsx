import { FormEvent, useState } from "react";
import { IMember } from "../../models/Member";
import Button from "../Button";
import FieldText from "../FieldText";
import SelectList from "../SelectList";
import "./Form.css";

interface FormProps {
  teams: string[];
  onNewMemberRegistered: (member: IMember) => void;
}

const Form = ({ teams, onNewMemberRegistered }: FormProps) => {

  const [member, setMember] = useState<IMember>({
    name: "",
    image: "",
    role: "",
    team: "",
    date: "",
  });

  const onSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewMemberRegistered({
      name: member.name,
      role: member.role,
      image: member.image,
      team: member.team,
      date: member.date,
    });

    setMember({ name: "", image: "", role: "", team: "", date: "" });
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <FieldText
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={member.name}
          onChange={(value) => setMember({ ...member, name: value })}
        />
        <FieldText
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={member.role}
          onChange={(value) => setMember({ ...member, role: value })}
        />
        <FieldText
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={member.image}
          onChange={(value) => setMember({ ...member, image: value })}
          required={true}
        />
        <FieldText
          label="Data de entrada no time"
          placeholder=""
          value={member.date!}
          onChange={(value) => setMember({ ...member, date: value })}
          required={true}
          type="date"
        />
        <SelectList
          required={true}
          label="Time"
          items={teams}
          value={member.team}
          onChange={(value) => setMember({ ...member, team: value })}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
