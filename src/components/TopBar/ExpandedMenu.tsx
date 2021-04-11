import { FC } from 'React';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 24px;
    left: 0px;
    background: white;
    padding: 16px;
    border: 1px solid;
`;

export const ExpandedMenu: FC = () => {
    return (
        <Wrapper>
            <ul>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
            </ul>

        </Wrapper>
    );
};