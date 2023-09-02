import ProjectCard from './ProjectCard';
import { projectsData as data } from './utils/data';

const Projects = () => {
  return (
    <section className="px-20 py-10 grid gap-8 content-normal justify-content-center">
      {data.map((item, index) => {
        return <ProjectCard key={index} {...item} />;
      })}
    </section>
  );
};

export default Projects;
