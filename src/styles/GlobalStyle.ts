import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #E6A7C2;
}

::-webkit-scrollbar-thumb {
    background-color: #0b0b0b;
}

`