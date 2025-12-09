import styled from "styled-components";

const PostStyled = styled.li`
    width: 100%;
    min-height: 100px;
    height: fit-content;
    border-top: 3px solid var(--gray);
    display: flex;
    flex-direction: column;
    gap: 16px;

    .postHeader {
        display: flex;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        margin-top: 20px;
        
        .user {
            display: flex;
            align-items: center;
            gap: 16px;

            .userName {
                font-size: 20px;
            }

            img {
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 50%;
            }
        }

        .postDetail {
            display: flex;
            gap: 16px;

            font-size: 18px;
        }
    }

    .postContent {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .postTitle {
            font-size: 24px;
            color: var(--blue);
            font-weight: 600;
        }

        .postText {
            text-align: justify;
            letter-spacing: 1px;
            line-height: 22px;
        }

        img {
            width: 100%;
            object-fit: cover;
        }
    }
`

export default PostStyled