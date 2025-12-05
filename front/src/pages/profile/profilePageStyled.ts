import styled from "styled-components";

const ProfilePageStyled= styled.main`
    padding: 0px 5%;
    /* margin-top: 16px; */
    display: flex;
    gap: 64px;

    .profileDetail {
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 40px;

        h1 {
            font-size: 48px;
        }

        .mainDetail {
            display: flex;
            gap: 16px;
            align-items: center;
         

            img {
                border: solid 2px var(--gray);
                border-radius: 50%;
                width: 200px;
                height: 200px;
                object-fit: cover;
                border: solid 4px var(--gray);
                transition: 1s;
                
                &:hover {
                    border-color: var(--blue);
                    transition: 1s;
                }
            }

            .text {
                display: flex;
                flex-direction: column;

                h2 {
                    font-size: 48px;
                }

                p {
                    font-size: 28px;
                    font-weight: 600;
                }

                .city {
                    font-size: 20px;
                   
                }

                button {
                    margin-top: 16px;
                    width: 200px;
                    height: 40px;
                    color: var(--white-1);
                    font-weight: 600;
                    font-size: 20px;
                    background-color: var(--primaryColor);
                    border-radius: 12px;
                     border: solid 2px transparent;
                    /* align-self: center; */
                }
            }
        }

        .about {
            h3 {
                font-size: 32px;
            }

            p {
                font-size: 20px;
                letter-spacing: 1px;
                font-weight: lighter;
                line-height: 150%;
            }
        }

        .skil {
            display: flex;
            gap: 16px;
            flex-direction: column;

            h3 {
                font-size: 32px;
            }

            ul {
                display: flex;
                gap: 16px;

                li {
                    background: var(--primaryColor);
                    padding: 10px;
                    border-radius: 12px;
                    
                    p {
                        color: var(--white-1);
                        font-size: 20px;
                    }
                }
            }
        }
    }

    .experience {
        width: 40%;
     
        ul {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 24px;
        }

        h2 {
            font-size: 32px;
            margin-top: 100px;
        }
    }

    @media (max-width: 1000px) {
        /* background-color: red; */
        flex-direction: column;

        .profileDetail {
            width: 100%;
        }

        .experience {
            width: 100%;
        }
    }

    @media (max-width: 800px) {
        /* background-color: red; */
        gap: 0px;

        .profileDetail {

           
            
            h1 {
                font-size: 38px;
            }

            .mainDetail {
                flex-direction: column;

                img {
                    width: 150px;
                    height: 150px;
                }

                .text {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    

                    h2 {
                        font-size: 32px;
                    }

                    p {
                        font-size: 16px;
                        /* font-weight: 400; */
                       
                    }

                    .city {
                        font-size: 18px;
                    
                    }

                    button {
                       
                        width: 100%;
                        max-width: 300px;
                        /* margin-top: 16px;
                        width: 200px;
                        height: 40px;
                        color: var(--white-1);
                        font-weight: 600;
                        font-size: 20px;
                        background-color: var(--primaryColor);
                        border-radius: 12px;
                        border: solid 2px transparent;
                        align-self: center; */
                    }

                    
                }
            }

            .about {
                display: flex;
                flex-direction: column;
                gap: 12px;

                h3 {
                    font-size: 32px;
                    /* align-self: center; */
                }

                p {
                    font-size: 16px;
                    text-align: justify;
                    /* color: red; */
                    font-weight: 400;
                }
            }

            .skil {
              
             
                h3 {
                    font-size: 32px;
                }
                
                ul {
                    flex-direction: column;
                    /* width: 100%; */

                    li {
                        display: flex;
                        justify-content: center;
                    }
                }
            }
        }

        .experience {
    
        }
    }
    
`

export default ProfilePageStyled