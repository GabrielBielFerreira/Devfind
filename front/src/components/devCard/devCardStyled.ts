import styled from "styled-components";

const DevCardStyled = styled.div`

    border: solid 3px var(--gray);
    min-height: 200px;
    width: 90%;
    border-radius: 16px;
    position: relative;
    padding: 32px 20px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    cursor: pointer;
    transition: 0.5s;

    figure {
        width: 100px;
        height: 100px;
        position: absolute;
        right: -50px;
        bottom: -50px;
        z-index: 3;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: solid var(--gray) 3px;
            transition: 0.5s;
            object-fit: cover;
        }
    }

    .userName {
        border: solid var(--gray) 3px;
        width: fit-content;
        padding: 6px 62px 6px 16px;
        border-radius: 12px;
        font-size: 24px;
        font-weight: 600;
        position: absolute;
        right: 0px;
        bottom: -25px;
        background-color: var(--white-1);
        transition: 0.5s;
        /* color: var(--primaryColor); */
    }

    .userTitle {
        border: solid var(--gray) 3px;
        width: fit-content;
        padding: 6px 24px;
        font-size: 20px;
        font-weight: 600;
        position: absolute;
        top: -22px;
        background-color: var(--white-1);
        left: 32px;
        border-radius: 10px;
        transition: 0.5s;
        
    }

    .city {
        position: absolute;
        right: 20px;
        top: 6px;
        font-size: 18px;
        font-weight: 600;
        transition: 0.5s;
    }

    .text {
        font-size: 18px;
        letter-spacing: 1px;
        line-height: 25px;
    }

    .skil {

        ul {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;

            li {
                padding: 6px 20px;
                background-color: var(--gray);
                border-radius: 10px;

                p {
                    font-weight: 600;
                    letter-spacing: 1PX;
                }
            }
        }
    }

    &:hover {
        transition: 0.5s;
        transform: scale(1.03);
        box-shadow: 0px 6px 10px rgb(0, 0, 0, 0.25);

        .userName, .userTitle, .city {
            color: var(--blue);
            transition: 0.5s;
            border-color: var(--blue);
        }

        .userName {
            padding-right: 74px;
        }

        .userName {
            box-shadow: 6px 6px 10px rgb(0, 0, 0, 0.25);
        }

        img {
            transition: 0.5s;
            border-color: var(--blue);
            box-shadow: 6px 6px 10px rgb(0, 0, 0, 0.25);
            transform: scale(1.2);
        }

        border-color: var(--blue);
        transition: 0.5s;
    }

    @media (max-width: 700px) {
        gap: 20px;
        width: 100%;

        figure {
            top: -40px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;

            img {
                width: 75px;
                height: 75px;
            }
        }

        .userName {
            justify-self: center;
            padding: 5px 20px;
            left: auto;
            right: auto;
            align-self: center;
            font-size: 20px;
            bottom: -23px;
        }

        span {
            display: flex;
            flex-direction: column;
       
        }

        .userTitle {
            position: relative;
            top: auto;
            border: none;
            margin-top: 10px;
        }

        .city {
            position: relative;
            top: auto;
            right: auto;
            align-self: center;
            font-size: 16px;
        }

        .text {
            font-size: 16px;
        }
        
        .skil ul {

            justify-content: center;

            li p {
            /* font-size: 14px; */
            font-weight: 400;
            }

        } 

        &:hover {
            .userName {
                padding-right: 20px;
            }
        }
    }
`

export default DevCardStyled