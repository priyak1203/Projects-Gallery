import ProjectCard from './ProjectCard';
import { useFetchProjects } from './fetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section className="p-8 grid justify-center">
        <div className="border-4 border-slate-400 w-24 h-24 rounded-full border-t-purple-500 animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="p-4 grid gap-8 justify-center lg:px-10 lg:py-5 ">
      {projects.map((item, index) => {
        return <ProjectCard key={index} {...item} />;
      })}
    </section>
  );
};

export default Projects;
