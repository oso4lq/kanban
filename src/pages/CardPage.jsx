import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

import { deleteTask, editTask, getTasks } from "../api";
import { useUser } from "../hooks/useUser";
import { useContext, useState } from "react";
import { TasksContext } from "../contexts/tasks.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import { Calendar } from "../components/Calendar/Calendar.jsx";


function CardBrowsePage() {

    const { userData } = useUser();
    const { returnUser, userTasks } = useTasks();
    const { setUserTasks } = useContext(TasksContext);

    console.log('ololo ' + userTasks);

    console.log(userData);
    console.log("user token: " + userData.token);
    console.log("user id: " + userData._id);

    let { id } = useParams();
    console.log("card id: " + id);

    const deleteCard = async () => {

        console.log('deleting card');

        await deleteTask({ token: userData.token, id })

        getTasks({ token: userData.token })
            .then((data) => {
                setUserTasks(data.tasks);
            })
            .then(() => {
                returnUser();
            })
            .catch(() => {
                throw new Error('Something went wrong');
            });
    };

    const [isEditing, setIsEditing] = useState(false);
    const startEditing = () => {
        setIsEditing(true);
    };
    const cancelEditing = () => {
        setIsEditing(false);
    };

    const editCard = async () => {

        console.log('sending edits to card');

        await editTask({ token: userData.token, id })

        getTasks({ token: userData.token })
            .then((data) => {
                setUserTasks(data.tasks);
            })
            .then(() => {
                returnUser();
            })
            .catch(() => {
                throw new Error('Something went wrong');
            });
    };

    return <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
            <div className="pop-browse__block">
                <div className="pop-browse__content">

                    <div className="pop-browse__top-block">
                        <h3 className="pop-browse__ttl">{userTasks}Task name {id}</h3>
                        <div className="categories__theme theme-top _orange _active-category">
                            <p className="_orange">Web Design</p>
                        </div>
                    </div>

                    <div className="pop-browse__status status">
                        <p className="status__p subttl">Status</p>
                        <div className="status__themes">
                            <div className="status__theme _hide">
                                <p>No status</p>
                            </div>
                            <div className="status__theme _gray">
                                <p className="_gray">To do</p>
                            </div>
                            <div className="status__theme _hide">
                                <p>In process</p>
                            </div>
                            <div className="status__theme _hide">
                                <p>Testing</p>
                            </div>
                            <div className="status__theme _hide">
                                <p>Ready</p>
                            </div>
                        </div>
                    </div>

                    <div className="pop-browse__wrap">
                        <form
                            className="pop-browse__form form-browse"
                            id="formBrowseCard"
                            action="#"
                        >
                            <div className="form-browse__block">
                                <label htmlFor="textArea01" className="subttl">
                                    Task description
                                </label>
                                <textarea
                                    className="form-browse__area"
                                    name="text"
                                    id="textArea01"
                                    readOnly=""
                                    placeholder="Enter task description..."
                                    defaultValue={""}
                                />
                            </div>
                        </form>

                        <div className="calendar__block calendar__nav">
                            {/* <p className="calendar__ttl subttl">Dates</p> */}
                            <div className="pop-new-card__calendar calendar">
                                <Calendar />
                            </div>
                        </div>

                    </div>

                    <div className="theme-down__categories theme-down">
                        <p className="categories__p subttl">Category</p>
                        <div className="categories__theme _orange _active-category">
                            <p className="_orange">Web Design</p>
                        </div>
                    </div>

                    {/* <div className="pop-browse__btn-browse"> */}
                    <div className={`pop-browse__btn-browse ${isEditing ? '_hide' : ''}`}>
                        <div className="btn-group">

                            {/* <button className="btn-browse__edit _btn-bor _hover03">
                                <a href="#">Edit task</a>
                            </button> */}
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

                    {/* <div className="pop-browse__btn-edit _hide"> */}
                    <div className={`pop-browse__btn-edit ${isEditing ? '' : '_hide'}`}>
                        <div className="btn-group">

                            <button onClick={editCard} className="btn-edit__edit _btn-bg _hover01">
                                Save
                            </button>

                            {/* <button className="btn-edit__edit _btn-bor _hover03">
                                <a href="#">Cancel</a>
                            </button> */}
                            <button onClick={cancelEditing} className="btn-edit__edit _btn-bor _hover03">
                                Cancel
                            </button>

                            {/* <button
                                className="btn-edit__delete _btn-bor _hover03"
                                id="btnDelete" >
                                <a href="#">Delete task</a>
                            </button> */}
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
}
export default CardBrowsePage;