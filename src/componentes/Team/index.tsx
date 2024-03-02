import Member, { MemberProps } from "../Member";
import "./Team.css";

interface TeamProps {
  mainColor: string;
  secondColor: string;
  name: string;
  members: MemberProps[];
}

const Team = ({ mainColor, secondColor, name, members }: TeamProps) => {
  const css = { backgroundColor: secondColor };

  return members.length > 0 ? (
    <section className="team" style={css}>
      <h3 style={{ borderColor: mainColor }}>{name}</h3>
      <div className="colaboradores">
        {members.map((member) => (
          <Member {...member} />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
