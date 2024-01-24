import Column from "../Column/Column";

export const statusList = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
];
/*
IF CASE
export const statusList = {}
    'No status',
    'To Do',
    'В работе',
    'Testing',
    'Ready',
};*/

export function ColumnList({ cardList }) {
    console.log(cardList);
    return (
        statusList.map((status) => (
            <Column
                key={status}
                title={status}
                cardList={cardList.filter((card) => card.status === status)}
            />
        )))
}