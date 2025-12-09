import styled from "styled-components";

const GroupCardStyled = styled.li`
    width: 30%;
    max-width: 400px;
    height: fit-content;
    border: solid 2px var(--gray);
    border-radius: 16px;
    color: var(--primaryColor);
    padding: 16px;
    gap: 32px;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: 0.5s;
        border-color: var(--blue);
        color: var(--blue);

        .title {
            color: var(--blue);
            transition: 0.5s;
        }

         .detail p {
            color: var(--blue);
            transition: 0.5s;
         }

         .buttons button {
            border-color: var(--blue);
            color: var(--blue);
            transition: 0.5s;
        }
    }

    p {
        color: var(--primaryColor);
        font-weight: 600;
        transition: 0.5s;
    }

    .title {
        font-size: 28px;
        font-weight: 600;
        transition: 0.5s;
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
            transition: 0.5s;
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
            transition: 0.5s;
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

    @media (max-width: 1200px) {
        gap: 24px;

        .title {
            font-size: 24px;
        }

        .detail {
       
            span {
                display: flex;
                gap: 10px;
                font-size: 18px;
            }
        }

        .buttons {
            gap: 10px;
            height: fit-content;
        
            button {
                font-size: 16px;
                padding: 10px;
                height: auto;
               
            }
        }
    }

    @media (max-width: 900px) {
        width: 45%;

    }

    @media (max-width: 600px) {
        width: 100%;
        
    }
`

export default GroupCardStyled