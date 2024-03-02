import './Member.css'

export interface MemberProps {
    name: string;
    image: string;
    role: string;
    backgroundColor: string;
}

const Member = ({ name, image, role, backgroundColor }: MemberProps) => {
    return (<div className='member'>
        <div className='head' style={{ backgroundColor: backgroundColor }}>
            <img src={image} alt={name}/>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{role}</h5>
        </div>
    </div>)
}

export default Member