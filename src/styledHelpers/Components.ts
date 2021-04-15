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
    background: ${Colors.bodycolor};
    display: flex;
    justify-content: center;
    padding: 5px;
    align-items: space-between;
    ${boxShadow()};
`;