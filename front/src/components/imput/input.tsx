import InputStyled from "./inputStyled";

const Input = ({type, title}: {type: string, title: string}) => {


    return (
        <InputStyled>
            <input type={`${type}`} placeholder=""/>
            <label htmlFor={`${title}`}>{title}</label>
        </InputStyled>
    )
}

export default Input