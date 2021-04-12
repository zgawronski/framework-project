import styled from 'styled-components';
import { Colors } from './Colors';

export type Styles = {
    [ruleOrSelector: string]: string | number | Styles,
}

const boxShadow = (): Styles => {
    return {
        color: `${Colors.black}`
    };
};

export const Wrapper = styled.div`
    background: rgb(250, 250, 250);
    display: flex;
    justify-content: center;
    padding: 5px;
    ${boxShadow()};
`;