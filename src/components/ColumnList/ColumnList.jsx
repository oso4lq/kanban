import Column from "../Column/Column";

export const statusList = [
    'No status',
    'To Do',
    'In process',
    'Testing',
    'Ready',
];

export function ColumnList({ cardList }) {
    return (
        statusList.map((status) => (
            <Column
                key={status}
                title={status}
                cardList={cardList.filter((card) => card.status === status)}
            />
)))
}