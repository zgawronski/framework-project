import { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors';
export const GlobalStyle = createGlobalStyle`
    body {
        background: ${Colors.bodycolor};
    }
`