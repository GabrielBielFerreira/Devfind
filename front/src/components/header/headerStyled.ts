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

    /* box-shadow: 0px -15px 20px rgb(0, 0, 0, 0.25) inset; */

    .devFindLogo {
        object-fit: cover;
        height: 80px;
        width: 125px;

    }

    

    nav {
        display: flex;
        /* gap: 8px; */

        .buttonContainer {
            display: flex;
            height: 40px;
            width: fit-content;
            padding: 0px 8px;
            /* background-color: #fff; */
            border-radius: 12px;
            transition: 0.7;
            align-items: center;

            &:hover {
                transition: 0.5s;
                background-color: var(--white-1);

                a {
                    color: var(--primaryColor);
                    
                }
            }

            a {
                background-color: transparent;
                border: none;
                font-size: 24px;
                font-weight: bold;
                color: var(--white-1);
                
            }
        }
    }


    .menu {
        display: none;
    }

    @media (max-width: 800px) {
        nav {
           
            .buttonContainer {
                
                a {
                    font-size: 18px;
                    
                }
            }
        }
    }

    @media (max-width: 700px) {
        
        nav {

            .buttonContainer {
                
                a {
                    font-size: 16px;

                }
            }
        }
    }

    @media (max-width: 600px) {
        position: relative;
        padding: 0px 16px;
        
        nav {
            position: absolute;
            flex-direction: column;
            background-color: var(--primaryColor);
            top: 80px;
            right: 0px;
            padding: 16px;
            width: 100%;
            box-shadow: 0px 15px 20px rgb(0, 0, 0, 0.25) inset;
            /* display: none; */
            align-items: end;
            gap: 16px;
        }

        .menuOff {
            display: none;
        }

        .menu {
            display: flex;
            gap: 16px;
            align-items: center;
            
            p {
                color: var(--white-1);
                font-size: 24px;
                font-weight: 600;
            }

            .menuIcon {
                color: var(--white-1);
                width: 35px;
                height: 35px;
            }
        }
    }
`