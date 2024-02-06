import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

import { deleteTask, editTask, getTasks } from "../api";
import { useUser } from "../hooks/useUser";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../contexts/tasks.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import { Calendar } from "../components/Calendar/Calendar.jsx";
import { CategoryTheme } from "../components/Common/Common.styled.js";


function CardBrowsePage() {

    const { setUserTasks } = useContext(TasksContext);
    const { userData } = useUser();
    const { userTasks, returnTask } = useTasks();
    console.log(userTasks);

    let { id } = useParams();
    console.log("card id: " + id);

    const taskData = userTasks.find((task) => task._id === id);

    console.log(userData);
    console.log("user token: " + userData.token);
    console.log("user id: " + userData._id);

    //  useState array  
    const [editedTask, setEditedTask] = useState({
        title: taskData.title,
        topic: taskData.topic,
        status: taskData.status,
        description: taskData.description,
        date: taskData.date,
    });

    //  edit task function
    const editCard = async () => {
        try {
            console.log('sending edits to card');
            await editTask({
                token: userData.token, id,
                title: editedTask.title, topic: editedTask.topic,
                status: editedTask.status, description: editedTask.description, date: editedTask.date,
            }).then((data) => {
                returnTask({ data });
            });
        } catch (error) {
            alert(error.message);
            throw new Error(error.message);
        }
    }
    //  edit (cancel editing) card buttons
    const [isEditing, setIsEditing] = useState(false);
    const startEditing = () => {
        setIsEditing(true);
    };
    const cancelEditing = () => {
        setIsEditing(false);
    };

    //  edit card inputs
    const [selected, setSelected] = useState();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({
            ...editedTask,
            [name]: value,
        });
    };

    //  delete task function
    const deleteCard = async () => {
        try {
            console.log('deleting card');
            await deleteTask({ token: userData.token, id })
                .then((data) => {
                    returnTask({ data });
                });
        } catch (error) {
            alert(error.message);
            throw new Error(error.message);
        }
    }



    //  sets the topic's color
    let color;
    switch (taskData.topic) {
        case "Web Design":
            color = "_orange";
            break;
        case "Copywriting":
            color = "_purple";
            break;
        case "Research":
            color = "_green";
            break;
        default:
            color = "_gray";
    }

    // sets ENG status
    let statusENG;
    switch (taskData.status) {
        case "Без статуса":
            statusENG = "No status";
            break;
        case "Нужно сделать":
            statusENG = "To do";
            break;
        case "В работе":
            statusENG = "In process";
            break;
        case "Тестирование":
            statusENG = "Testing";
            break;
        case "Готово":
            statusENG = "Ready";
            break;
        default:
            break;
    }

    return (
        // <>
        //     {
        //         isTaskDataLoaded ? 'Loading' :

        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">

                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{editedTask.title} (id {id})</h3>

                            {/* <div className="categories__theme theme-top _orange _active-category"> */}
                            <CategoryTheme themeColor={color} className="_active-category">
                                <p>{editedTask.topic}</p>
                            </CategoryTheme>

                        </div>

                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Status</p>
                            <div className={`status__themes ${isEditing ? '_hide' : ''}`}>
                                <div className="status__theme _gray">
                                    <p className="_gray">{statusENG}</p>
                                </div>
                            </div>
                            <div className={`status__themes ${isEditing ? '' : '_hide'}`}>
                                <div className="status__theme ">
                                    <input type="radio" id="no-status" name="status"
                                        onChange={handleInputChange}
                                        checked={editedTask.status === "Без статуса"}
                                        value="Без статуса" />
                                    <label htmlFor="status1">No status</label>
                                </div>
                                <div className="status__theme ">
                                    <input type="radio" id="to-do" name="status"
                                        onChange={handleInputChange}
                                        checked={editedTask.status === "Нужно сделать"}
                                        value="Нужно сделать" />
                                    <label htmlFor="status2">To do</label>
                                </div>
                                <div className="status__theme ">
                                    <input type="radio" id="in-process" name="status"
                                        onChange={handleInputChange}
                                        checked={editedTask.status === "В работе"}
                                        value="В работе" />
                                    <label htmlFor="status3">In process</label>
                                </div>
                                <div className="status__theme ">
                                    <input type="radio" id="testing" name="status"
                                        onChange={handleInputChange}
                                        checked={editedTask.status === "Тестирование"}
                                        value="Тестирование" />
                                    <label htmlFor="status4">Testing</label>
                                </div>
                                <div className="status__theme ">
                                    <input type="radio" id="ready" name="status"
                                        onChange={handleInputChange}
                                        checked={editedTask.status === "Готово"}
                                        value="Готово" />
                                    <label htmlFor="status5">Ready</label>
                                </div>
                            </div>
                        </div>

                        <div className="pop-browse__wrap">
                            <form
                                className="pop-browse__form form-browse"
                                id="formBrowseCard"
                                action="#"
                            >

                                <div className={`status__themes ${isEditing ? '_hide' : ''}`}>
                                    <label htmlFor="textArea01" className="subttl">
                                        Task description
                                    </label>
                                    <textarea
                                        value={editedTask.description}
                                        className="form-browse__area"
                                        name="description"
                                        id="textArea01"
                                        readOnly
                                    />
                                </div>
                                <div className={`form-browse__block ${isEditing ? '' : '_hide'}`}>
                                    <label htmlFor="textArea01" className="subttl">
                                        Task description
                                    </label>
                                    <textarea
                                        value={editedTask.description}
                                        onChange={handleInputChange}
                                        className="form-browse__area"
                                        name="description"
                                        id="textArea01"
                                        placeholder="Enter task description..."
                                    />
                                </div>
                            </form>

                            <div className="calendar__block calendar__nav">
                                {/* <p className="calendar__ttl subttl">Dates</p> */}
                                <div className="pop-new-card__calendar calendar">
                                    <Calendar selected={selected} setSelected={setSelected} />
                                </div>
                            </div>

                        </div>

                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Category</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>

                        <div className={`pop-browse__btn-browse ${isEditing ? '_hide' : ''}`}>
                            <div className="btn-group">
                                <button onClick={startEditing} className="btn-browse__edit _btn-bor _hover03">
                                    Edit task
                                </button>
                                <button onClick={deleteCard} className="btn-browse__delete _btn-bor _hover03">
                                    Delete task
                                </button>
                            </div>
                            <Link to={AppRoutes.HOME}>
                                <button className="btn-browse__close _btn-bg _hover01">
                                    Close
                                </button>
                            </Link>
                        </div>

                        <div className={`pop-browse__btn-edit ${isEditing ? '' : '_hide'}`}>
                            <div className="btn-group">
                                <button onClick={editCard} className="btn-edit__edit _btn-bg _hover01">
                                    Save
                                </button>
                                <button onClick={cancelEditing} className="btn-edit__edit _btn-bor _hover03">
                                    Cancel
                                </button>
                                <button onClick={deleteCard} className="btn-browse__delete _btn-bor _hover03">
                                    Delete task
                                </button>
                            </div>
                            <Link to={AppRoutes.HOME}>
                                <button className="btn-edit__close _btn-bg _hover01">
                                    Close
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        //     }
        // </>
    )
}
export default CardBrowsePage;


