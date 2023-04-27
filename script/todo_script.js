const todoList = [];

function addTodo(){
    const inputElement = document.querySelector('.js-task-input');
    const task = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');
    const date = dateInputElement.value;

    todoList.push({task, date});
    /*shortcut for
    {
        task: task,
        date: date 
    } where property name and value name are same */

    //console.log(todoList);

    inputElement.value = "";
    dateInputElement.value = "";
    addhtml();
}

function addhtml(){
    let todoListHTML = '';

    for (let i=0; i < todoList.length; i++){
        const todoObject = todoList[i];
        /*
        const task = todoObject.task;
        const date = todoObject.date;
        shortcut for above lines i.e when names are same:
        */
        /*
        const { task } = todoObject;
        const { date } = todoObject;
        ABOVE TWO LINES OF CODE CAN BE COMBINED 
        */

        const { task, date } = todoObject;

        const html = `
        <div class = "align-margine">${task}</div>
        <div class = "align-margine">${date}</div>
        <button class = "delete-button button align-margine" onclick = "
            todoList.splice(${i}, 1);
            addhtml();
        ">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo').innerHTML = todoListHTML;
}

