import styled from "styled-components";

const ExperienceCardStyled = styled.div`
    max-width: 500px;
    width: 100%;
    height: 140px;
    border: solid 4px var(--gray);
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 16px;

    .title {
        color: var(--blue);
        font-weight: bold;
        font-size: 24px;
    }

    .text {
        color: var(--primaryColor);
        font-size: 20px;
        padding: 3px 0px;
    }

    @media (max-width: 800px) {
        .title {
            font-size: 20px;
        }

        .text {
            font-size: 18px;
        }
    }
`

export default ExperienceCardStyled