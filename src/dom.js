import { createNewList } from "./lists";

const renderProject = (project, projectList) => {
    // First clear DOM
    clearProject();

    // Update / Render the navbar
    renderNav(project, projectList);

    // Render all lists in the project
    if(project.lists.length > 0) {
        let content = document.querySelector("#content");
        project.lists.forEach(list => {
            // renderList(list);
        });
    }
}

const clearProject = () => {
    // Clear DOM of all lists
    let content = document.querySelector("#content");
    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

const renderNav = (project, projectList) => {
    let navDOM = document.querySelector("ul.navbar-nav");
    let dropdown = document.querySelector(".dropdown-menu");

    // Render the nav dropdown
    projectList.forEach(project => {
        let projectLink = document.createElement("a");
        projectLink.classList.add("dropdown-item");
        projectLink.setAttribute("href", "#");
        projectLink.setAttribute("data-project-id", project.id);
        projectLink.innerHTML = project.name;
        dropdown.appendChild(projectLink);
    });

    const handleClick = (e) => {
        switch (e.target.innerHTML) {
            case "New List": 
                let list = createNewList(project);
                // renderList(list);
            default:
                break;
        }
    };

    // Reset and add listeners to navbar items.
    navDOM.removeEventListener("click", handleClick);
    navDOM.addEventListener("click", handleClick);
}

const renderList = (list) => {
    // Code to render the list in the project DOM
}

export { renderProject, clearProject, renderNav };