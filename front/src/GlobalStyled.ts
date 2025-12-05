import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
         
    }

    h1, h2, h3, button, p {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        color: var(--primaryColor);
    }

    ul, li {
        list-style: none;
    }

    :root {
        --primaryColor: #2C363E;
        --white-1: #fff;
        --blue: #4E8FD7;
        --gray: #E2E2E2;
    }

    body {
        overflow-x: hidden;
        width: 100vw;
        
        
        &::-webkit-scrollbar {
           width: 10px;
           background-color: var(--primaryColor);
        }

        &::-webkit-scrollbar-thumb {
           background-color: var(--gray);
           border-radius: 4px;
        }
    }

    .allPages {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100vw;
        justify-content: space-between;
        overflow-x: hidden;
        

        main {
            
     
            padding-top: 120px;
            padding-bottom: 48px;
            min-height: calc(100vh - 180px);
            max-width: 1600px;
            align-self: center;
            width: 100vw;
            
    
        }

        header {
            position: fixed;
            top: 0px;
          
            z-index: 10;
            width: 100%;
        }

        footer {
            position: relative;
            bottom: 0px;
            width: 100%;
        }
        
    }
`