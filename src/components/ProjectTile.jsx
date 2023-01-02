import { ReactComponent as LinkIcon } from 'assets/images/icons/link.svg';

const ProjectTile = ({project}) => {
    return (
        project && <div className={project.class + " project-tile"}>
            {
                project.title && <div className="project-tile__title">
                    {project.title}
                </div>
            }
            {
                project.description && <div className="project-tile__description">
                    {project.description}
                </div>
            }
            {
                (project.url || project.github) && <div className="project-tile__links">
                    {
                        project.url && <div className="link"
                                            onClick={() => window.open(project.url)}>
                            <span>Website</span>
                            <LinkIcon title="link" height="18" width="18"/>
                        </div>
                    }
                    {
                        project.github && <div className="link"
                                               onClick={() => window.open(project.github)}>
                            <span>Github repo</span>
                            <LinkIcon title="link" height="18" width="18"/>
                        </div>
                    }
                </div>
            }
            {
                project.technologies && project.technologies.length > 0 && <div className="project-tile__technologies">
                    {
                        project.technologies.map((technology, index) => (
                            <span className="tag" key={index}>{technology}</span>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export { ProjectTile };
