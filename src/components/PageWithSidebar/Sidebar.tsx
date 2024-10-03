import {PropsWithChildren} from 'react';
import styled from "styled-components";
import {Column} from "../FlexBox.tsx";

const SidebarLayout = styled(Column)`
    border-right: 1px solid darkgrey;
    min-width: 300px;
`;

export const Sidebar = ({children}: PropsWithChildren) => {

    return (
        <SidebarLayout>
            {children}
        </SidebarLayout>
    );
};
