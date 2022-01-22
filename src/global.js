import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
    }

    html{ 
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
        //caso o usuario use uma fonte maior no celular dele o nosso valor 
        //irá se adaptar
    }

    //rem - 1rem --> tamanho da fonte da aplicação 

    body { 
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    
   
`;
