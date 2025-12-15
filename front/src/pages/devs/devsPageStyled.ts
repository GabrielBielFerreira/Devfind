import styled from "styled-components";

const DevPageStyled = styled.main`

    /* border: solid red; */
    /* display: flex; */

    .title {
        margin-left: 32px;
    }
  
    .devContainer {
        display: flex;
        width: 100%;
        /* border: solid green 2px; */
        justify-content: space-between;
    }

    .filterSection {
        
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-top: 32px;
        width: 35%;
        padding: 32px;
        
        
 

        .inputContainer {
            border: solid var(--gray) 3px;
            width: 100%;
            height: 50px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            padding: 0px 16px;
            gap: 10px;
            color: var(--primaryColor);

            &:focus-within {
                border-color: var(--blue);
                color: var(--blue);

                select {
                    color: var(--blue);
                }

                input {
                    color: var(--blue);

                    &::-webkit-input-placeholder{
                        color: var(--blue);
                    }
                }
            }

            .icon {
                width: 35px;
                height: 35px;
                
            }

            input {
                width: 100%;
                height: 35px;
                font-size: 20px;
                border: none;
                font-weight: 600;
                color: var(--primaryColor);
                outline: none;
                
              
            }

            select {
                border: none;
                width: 100%;
                outline: none;
                font-size: 20px;
                color: var(--primaryColor);
                font-weight: 600;
               
            }
        }

        .filter {
            border-top: 3px solid var(--gray);
            padding-top: 32px;
            display: flex;
            flex-direction: column;
            gap: 32px;

            span {
                display: flex;
                justify-content: space-between;
                padding-right: 16px;
                font-size: 24px;
                color: var(--primaryColor);
            }

           

            ul {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;

                li {
                    padding: 6px 12px;
                    border: solid var(--gray-2) 2px;
                    border-radius: 8px;
                    display: flex;
                    gap: 10px;
                    color: var(--gray-2);
                    font-weight: 600;
                    align-items: center;

                    p {
                        color: var(--gray-2);
                    }
                }
            }
        }
    }

    .listSection {
        /* border: solid yellow 2px; */
        width: 65%;
        border-left: 3px solid var(--gray);
        padding-left: 32px;
        display: flex;
        flex-direction: column;
        margin-top: 64px;


        .devList {
            display: flex;
            flex-direction: column;
            gap: 70px;
            padding-bottom: 64px;
        }

        button {
            align-self: center;
            border: solid var(--primaryColor) 2px;
            padding: 8px 44px;
            font-size: 20px;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            transition: 0.5s;

            &:hover {
                background-color: var(--primaryColor);
                color: var(--white-1);
                transition: 0.5s;
            }
        }
    }

    @media (max-width: 1000px) {
    
        .filterSection {
            display: none;
        }

        .listSection {
            width: 100%;
        }
    }

     @media (max-width: 1000px) {
    
        
        .listSection {
            padding: 16px;
            .devList {
                gap: 90px;
                
            }
        }
    }
`

export default DevPageStyled