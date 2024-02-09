import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes.js";

import { deleteTask, editTask } from "../../api.js";
import { useUser } from "../../hooks/useUser.jsx";
import { useState } from "react";
import { useTasks } from "../../hooks/useTasks.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import {
    BrowseButtonGroup, CategoryTheme, FormBrowseArea, FormBrowseBlock,
    PopBrowseBlock, PopBrowseButtons, PopBrowseContainer, PopBrowseContent,
    PopBrowseDiv, PopBrowseForm, PopBrowseTitle, PopBrowseTop, PopBrowseWrap,
    StTheme, Status, StatusParagraph, StatusThemes, TopicsButton,
} from "./BrowseEdit.styled.js";
// import { CategoriesTheme } from "../Common/Common.styled.js";
import { GlobalStyle } from "../../Global/Global.styled.js";
import Button from "../Common/Common.styled.js";

function BrowseEdit({ id }) {

    const { userData } = useUser();
    const { userTasks, returnTask } = useTasks();

    // console.log(userTasks);
    // console.log("card id: " + id);

    const taskData = userTasks.find((task) => task._id === id);

    // console.log(userData);
    // console.log("user token: " + userData.token);
    // console.log("user id: " + userData._id);
    const [selected, setSelected] = useState(taskData.date);

    const [currentStatus, setCurrentStatus] = useState('');
    const handleIsChecked = (name) => {
        setCurrentStatus(name);
        console.log(name);
        editedTask.status = name;
    };
    const topics = [
        {
            engname: 'No status',
            runame: 'Без статуса',
        },
        {
            engname: 'To do',
            runame: 'Нужно сделать',
        },
        {
            engname: 'In process',
            runame: 'В работе',
        },
        {
            engname: 'Testing',
            runame: 'Тестирование',
        },
        {
            engname: 'Ready',
            runame: 'Готово',
        }
    ]

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
                status: editedTask.status, description: editedTask.description, date: selected,
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
    const handleInputChange = (e) => {
        console.log('item editing');
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

    return (
        <>
            <GlobalStyle />
            <PopBrowseDiv id="popBrowse">
                <PopBrowseContainer>
                    <PopBrowseBlock>
                        <PopBrowseContent>

                            <PopBrowseTop>
                                <PopBrowseTitle>{editedTask.title}</PopBrowseTitle>
                                {/* <PopBrowseTitle>{editedTask.title} (id {id})</PopBrowseTitle> */}

                                <CategoryTheme className={`${color} _active-category`}>
                                    <p>{editedTask.topic}</p>
                                </CategoryTheme>

                            </PopBrowseTop>

                            <Status>
                                <StatusParagraph>Status</StatusParagraph>

                                <StatusThemes className={`${isEditing ? '_hide' : ''}`}>
                                    <StTheme className="_gray">
                                        <p className="_gray">{statusENG}</p>
                                    </StTheme>
                                </StatusThemes>

                                <StatusThemes className={`${isEditing ? '' : '_hide'}`}>
                                    {topics.map((e) => (
                                        <TopicsButton
                                            key={e.engname}
                                            type="button" id={e.engname}
                                            className={`
                                                ${currentStatus === e.runame ? '_selected-status _gray' : ''}
                                                ${editedTask.status === e.runame ? '_selected-status _gray' : ''}
                                            `}
                                            checked={currentStatus === e.runame}
                                            onClick={() => handleIsChecked(e.runame)}>
                                            {e.engname}
                                        </TopicsButton>
                                    ))}
                                </StatusThemes>
                            </Status>

                            <PopBrowseWrap>
                                <PopBrowseForm id="formBrowseCard" action="#">
                                    <FormBrowseBlock className={`${isEditing ? '_hide' : ''}`}>
                                        <label htmlFor="textArea01" className="subttl">
                                            Task description
                                        </label>
                                        <FormBrowseArea
                                            value={editedTask.description}
                                            className="form-browse__area"
                                            name="description"
                                            id="textArea01"
                                            readOnly
                                        />
                                    </FormBrowseBlock>
                                    <FormBrowseBlock className={`${isEditing ? '' : '_hide'}`}>
                                        <label htmlFor="textArea01" className="subttl">
                                            Task description
                                        </label>
                                        <FormBrowseArea
                                            value={editedTask.description}
                                            onChange={handleInputChange}
                                            className="form-browse__area"
                                            name="description"
                                            id="textArea01"
                                            placeholder="Enter task description..."
                                        />
                                    </FormBrowseBlock>
                                </PopBrowseForm>

                                <div className={`${isEditing ? '_hide' : ''}`}>
                                    <Calendar selected={selected} readOnly />
                                </div>
                                <div className={`${isEditing ? '' : '_hide'}`}>
                                    <Calendar selected={selected} setSelected={setSelected} />
                                </div>

                            </PopBrowseWrap>

                            <PopBrowseButtons className={`${isEditing ? '_hide' : ''}`}>
                                <BrowseButtonGroup>
                                    <Button onClick={startEditing}>
                                        Edit task
                                    </Button>
                                    <Button onClick={deleteCard}>
                                        Delete task
                                    </Button>
                                </BrowseButtonGroup>
                                <Link to={AppRoutes.HOME}>
                                    <Button>
                                        Close
                                    </Button>
                                </Link>
                            </PopBrowseButtons>

                            <PopBrowseButtons className={`pop-browse__btn-edit ${isEditing ? '' : '_hide'}`}>
                                <BrowseButtonGroup>
                                    <Button onClick={editCard}>
                                        Save
                                    </Button>
                                    <Button onClick={cancelEditing}>
                                        Cancel
                                    </Button>
                                    <Button onClick={deleteCard}>
                                        Delete task
                                    </Button>
                                </BrowseButtonGroup>
                                <Link to={AppRoutes.HOME}>
                                    <Button>
                                        Close
                                    </Button>
                                </Link>
                            </PopBrowseButtons>

                        </PopBrowseContent>
                    </PopBrowseBlock>
                </PopBrowseContainer>
            </PopBrowseDiv >
        </>
    )
}
export default BrowseEdit;