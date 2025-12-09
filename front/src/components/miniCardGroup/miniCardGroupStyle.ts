import styled from "styled-components";

const MiniCardGroupStyled = styled.li`
    width: 100%;
    max-width: 400px;
    height: fit-content;
    border: solid 3px var(--gray);
    border-radius: 12px;
    min-height: 120px;
    padding: 12px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        transition: 0.5s;
        border-color: var(--blue);
        transform: translateX(10px);

        .title {
            color: var(--blue);
            transition: 0.5s;
        }

        .groupDetail p {
            color: var(--blue);
            transition: 0.5s;
        }
    }

    .title {
        font-size: 20px;
        font-weight: 600;
        width: 100%;
        text-align: center;
        transition: 0.5s;
    }

    .groupDetail {
        font-size: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 12px;
    }

    @media (max-width: 900px) {
        padding: 8px;

        .title {
            font-size: 18px;
            font-weight: 600;
            width: 100%;
            text-align: center;
            transition: 0.5s;
        }

        .groupDetail {
            font-size: 16px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-top: 12px;
        }
    }

`

export default MiniCardGroupStyled