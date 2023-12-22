import Card from "../Card/Card"

function Column({ title }) {
    return <div className="main__column">
        <div className="column__title">
            <p>{title}</p>
        </div>
        <div className="cards">
            
            <Card theme={""} name={""} date={""}/>
            <Card theme={""} name={""} date={""}/>
            <Card theme={""} name={""} date={""}/>

        </div>
    </div>

}

export default Column;