import Card from "../Card/Card"
import { MainColumn, ColumnTitle, ColumnTitleP, ColumnCard } from "./Column.styled";
import { translateStatus } from "../ColumnList/ColumnList";

function Column({ title, cardList }) {
    return <MainColumn>
        <ColumnTitle>
            <ColumnTitleP>{title}</ColumnTitleP>
        </ColumnTitle>
        <ColumnCard>

            {cardList.map((card) => (
                <Card
                    key={card._id}
                    id={card._id}
                    status={translateStatus(card.status)}
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