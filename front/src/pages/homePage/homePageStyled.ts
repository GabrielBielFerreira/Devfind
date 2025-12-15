import styled from "styled-components";

const HomePageStyled = styled.main`
    display: grid;
    justify-content: space-between;
    grid-template-columns: 28% 38% 28%;
    padding: 32px;
    column-gap: 20px;

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
        position: relative;
    
        .container {
            position: fixed;
            width: 26%;
           
        }

        .notification {
            margin-bottom: 48px;
            height: 25vh;
        }

        .menssage {
            height: 55vh;
        }

        .notification, .menssage {
            border-top: solid var(--gray);
            position: relative;
            
            padding: 40px 0px;
            width: 100%;

            display: flex;
            justify-content: center;

            ul {
                width: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 32px;
                overflow-y: auto;
                overflow-x: hidden;
            }

           span {
            width: 100%;
            display: flex;
            justify-content: center;
            position: absolute;
            top: -20px;
            
                h3 {
                    width: 150px;
                    padding: 5px;
                    position: absolute;
                    border: solid var(--gray) 3px;
                    border-radius: 12px;
                    text-align: center;
                    background-color: var(--white-1);
                }
           }
        }
    }

    .left{
        grid-column:1/1;
        position: relative;
        
        .perfil {
            display: flex;
            gap: 16px;
            position: relative;
            position: sticky;
            width: 100%;
            top: 0px;
        
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

        .container {
           position: fixed;
        }

        .sectionTitle {
            position: relative;
            align-items: center;
            width: 100%;
            display: flex;
            justify-content: center;
            border-top: solid 3px var(--gray);
            margin-bottom: 32px;

            span {
                width: 100%;
                display: flex;
                justify-content: center;
                width: 100%;
                position: absolute;
                top: -20px;
            }

            h3 {
                border: solid 3px var(--gray);
                width: 150px;
                padding: 4px;
                text-align: center;
                border-radius: 12px;
                background-color: var(--white-1);
            }
        }
    }

    .groupList {
        position: relative;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        transition: 0.5s;
        max-width: 400px;
        top: 100px;
        height: 60vh;
        overflow-y: auto;
    }

    @media (max-width: 1500px) {
        grid-template-columns: 27% 40% 27%;
        padding: 16px;
    }

    @media (max-width: 1300px) {
        grid-template-columns: 28% 38% 28%;
        padding: 16px;

        .left {
            .container {
                width: 28%;
            }
        }
    }

    @media (max-width: 1100px) {
        grid-template-columns: 40% 55%;
        padding: 16px;

        .right {
            grid-column: auto;
            height: 300px;
        }

        .left {
            .container {
                width: 35%;
            }
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

    @media (max-width: 700px) {
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