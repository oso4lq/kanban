import Column from "../Column/Column";

const translateStatus = (russianStatus) => {
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

// const statusListENG = [
//     'No status',
//     'To Do',
//     'In process',
//     'Testing',
//     'Ready',
// ];
const statusListRU = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
];

export function ColumnList({ cardList }) {
    console.log(cardList);
    return (
        statusListRU.map((status) => (
            <Column
                key={status}
                title={translateStatus(status)}
                cardList={cardList.filter((card) => card.status === status)}
            />
        )))
}