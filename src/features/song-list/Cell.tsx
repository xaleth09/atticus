import styled from "styled-components";
import {Row} from "../../components/FlexBox.tsx";

type CellProps = {
    $width?: string;
};

export const Cell = styled(Row)<CellProps>`
    flex: 0 0 ${({$width}) => $width || 'auto'};
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
