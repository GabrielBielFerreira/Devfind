import styled from "styled-components";

const MiniCardContactStyled = styled.li`
    max-width: 400px;
    width: 100%;
    height: 100px;
    border: solid 3px var(--gray);
    border-radius: 16px;
    display: flex;
    position: relative;
    align-items: center;
    gap: 16px;
    padding: 16px;
    transition: 0.5s;
    margin-top: 4px;

    &:hover {
        transition: 0.5s;
        border-color: var(--blue);
        transform: scale(1.05);
        border-radius: 8px;

        .userDetail p {
            color: var(--blue);
        }

        .chatButton {
            p {
                transition: 0.5s;
                border-color: var(--blue);
                color: var(--blue);
                padding: 5px 32px;
                border-radius: 6px;
                /* transform: scale(1.05); */
            }
        }
    }

    figure {
        width: 50px;
        height: 50px;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .userDetail {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .userName {
            font-size: 18px;
            font-weight: 600;
        }
        .text {
            font-size: 16px;
        }
    }

    .chatButton {
        position: absolute;
        width: 100%;

        display: flex;
        justify-content: center;
        bottom: -20px;
        

        p {
            border: solid var(--gray) 3px;
            padding: 4px 20px;
            background-color: var(--white-1);
            border-radius: 8px;
            transition: 0.5s;
        }
    }
`

export default MiniCardContactStyled