import { useState } from "react";
import Button from "../Button";
import FieldText from "../FieldText";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
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
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          value={time}
          onChange={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulario;
