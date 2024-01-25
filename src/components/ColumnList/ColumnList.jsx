import Column from "../Column/Column";

export const translateStatus = (russianStatus) => {
    switch (russianStatus) {
        case 'Без статуса':
            return 'No status';
        case 'Нужно сделать':
            return 'To Do';
        case 'В работе':
            return 'In process';
        case 'Тестирование':
            return 'Testing';
        case 'Готово':
            return 'Ready';
        default:
            return russianStatus;
    }
};

export const statusListENG = [
    'No status',
    'To Do',
    'In process',
    'Testing',
    'Ready',
];

export const statusListRU = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
];


export function ColumnList({ cardList }) {
    console.log(cardList);
    return (
        statusListENG.map((status) => (
            <Column
                key={status}
                title={status}
                cardList={cardList.filter((card) => card.status === status)}
            />
        )))
}