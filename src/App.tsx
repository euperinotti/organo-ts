import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Team from "./componentes/Team";
import { IMember } from "./models/Member";

function App() {
  const times = [
    {
      name: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      name: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      name: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      name: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      name: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      name: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState<IMember[]>([]);

  const onNewMemberRegistered = (colaborador: IMember) => {
    debugger;
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner src="/imagens/banner.png" alt="Organo" />
      <Form
        teams={times.map((time) => time.name)}
        onNewMemberRegistered={(member) => onNewMemberRegistered(member)}
      />

      {times.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          mainColor={team.corPrimaria}
          secondColor={team.corSecundaria}
          members={colaboradores.filter((member) => member.team === team.name)}
        />
      ))}
    </div>
  );
}

export default App;
