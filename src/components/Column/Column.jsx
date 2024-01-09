import Card from "../Card/Card"

function Column({ title, cardList }) {
    return <div className="main__column">
        <div className="column__title">
            <p>{title}</p>
        </div>
        <div className="cards">

            {cardList.map((card) => (
                <Card
                    key={card.id}
                    theme={card.theme}
                    themeColor={card.themeColor}
                    title={card.title}
                    date={card.date}
                    status={card.status} />
            ))}

        </div>
    </div>
}

export default Column;