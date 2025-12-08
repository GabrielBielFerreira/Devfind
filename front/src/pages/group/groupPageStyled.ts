import styled from "styled-components";

const GroupPageStyled = styled.main`

    /* border: solid red 2px; */
   /* background-color: red; */

    .group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 48px;
            margin-left: 32px;
        }

        .search {
            max-width: 400px;
            width: 100%;
            height: 50px;
            /* background-color: red; */
            border: solid 2px var(--gray);
            border-radius: 12px;
            display: flex;
            align-items: center;
            padding: 10px;
            gap: 16px;
            align-self: center;
        }

        .searchIcon {
           font-size: 28px;
           color: var(--primaryColor);
           
        }

        input {
            font-size: 24px;
            border: none;
            outline: none;
            color: var(--primaryColor);
            font-weight: 600;

            &::-webkit-input-placeholder {
                color: var(--primaryColor);
            }
        }

        ul {
            justify-content: center;
            width: 100%;
            display: flex;
            gap: 3%;
            
        }
    }
`

export default GroupPageStyled