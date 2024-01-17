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
                    key={card.id}
                    id={card.id}
                    theme={card.theme}
                    themeColor={card.themeColor}
                    title={card.title}
                    date={card.date}
                    status={card.status} />
            ))}

        </ColumnCard>
    </MainColumn>
}

export default Column;