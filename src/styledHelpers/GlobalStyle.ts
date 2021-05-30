import { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors';
export const GlobalStyle = createGlobalStyle`
    body {
        background: ${Colors.bodycolor};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;

    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`