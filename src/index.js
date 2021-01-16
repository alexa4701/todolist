'use strict';
import { itemFactory } from './items';
import { listFactory, addItemToList } from './lists';
import { projectFactory } from './projects';
import { renderProject, clearProject, renderNav } from './dom';

(function(){
    let projectList = []

    // Create default project
    if(projectList.length == 0) {
        let project = projectFactory(0, "Default Project");
        projectList.push(project);
        renderProject(project, projectList);
    }
})();

