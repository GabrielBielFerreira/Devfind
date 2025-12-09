import styled from "styled-components";

const HomePageStyled = styled.main`

    display: grid;
    justify-content: space-between;
    grid-template-columns: 30% 40% 30%;
    padding: 32px;


    .center {
        min-height: 300px;
        max-width: 500px;
        grid-column:2/3;

        ul {
            display: flex;
            flex-direction: column;
            gap: 48px;
        }
    }

    .right {
        grid-column:3/3;
        max-width: 400px;
    }

    .left{
        min-height: 300px;
        max-width: 400px;
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 96px;
        
        .perfil {
            display: flex;
            gap: 16px;
            position: relative;

            img {
                width: 100px;
                height: 100px;
                object-fit: cover;
                border-radius: 12px;
                border: solid 3px transparent;
                transition: 0.5s;
            }

             &:hover{
                img {
                    border-color: var(--blue);
                    background-color: aqua;
                    transition: 0.5s;
                }

                .userDetail .button {
                    background-color: var(--blue);
                    transition: 0.5s;
                }
            }

            .userDetail {
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 100%;

                .userName {
                    font-weight: 600;
                    font-size: 26px;
                }

                .detail {
                    font-size: 18px;
                }

                .button {
                    background-color: var(--primaryColor);
                    color: var(--white-1);
                    padding: 5px;
                    text-align: center;
                    font-weight: 600;
                    font-size: 20px;
                    border-radius: 8px;
                    margin-top: 20px;
                    position: absolute;
                    width: 100%;
                    left: 0px;
                    bottom: -50px;
                    transition: 0.5s;
                }
            }
        }

        ul {
            border-top: solid 3px var(--gray);
            position: relative;
            padding-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            transition: 0.5s;

            &:hover {
                border-color: var(--blue);
                transition: 0.5s;

                h3 {
                    border-color: var(--blue);
                    transition: 0.5s;
                    color: var(--blue);
                }
            }

            span {
                position: absolute;
                top: -20px;
                width: 100%;
                display: flex;
                justify-content: center;

                h3 {
                    border: solid 3px var(--gray);
                    width: 150px;
                    padding: 4px;
                    text-align: center;
                    border-radius: 12px;
                    background-color: var(--white-1);
                    transition: 0.5s;  
                }
            }
        }
    }

    @media (max-width: 1500px) {
        grid-template-columns: 27% 40% 27%;
        padding: 16px;
    }

    @media (max-width: 1300px) {
        grid-template-columns: 28% 38% 28%;
        padding: 16px;
    }

    @media (max-width: 1100px) {
        grid-template-columns: 40% 55%;
        padding: 16px;

        .right {
            grid-column: auto;
            height: 300px;
        }
    }

    @media (max-width: 900px) {
        
        .left {
            .perfil {
                img {
                    width: 75px;
                    height: 75px;
                }

               .userDetail {
                    gap: 6px;

                    .userName {
                        font-size: 22px;
                    }

                    .detail {
                        font-size: 16px;
                    }

                    .button {
                        font-size: 18px;
                        bottom: -40px;
                    }

               }
            }
        }
      
    }

    @media (max-width: 1100px) {
        display: flex;
        padding: 16px;
        justify-content: center;

        .right {
            display: none;
        }
        .left {
            display: none;
        }

        .center {
            width: 100%;
        }
    }
`

export default HomePageStyled