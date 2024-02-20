### The App logic corresponds to the description of use, which is attached to the layout in Figma.

**Sign in, Sign up**

- The user is prompted to enter their email and password, if they are already registered, and click “Login.”
- If the user has not yet registered, he needs to click “Register here”.
- If you enter incorrect data, an error message appears.
- The “Login” button becomes inactive and turns gray.

- On the registration screen, the user comes up with a name, email and password. After that, he clicks “Register”.
- If the user realizes that they already have an account, they can click “Sign in here” and return to the “Sign in” screen.
- After registration, the user is again taken to the “Login” start screen, where he enters his login and password again.
- If you enter incorrect data or if the user does not fill in one of the fields, an error message appears.
- The “Login” button becomes inactive and turns gray.


**Main page**

- After filling in the data and clicking on the “Login” button, the user is taken to the main screen of the Kanban board.
- Kanban consists of cards with tasks, which are located under the columns in which execution status they are in.
- The task card contains the category, task name and due date. Also on the card in the upper right corner there are three dots, when clicked, the task editing mode opens, and when you click on the task name, the task view mode opens.


**PopUp window**

- When you click on the “User Window”, the user opens a window where his name and email are displayed, and there is also the ability to change the theme to dark and log out of the account.
- When you click on “Logout,” a window opens for the user to confirm that he or she is leaving the account. When you click “Yes, exit”, you are logged out. When you click “No, Stay,” the kanban remains on the screen and the “Log Out” window closes.


**Create new task**

- When you click on the “Create a new task” button, a window opens for the user to create a task.
   The background with the kanban is darkened when the window is opened.
- The task creation window contains fields to fill out: “Task name”, “Task description”. It is also possible to select a category and set a deadline. After filling out the information, you need to click on the “Create task” button - then the card with the task falls on the Kanban board.
- The deadline is selected by clicking on the required date. Below the calendar, where it says “Select a due date,” the selected deadline for the task is automatically entered.
- The category is selected by clicking on the required selection. The active selected category appears bright, while unselected categories have transparency.


**Browse and edit task**

- When you click on a card with a task, a window opens with a more detailed view of this task, where the user can see the task description, due date and status.
- These fields are inactive for clicking and editing until the user clicks “Edit task”.
- It is possible to delete a task. If the user clicks “Delete task”, the task disappears from the Kanban board.
- When you click the “Close” button, the task view window closes and the user sees the kanban again.

- When you click on the “Edit task” button, the user has the opportunity to interact with the “Status”, “Task Description” and “Dates” fields.
- When editing, additional statuses appear in the “Status” field. When you click on a different (not selected) status, the task on the Kanban board moves to the selected column.
- To apply all changes, you must click on the “Save” button.
- To cancel changes, you must click on the “Cancel” button.
- To close the window, you must click on the “Close” button.


### The App design matches the layout, styling is done using Styled Components.


### All files have formatting applied and there are no errors or linter warnings.


### The logic for interacting with the API works correctly, the loading indicator works, errors are processed and displayed to the user.


### The App runs without errors in the console.