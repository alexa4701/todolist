/*
* Creates a new list object
*/
const listFactory = (id, name, projectID) => {
    let items = [];
    return {
        id,
        name,
        projectID,
        items
    };
}

/*
* Pushes an item object to the given list's item array
*/
const addItemToList = (item, list) => {
    list.items.push(item);
}

const createNewList = (project) => {
    let listName = prompt("List name?");
    let newList = listFactory(project.lists.length, listName, project.id);
    // Add list to project
}

export { listFactory, addItemToList, createNewList };