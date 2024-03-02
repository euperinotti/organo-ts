import { FormEvent, useState } from "react";
import { IMember } from "../../models/Member";
import Button from "../Button";
import FieldText from "../FieldText";
import SelectList from "../SelectList";
import "./Form.css";

interface FormProps {
  teams: string[]
  onNewMemberRegistered: (member: IMember) => void
}

const Form = ({teams, onNewMemberRegistered}: FormProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const onSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewMemberRegistered({
      name: nome,
      role: cargo,
      image: imagem,
      team: time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <FieldText
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(value) => setNome(value)}
        />
        <FieldText
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          onChange={(value) => setCargo(value)}
        />
        <FieldText
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          onChange={(value) => setImagem(value)}
          required={true}
        />
        <SelectList
          required={true}
          label="Time"
          items={teams}
          value={time}
          onChange={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
