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
import { CalendarBlock, CalendarBlockP, CategoriesContainer, CategoriesP, CategoriesTheme, CategoriesThemes, FormNewArea, FormNewBlock, FormNewInput, PopNewCardBlock, PopNewCardContainer, PopNewCardContent, PopNewCardDiv, PopNewCardForm, PopNewCardTtl, PopNewCardWrap } from "./AddCard.styled.js";
import { flushSync } from "react-dom";

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

    //  Toggle category selection
    //  array for 3 categories with true/false state. if one turns true, the others turn false?
    // const [categorySelect, setCategorySelect] = useState({
    //     web_design: false,
    //     research: false,
    //     copywriting: false,
    // });
    // const toggleSelect = () => {
    //     setIsSelected((prevState) => !prevState);
    //     console.log('selected to ' + isSelected);
    // };
    // const { name, value } = e.target;
    // setCategorySelect({
    //     ...categorySelect,
    //     [name]: value,
    // });


    const [isChecked, setIsChecked] = useState(false);
    const handleIsChecked = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);
        // Additional logic if needed
    };


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

                                        <CategoriesThemes>

                                            <CategoriesTheme
                                                className={`${isChecked ? '_selected-category' : ''} _orange`}
                                                checked={isChecked} onClick={handleIsChecked} >
                                                <input
                                                    type="radio" id="web-design" name="topic" className="_orange" value="Web Design"
                                                    checked={isChecked}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="web-design">Web Design</label>
                                            </CategoriesTheme>
                                            <CategoriesTheme
                                                className={`${isChecked ? '_selected-category' : ''} _green`}
                                                checked={isChecked} onClick={handleIsChecked} >
                                                <input
                                                    type="radio" id="Research" name="topic" className="_green" value="Research"
                                                    checked={newTask.topic === "Research"}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="Research">Research</label>
                                            </CategoriesTheme>
                                            <CategoriesTheme
                                                className={`${isChecked ? '_selected-category' : ''} _purple`}
                                                checked={isChecked} onClick={handleIsChecked} >
                                                <input
                                                    type="radio" id="Copywriting" name="topic" className="_purple" value="Copywriting"
                                                    checked={newTask.topic === "Copywriting"}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="Copywriting">Copywriting</label>
                                            </CategoriesTheme>

                                        </CategoriesThemes>



                                        <CategoriesThemes>
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
                                        </CategoriesThemes>
                                    </CategoriesContainer>
                                </PopNewCardForm>

                                {/* <p className="calendar__ttl subttl">Dates</p>
                                <Calendar selected={selected} setSelected={setSelected} /> */}
                                <CalendarBlock>
                                    <CalendarBlockP>Choose deadline:</CalendarBlockP>
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