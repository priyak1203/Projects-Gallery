import ProjectCard from './ProjectCard';
import { projectsData as data } from './utils/data';

const Projects = () => {
  return (
    <section className="p-4 grid gap-8 content-normal justify-content-center lg:px-10 lg:py-5 ">
      {data.map((item, index) => {
        return <ProjectCard key={index} {...item} />;
      })}
    </section>
  );
};

export default Projects;
