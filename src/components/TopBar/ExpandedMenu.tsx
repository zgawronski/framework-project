import { FC } from 'React';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';

const WrapperNav = styled.div`
    position: absolute;
    top: 24px;
    left: 0px;
    background: ${Colors.white};
    padding: 16px;
    border: 1px solid;
    z-index: 10;
    ul {
        width: 230px;
        border: 1 solid ${Colors.black};
    }
`;



export const ExpandedMenu: FC = () => {
    return (
        <WrapperNav>
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

        </WrapperNav>
    );
};