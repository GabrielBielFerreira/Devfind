import styled from "styled-components";

const GroupCardStyled = styled.li`
    width: 30%;
    max-width: 400px;
    height: 450px;
    border: solid 2px var(--gray);
    border-radius: 16px;
    color: var(--primaryColor);
    padding: 16px;
    gap: 32px;
    display: flex;
    flex-direction: column;

    p {
        color: var(--primaryColor);
        font-weight: 600;
    }

    .title {
        font-size: 28px;
        font-weight: 600;
    }

    .detail {
        display: flex;
        flex-direction: column;
        gap: 5px;
        overflow-y: auto;

        span {
            display: flex;
            gap: 10px;
            font-size: 22px;
        }
    }

    .buttons {
        display: flex;
        gap: 16px;
        

        button {
            width: 50%;
            height: 40px;
            font-size: 20px;
            font-weight: 600;
            color: var(--primaryColor);
            border: solid 2px var(--primaryColor);
            border-radius: 8px;
            /* padding: 10px; */
        }
    }

    figure {
        width: 100%;

        img {
            width: 100%;
            object-fit: cover;
        }
    }
`

export default GroupCardStyled