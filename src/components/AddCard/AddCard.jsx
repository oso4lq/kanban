import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//  Pages
import { AppRoutes } from "../../lib/appRoutes";

//  API, Logics
import { addTask } from "../../api";
import { useUser } from '../../hooks/useUser.jsx';

//  Components
import { Calendar } from "../../components/Calendar/Calendar";
import { GlobalStyle } from "../../Global/Global.styled.js";
import { ButtonContainer, CalendarBlock, CalendarBlockP, CategoriesButton, CategoriesContainer, CategoriesP, CategoriesTheme, CategoriesThemes, FormNewArea, FormNewBlock, FormNewInput, PopNewCardBlock, PopNewCardContainer, PopNewCardContent, PopNewCardDiv, PopNewCardForm, PopNewCardTtl, PopNewCardWrap } from "./AddCard.styled.js";
import Button from "../Common/Common.styled.js";

function AddCard() {

    const { userData } = useUser();
    const navigate = useNavigate();

    const [selected, setSelected] = useState();

    const [newTask, setNewTask] = useState({
        title: "",
        topic: "",
        description: "",
    });

    const [currentCategory, setCurrentCategory] = useState('');
    const handleIsChecked = (id) => {
        setCurrentCategory(id);
    }
    const categories = [
        {
            id: 'Web Design',
            color: '_orange',
        },
        {
            id: 'Research',
            color: '_green',
        },
        {
            id: 'Copywriting',
            color: '_purple',
        }
    ]

    const handleInputChange = (e) => {
        console.log('item editing');
        const { name, value } = e.target;
        setNewTask({
            ...newTask,
            [name]: value,
        });
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
                title: newCard.title, topic: currentCategory, status: newCard.status, description: newCard.description, date: newCard.date
            })
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
                                            {categories.map((e) => (
                                                <CategoriesTheme
                                                    key={e.id}>
                                                    <CategoriesButton
                                                        type="button" id={e.id}
                                                        className={`${currentCategory === e.id ? '_selected-category' : ''} ${e.color}`}
                                                        onClick={() => handleIsChecked(e.id)}>
                                                        {e.id}
                                                    </CategoriesButton>
                                                </CategoriesTheme>
                                            ))}
                                        </CategoriesThemes>

                                        {/* <CategoriesThemes>
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
                                        </CategoriesThemes> */}

                                    </CategoriesContainer>
                                </PopNewCardForm>

                                <CalendarBlock>
                                    <CalendarBlockP>Choose deadline:</CalendarBlockP>
                                    <Calendar selected={selected} setSelected={setSelected} />
                                </CalendarBlock>

                            </PopNewCardWrap>

                            <ButtonContainer>
                                <Link to={AppRoutes.HOME}>
                                    <Button className="btn-browse__close _btn-bg _hover01">
                                        Cancel
                                    </Button>
                                </Link>
                                <Button onClick={addCard}>
                                    Create task
                                </Button>
                            </ButtonContainer>

                        </PopNewCardContent>
                    </PopNewCardBlock>
                </PopNewCardContainer>
            </PopNewCardDiv>
        </>
    )
}

export default AddCard;