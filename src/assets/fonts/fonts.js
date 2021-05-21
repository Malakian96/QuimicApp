import { createGlobalStyle } from 'styled-components';
import CutiveMono from "./Cutive_Mono/CutiveMono-Regular.ttf";
import Lexend from "./Lexend/Lexend-Regular.ttf";

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Cutive Mono';
        font-weight: 400;
        font-style: normal;
        src: local('Cutive Mono'), url(${CutiveMono}) format('truetype');
    }

    @font-face {
        font-family: 'Lexend';
        font-weight: 400;
        font-style: normal;
        src: local('Lexend'), url(${Lexend}) format('truetype');
    }
`;

export default GlobalFonts;

