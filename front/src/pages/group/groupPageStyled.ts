import styled from "styled-components";

const GroupPageStyled = styled.main`

    /* border: solid red 2px; */
   /* background-color: red; */
    display: flex;
    justify-content: center;

    .group {
        width: 100%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        display: flex;
        flex-direction: column;
        padding: 16px;
       

        h1 {
            font-size: 48px;
            /* margin-left: 32px; */
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
            /* justify-content: center; */
            width: 100%;
            display: flex;
            gap: 3%;
            row-gap: 50px;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media (max-width: 1000px) {
        .group {

            h1 {
                font-size: 42px;
            }

            ul {
                gap: 50px 12px;
            }
        }
    }

    @media (max-width: 800px) {
        .search  {
            input {
                /* font-size: 18px; */
                width: 100%;
            }
        }

        .group {

            h1 {
                font-size: 36px;
            }

            ul {
                gap: 24px 12px;
            }
        }
    }

    
`

export default GroupPageStyled