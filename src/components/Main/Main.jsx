import { MainBox, MainBlock, MainContent } from './Main.styled';
import { ColumnList } from '../ColumnList/ColumnList';

function Main({ cardList, isLoaded, hasError }) {
    return (
        <MainBox className='main'>
            <div className="container">
                <MainBlock>
                    <MainContent>

                        {
                            isLoaded ? 'Please wait. Loading...' :
                                hasError ? `Error occured: ${hasError}` :
                                    <ColumnList cardList={cardList} />
                        }

                    </MainContent>
                </MainBlock>
            </div>
        </MainBox >
    )
}
export default Main;