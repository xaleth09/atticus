import {ReactNode} from "react";
import styled from "styled-components";
import {MainContent} from "./MainContent.tsx";
import {Sidebar} from "./Sidebar.tsx";
import {Row} from "../FlexBox.tsx";

const Page = styled(Row)`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
`;

type Props = {
    children: ReactNode;
}

const PageWithSidebar = ({children}: Props) => {

    return (
        <Page>
            {children}
        </Page>
    );
};

PageWithSidebar.Sidebar = Sidebar;
PageWithSidebar.MainContent = MainContent;

export {PageWithSidebar};


