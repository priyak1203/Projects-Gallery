import ProjectCard from './ProjectCard';
import { projectsData as data } from './utils/data';

const Projects = () => {
  return (
    <section className="px-20 py-10 bg-slate500 grid gap-8">
      {data.map((item, index) => {
        return <ProjectCard key={index} {...item} />;
      })}
    </section>
  );
};

export default Projects;
