import styled from "styled-components";

const InputStyled = styled.div`

    border: solid var(--gray) 2px;
    height: 60px;
    width: 100%;
    border-radius: 16px;
    position: relative;
    padding: 10px 20px 0px 20px;

    

    &:hover {
        

        label {
            top: -18px;
            transition: 1s;
            left: 20px;
            border: 2px solid var(--gray);

        }
    }

    label {
        font-size: 22px;
        font-weight: 600;
        position: absolute;
        background-color: var(--white-1);
        padding: 2px 20px;
        left: 10px;
        top: 10px;
        border-radius: 10px;
        border: solid 2px var(--white-1);
    }

    input {
        border: none;
        outline: none;
        width: 100%;
        height: 50px;
        background-color: transparent;
        font-size: 20PX;
        color: var(--primaryColor);
        font-weight: 600;
    }

     input:focus + label,
     input:not(:placeholder-shown) + label {
        top: -18px;
            transition: 1s;
            left: 20px;
            border: 2px solid var(--gray);
    }
`

export default InputStyled