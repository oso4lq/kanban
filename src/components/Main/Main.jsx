import Column from '../Column/Column';
import { Container } from '../Common/Common.styled';
import { MainBox, MainBlock, MainContent } from './Main.styled';

export const statusList = [
    'No status',
    'To Do',
    'In process',
    'Testing',
    'Ready',
];

function Main({ cardList, isLoaded }) {
    return <MainBox>
        <Container>
            <MainBlock>
                <MainContent>

                    {
                        isLoaded ? 'Loading' :
                            statusList.map((status) => (
                                <Column
                                    key={status}
                                    title={status}
                                    cardList={cardList.filter((card) => card.status === status)}
                                />
                            ))
                    }

                </MainContent>
            </MainBlock>
        </Container>
    </MainBox >
}
export default Main;