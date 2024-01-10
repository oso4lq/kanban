import Column from '../Column/Column';
import { Container } from '../Common/Common.styled';

export const statusList = [
    'No status',
    'To Do',
    'In process',
    'Testing',
    'Ready',
];

function Main({ cardList, isLoaded }) {
    return <main className="main">
        <Container>
            <div className="main__block">
                <div className="main__content">

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

                </div>
            </div>
        </Container>
    </main >
}
export default Main;