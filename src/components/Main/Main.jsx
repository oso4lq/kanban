import { Container } from '../Common/Common.styled';
import { MainBox, MainBlock, MainContent } from './Main.styled';
import { ColumnList } from '../ColumnList/ColumnList';

function Main({ cardList, isLoaded }) {
    console.log(cardList);
    console.log(isLoaded);
    return <MainBox className='main'>
        <Container>
            <MainBlock>
                <MainContent>

                    {
                        isLoaded ? 'Loading' :
                            <ColumnList cardList={cardList} />
                    }

                </MainContent>
            </MainBlock>
        </Container>
    </MainBox >
}
export default Main;