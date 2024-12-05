import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: calc(14px + 2 * ((100vw - 500px) / (2000 - 768)));
    }
    body{
        height: 100%;
        width: 100%;
        text-align: center;  
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        color: rgb(69, 85, 96);
        // font-size: 0.875rem;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-variant: tabular-nums;
        line-height: 1.5;
    }
`;

export default GlobalStyles;
