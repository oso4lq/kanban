import Column from '../Column/Column';

export const statusList = [
    'No status',
    'To Do',
    'In process',
    'Testing',
    'Ready',
];

function Main({ cardList, isLoaded }) {
    return <main className="main">
        <div className="container">
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
        </div>
    </main >
}
export default Main;