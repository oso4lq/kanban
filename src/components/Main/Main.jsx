import Column from '../Column/Column';

function Main({ }) {
    return <main className="main">
        <div className="container">
            <div className="main__block">
                <div className="main__content">

                    <Column title={"No status"}/>
                    <Column title={"To do"}/>
                    <Column title={"In process"}/>
                    <Column title={"Testing"}/>
                    <Column title={"Ready"}/>

                </div>
            </div>
        </div>
    </main>
}
export default Main;