//  find task function \/

//  ?useEffect loader?
//  problem with currentArray: NO TITLE, NO TOPIC

// const [isTaskDataLoaded, setIsTaskDataLoaded] = useState(true);
// let searchKey = id;
// console.log(searchKey);
// useEffect(() => {
//     getTasks({ token: userData.token })
//         .then((data) => {
//             console.log(data.tasks);
//             currentArray.title = data.tasks.find(item => item._id === searchKey).title;
//             currentArray.topic = data.tasks.find(item => item._id === searchKey).topic;
//             currentArray.status = data.tasks.find(item => item._id === searchKey).status;
//             currentArray.description = data.tasks.find(item => item._id === searchKey).description;
//             currentArray.date = data.tasks.find(item => item._id === searchKey).date;
//         })
//         .then(() => {
//             setIsTaskDataLoaded(false);
//         })
//         .then(() => {
//             console.log(currentArray);
//         })
//     console.log(currentArray);
// }, []);


//  function uses card id from useParams to find an array with needed data and fills the default array with it
//  more useful function than one with useEffect but has no option to load task's data to inputs

// let searchKey = id;
// console.log(searchKey);
// const findTaskData = async () => {

//     await getTasks({ token: userData.token })
//         .then((data) => {
//             console.log(data.tasks);
//             currentArray.title = data.tasks.find(item => item._id === searchKey).title;
//             currentArray.topic = data.tasks.find(item => item._id === searchKey).topic;
//             currentArray.status = data.tasks.find(item => item._id === searchKey).status;
//             currentArray.description = data.tasks.find(item => item._id === searchKey).description;
//             currentArray.date = data.tasks.find(item => item._id === searchKey).date;
//         })
//     console.log(currentArray);
// }
// findTaskData()
