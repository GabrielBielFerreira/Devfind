import styled from "styled-components";


const LoginStyled = styled.section`

    width: 100vw;
    height: 100vh;
    /* background-color: aqua; */
    display: flex;

    .logo {
        width: 50vw;
        /* border: solid red 2px; */
        background: linear-gradient(120deg, #28616C,  #27394F);

        figure {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 55%;
                transform: translateY(-60px);
            }
        }
    }

    .form {
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 64px;
        
        /* border: solid blue 2px; */

        .text {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h1 {
                font-size: 38px;
                font-weight: 800;
            }

            p {
                font-size: 22px;
                letter-spacing: 2px;
                max-width: 500px;
                font-weight: 600;
            }
        }

        .inputs {
            display: flex;
            width: 90%;
            max-width: 500px;
            flex-direction: column;
            gap: 48px;            
        }

        .enter {
            width: 90%;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: 18px;
            align-items: center;
            
            

            .login {
                width: 500px;
                z-index: 3;

            }

            a {
                color: var(--blue);
               
            }

            button {
                background-color: var(--white-1);
                border: 2px solid var(--primaryColor);
                padding: 5px 32px;
                width: 100%;
                height: 50px;
                color: var(--primaryColor);
                font-size: 22px;
                font-weight: 600;
                border-radius: 12px;

                &:hover {
                    background-color: var(--primaryColor);
                    color: var(--white-1);
                }
            }
        }
    }
`

export default LoginStyled