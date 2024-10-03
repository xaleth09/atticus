import {Row} from "../../components/FlexBox.tsx";
import styled from "styled-components";
import {useSelectedPlaylist} from "./hooks/useSelectedPlaylist.tsx";

const ClickableRow = styled(Row)`
    cursor: pointer;
`;

type Props = {
    selected: boolean | null;
    name: string;
}

export const PlaylistRow = ({
                                name
                            }: Props) => {

    const {selectedPlaylist, setSelectedPlaylist} = useSelectedPlaylist();

    return (
        <ClickableRow
            $padding={'24px'}
            $backgroundColor={selectedPlaylist === name ? 'orchid' : 'white'}
        >
            <span>{name}</span>
        </ClickableRow>
    );
};
