/*
* Creates a new project object
*/
const projectFactory = (id, name) => {
    let lists = [];
    return {
        id,
        name,
        lists
    };
}

const addListToProject = (list, project) => {
    project.lists.push(list);
};

export { projectFactory, addListToProject };