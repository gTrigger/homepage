import { ProjectTile } from "components/ProjectTile";
import { getProjects } from "services/api";

const Projects = () => {
    const projects = getProjects();

    return (
        <div className="projects homepage__section">
            <div className="projects__list">
                {
                    projects.length > 0 && projects.map(project => (
                        <ProjectTile project={project} key={project.id}/>
                    ))
                }
            </div>
        </div>
    );
}

export { Projects };
