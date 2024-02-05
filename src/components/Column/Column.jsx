import Card from "../Card/Card"
import { MainColumn, ColumnTitle, ColumnTitleP, ColumnCard } from "./Column.styled";

function Column({ title, cardList }) {
    return <MainColumn>
        <ColumnTitle>
            <ColumnTitleP>{title}</ColumnTitleP>
        </ColumnTitle>
        <ColumnCard>

            {cardList.map((card) => (
                <Card
                    key={card.date}
                    // key={card._id}
                    id={card._id}
                    status={card.status}
                    theme={card.topic}
                    themeColor={card.themeColor}
                    title={card.title}
                    date={card.date}
                />
            ))}

        </ColumnCard>
    </MainColumn>
}

export default Column;