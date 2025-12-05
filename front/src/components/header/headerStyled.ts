import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100vw;
    height: 84px;
    background-color: var(--primaryColor);
    padding: 0px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 4px solid var(--white-1);

    box-shadow: 0px -15px 20px rgb(0, 0, 0, 0.25) inset;

    .devFindLogo {
        object-fit: cover;
        height: 80px;
        width: 125px;

    }

    nav {
        display: flex;
        gap: 8px;

        .buttonContainer {
            display: flex;
            height: 40px;
            width: fit-content;
            padding: 0px 8px;
            /* background-color: #fff; */
            border-radius: 12px;
            transition: 0.7;

            &:hover {
                transition: 0.5s;
                background-color: var(--white-1);

                button {
                    color: var(--primaryColor);
                    
                }
            }

            button {
                background-color: transparent;
                border: none;
                font-size: 24px;
                font-weight: bold;
                color: var(--white-1);
            }
        }
    }
`