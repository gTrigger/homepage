import projects from "data/projects.json";

export function getProject(projectId) {
    return projects.find(item => item.id === projectId);
}

export function getProjects() {
    return projects;
}
