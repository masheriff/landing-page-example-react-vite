import ProjectCard from "../common/ProjectCard";
import SectionHeading from "../common/SectionHeading";

export interface ProjectArrayItem {
  title: string;
  imageUrl: string;
}

interface ProjectsProps {
  projectArray: ProjectArrayItem[];
}

function Projects(props: ProjectsProps) {
  const { projectArray } = props;
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="Projects" showDivider={true}/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {projectArray.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
