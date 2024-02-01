import { Link } from "react-router-dom";
import { useContext, useState } from "react";

//  Pages
import { AppRoutes } from "../lib/appRoutes";

//  API, Logics
import { addTask, getTasks } from "../api";
import { TasksContext } from "../contexts/tasks.jsx";
import { useUser } from '../hooks/useUser.jsx';
import { useTasks } from "../hooks/useTasks.jsx";

//  Components
import { Calendar } from "../components/Calendar/Calendar";

function AddCardPage() {

    const { userData } = useUser();
    const [selected, setSelected] = useState();
    const { returnUser } = useTasks();
    const { userTasks, setUserTasks } = useContext(TasksContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewTask({
            ...newTask,
            [name]: value,
        });
    };

    const [newTask, setNewTask] = useState({
        title: "",
        topic: "",
        description: "",
    });

    const addCard = async () => {

        let newCard = {
            ...newTask, data: selected
        }
        console.log(newCard);

        await addTask({ token: userData.token, title: newCard.title, topic: newCard.topic, status: newCard.status, description: newCard.description, date: newCard.date })

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
        {/* pop-new-card */}
        <div className="pop-new-card__container">
            <div className="pop-new-card__block">
                <div className="pop-new-card__content">
                    <div className="pop-browse__top-block">
                        <h3 className="pop-new-card__ttl">Create task</h3>
                    </div>

                    <div className="pop-new-card__wrap">

                        <form
                            className="pop-new-card__form form-browse"
                            id="formBrowseCard"
                            action="#"
                        >
                            <div className="form-new__block">

                                <label htmlFor="textArea01" className="subttl">
                                    Task name
                                </label>
                                <textarea value={newTask.title}
                                    onChange={handleInputChange}
                                    className="form-new__input"
                                    name="title"
                                    id="textArea01"
                                    readOnly=""
                                    placeholder="Enter task name..."
                                // defaultValue={""}
                                />

                                <label htmlFor="textArea01" className="subttl">
                                    Task description
                                </label>
                                <textarea value={newTask.description}
                                    onChange={handleInputChange}
                                    className="form-new__area"
                                    name="description"
                                    id="textArea01"
                                    readOnly=""
                                    placeholder="Enter task description..."
                                // defaultValue={""}
                                />

                            </div>

                            {/*
                            <div className="categories__theme theme-top _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>

                             ??? 
                            <div className="theme-down__categories theme-down">
                                <p className="categories__p subttl">Category</p>
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                            </div>
                            */}

                            <div className="pop-browse__status status">
                                <p className="status__p subttl">Category</p>
                                <div className="status__themes">

                                    <div className="status__theme _orange">
                                        <input type="radio" id="radio1" name="topic" onChange={handleInputChange} value="Web Design" />
                                        <label htmlFor="radio1">Web Design</label>
                                    </div>

                                    <div className="status__theme _green">
                                        <input type="radio" id="radio2" name="topic" onChange={handleInputChange} value="Research" />
                                        <label htmlFor="radio2">Research</label>
                                    </div>

                                    <div className="status__theme _purple">
                                        <input type="radio" id="radio3" name="topic" onChange={handleInputChange} value="Copywriting" />
                                        <label htmlFor="radio3">Copywriting</label>
                                    </div>

                                </div>
                            </div>

                            {/* make an array.map() for topics? */}

                        </form>

                        <div className="calendar__block">

                            <div className="pop-new-card__calendar calendar">
                                <Calendar selected={selected} setSelected={setSelected} />
                            </div>

                        </div>

                    </div>

                    <div className="pop-browse__btn-browse ">

                        <Link to={AppRoutes.HOME}>
                            <button className="btn-browse__close _btn-bg _hover01">
                                Cancel
                            </button>
                        </Link>

                        {/* <Link to={AppRoutes.HOME} onClick={addCard}> */}
                        <button onClick={addCard} className="btn-browse__close _btn-bg _hover01">
                            Create task
                        </button>
                        {/* </Link> */}

                    </div>

                    <div className="pop-browse__btn-edit _hide">
                        <div className="btn-group">
                            <button className="btn-edit__edit _btn-bg _hover01">
                                <a href="#">Save</a>
                            </button>
                            <button className="btn-edit__edit _btn-bor _hover03">
                                <a href="#">Cancel</a>
                            </button>
                            <button
                                className="btn-edit__delete _btn-bor _hover03"
                                id="btnDelete"
                            >
                                <a href="#">Delete task</a>
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
export default AddCardPage;