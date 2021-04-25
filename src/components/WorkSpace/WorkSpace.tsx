import { FC } from 'React';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';

import { Slider } from './Slider'

const WrapperW = styled(Wrapper)`
    display: block;
    h2{
        font-size: ${fontSize[22]};
        font-weight: 600;
        color: ${Colors.black};


    }
`;


export const WorkSpace: FC = () => {
    return (
        <WrapperW>
            <h2>Workspaces</h2>
            <Slider/>
        </WrapperW>
    );
}

