/*
* Creates a new item object
*/
const itemFactory = (title, description, dueDate, priority) => {
    let complete = false;
    return {
        title,
        description,
        dueDate,
        priority,
        complete
    };
}

export { itemFactory };