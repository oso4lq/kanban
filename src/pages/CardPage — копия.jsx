import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

import { deleteTask, editTask, getTasks } from "../api";
import { useUser } from "../hooks/useUser";
import { useContext, useState } from "react";
import { TasksContext } from "../contexts/tasks.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import { Calendar } from "../components/Calendar/Calendar.jsx";


async function CardBrowsePage() {

    const { userData } = useUser();
    const { returnUser, } = useTasks();
    const { setUserTasks } = useContext(TasksContext);

    console.log(userData);
    console.log("user token: " + userData.token);
    console.log("user id: " + userData._id);

    let { id } = useParams();
    console.log("card id: " + id);



    //  delete task function
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

    //  fill useState array with current task data ?
    const [editedTask, setEditedTask] = useState({
        title: "",
        topic: "",
        status: "",
        description: "",
        date: "",
    });

    //  find task function
    //  default array  
    let currentArray = {
        title: "",
        topic: "",
        status: "",
        description: "",
        date: "",
    };
    // function uses card id from useParams to find an array with needed data and fills the default array with it
    let searchKey = id;
    console.log(searchKey);
    const findTaskData = async () => {
        await getTasks({ token: userData.token })
            .then((data) => {
                console.log(data.tasks);
                currentArray.title = data.tasks.find(item => item._id === searchKey).title;
                currentArray.topic = data.tasks.find(item => item._id === searchKey).topic;
                currentArray.status = data.tasks.find(item => item._id === searchKey).status;
                currentArray.description = data.tasks.find(item => item._id === searchKey).description;
                currentArray.date = data.tasks.find(item => item._id === searchKey).date;
            })
    }
    await findTaskData()
    console.log(currentArray);




    //  edit card function
    const editCard = async () => {
        console.log('sending edits to card');
        await editTask({
            token: userData.token, id,
            title: '', topic: '', status: '', description: '', date: ''
        })
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
                        {/* use card.data */}
                        <h3 className="pop-browse__ttl">Task name ({id})</h3>

                        {/* use card.data */}
                        <div className="categories__theme theme-top _orange _active-category">
                            <p className="_orange">Web Design</p>
                        </div>

                    </div>

                    <div className="pop-browse__status status">
                        <p className="status__p subttl">Status</p>
                        {/* use card.data */}
                        <div className={`status__themes ${isEditing ? '_hide' : ''}`}>
                            <div className="status__theme _gray">
                                <p className="_gray">To do</p>
                            </div>
                        </div>
                        <div className={`status__themes ${isEditing ? '' : '_hide'}`}>
                            <div className="status__theme ">
                                <input type="radio" id="radio1" name="status" onChange={handleInputChange} value="No status" />
                                <label htmlFor="status1">No status</label>
                            </div>
                            <div className="status__theme ">
                                <input type="radio" id="radio2" name="status" onChange={handleInputChange} value="To do" />
                                <label htmlFor="status2">To do</label>
                                {/* <p className="_gray">To do</p> */}
                            </div>
                            <div className="status__theme ">
                                <input type="radio" id="radio3" name="status" onChange={handleInputChange} value="In process" />
                                <label htmlFor="status3">In process</label>
                            </div>
                            <div className="status__theme ">
                                <input type="radio" id="radio4" name="status" onChange={handleInputChange} value="Testing" />
                                <label htmlFor="status4">Testing</label>
                            </div>
                            <div className="status__theme ">
                                <input type="radio" id="radio5" name="status" onChange={handleInputChange} value="Ready" />
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
                            {/* use card.data */}
                            <div className="form-browse__block">
                                <label htmlFor="textArea01" className="subttl">
                                    Task description
                                </label>
                                <textarea
                                    onChange={handleInputChange}
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
}
export default CardBrowsePage;