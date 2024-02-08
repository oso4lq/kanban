import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//  Pages
import { AppRoutes } from "../../lib/appRoutes";

//  API, Logics
import { addTask } from "../../api";
// import { TasksContext } from "../../contexts/tasks-context.jsx";
import { useUser } from '../../hooks/useUser.jsx';
// import { useTasks } from "../../hooks/useTasks.jsx";

//  Components
import { Calendar } from "../../components/Calendar/Calendar";
import { GlobalStyle } from "../../Global/Global.styled.js";
import { CalendarBlock, CalendarBlockP, CategoriesContainer, CategoriesP, CategoriesTheme, FormNewArea, FormNewBlock, FormNewInput, PopNewCardBlock, PopNewCardContainer, PopNewCardContent, PopNewCardDiv, PopNewCardForm, PopNewCardTtl, PopNewCardWrap } from "./AddCard.styled.js";

function AddCard() {

    const { userData } = useUser();
    // const { returnTask } = useTasks();
    // const { userTasks, setUserTasks } = useContext(TasksContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        console.log('item editing');
        const { name, value } = e.target;
        setNewTask({
            ...newTask,
            [name]: value,
        });
    };

    const [selected, setSelected] = useState();
    const [newTask, setNewTask] = useState({
        title: "",
        topic: "",
        description: "",
    });

    //  add task function
    const addCard = async () => {
        try {
            console.log('adding new card');
            let newCard = {
                ...newTask, date: selected
            };
            console.log(newCard);
            await addTask({
                token: userData.token,
                title: newCard.title, topic: newCard.topic, status: newCard.status, description: newCard.description, date: newCard.date
            })
            // addTask(newCard)
            .then((data) => {
                setNewTask(data);
                navigate(AppRoutes.HOME);
            });
        } catch (error) {
            alert(error.message);
            throw new Error(error.message);
        }
    };

    return (
        <>
            <GlobalStyle />
            <PopNewCardDiv id="popNewCard">
                <PopNewCardContainer>
                    <PopNewCardBlock>
                        <PopNewCardContent>
                            <PopNewCardTtl>Create new task</PopNewCardTtl>

                            <PopNewCardWrap>

                                <PopNewCardForm id="formBrowseCard" action="#">

                                    <FormNewBlock>
                                        <label htmlFor="textArea01" className="subttl">
                                            Task name
                                        </label>
                                        <FormNewInput
                                            value={newTask.title}
                                            onChange={handleInputChange}
                                            className="form-new__input"
                                            name="title"
                                            id="textArea01"
                                            readOnly=""
                                            placeholder="Enter task name..."
                                        />
                                    </FormNewBlock>

                                    <FormNewBlock>
                                        <label htmlFor="textArea01" className="subttl">
                                            Task description
                                        </label>
                                        <FormNewArea
                                            value={newTask.description}
                                            onChange={handleInputChange}
                                            className="form-new__area"
                                            name="description"
                                            id="textArea01"
                                            readOnly=""
                                            placeholder="Enter task description..."
                                        ></FormNewArea>
                                    </FormNewBlock>

                                    <CategoriesContainer className="pop-new-card__categories prod_checbox">

                                        <CategoriesP className="subttl">Category</CategoriesP>

                                        <CategoriesTheme className="_orange">
                                            <input
                                                type="radio" id="web-design" name="topic" className="_orange" value="Web Design"
                                                checked={newTask.topic === "Web Design"}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="web-design">Web Design</label>
                                        </CategoriesTheme>
                                        <CategoriesTheme className="_green">
                                            <input
                                                type="radio" id="Research" name="topic" className="_green" value="Research"
                                                checked={newTask.topic === "Research"}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="Research">Research</label>
                                        </CategoriesTheme>
                                        <CategoriesTheme className="_purple">
                                            <input
                                                type="radio" id="Copywriting" name="topic" className="_purple" value="Copywriting"
                                                checked={newTask.topic === "Copywriting"}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="Copywriting">Copywriting</label>
                                        </CategoriesTheme>

                                        {/* <div className="status__theme _orange">
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
                                        </div> */}
                                        {/* make an array.map() for topics? */}

                                    </CategoriesContainer>
                                </PopNewCardForm>

                                {/* <p className="calendar__ttl subttl">Dates</p>
                                <Calendar selected={selected} setSelected={setSelected} /> */}
                                <CalendarBlock>
                                    <CalendarBlockP>Dates</CalendarBlockP>
                                    <Calendar selected={selected} setSelected={setSelected} />
                                </CalendarBlock>
                                {/* <div className="calendar__block calendar__nav">
                                    <p className="calendar__ttl subttl">Dates</p>
                                    <div className="pop-new-card__calendar calendar">
                                        <Calendar selected={selected} setSelected={setSelected} />
                                    </div>
                                </div> */}

                            </PopNewCardWrap>

                            <div className="pop-browse__btn-browse ">

                                <Link to={AppRoutes.HOME}>
                                    <button className="btn-browse__close _btn-bg _hover01">
                                        Cancel
                                    </button>
                                </Link>

                                <button onClick={addCard} className="btn-browse__close _btn-bg _hover01">
                                    Create task
                                </button>

                            </div>

                        </PopNewCardContent>
                    </PopNewCardBlock>
                </PopNewCardContainer>
            </PopNewCardDiv>
        </>
    )
}

export default AddCard;