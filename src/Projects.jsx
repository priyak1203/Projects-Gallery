import ProjectCard from './ProjectCard';
import { useFetchProjects } from './fetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section>
        <h3>Loading...</h3>
      </section>
    );
  }

  return (
    <section className="p-4 grid gap-8 content-normal justify-content-center lg:px-10 lg:py-5 ">
      {projects.map((item, index) => {
        return <ProjectCard key={index} {...item} />;
      })}
    </section>
  );
};

export default Projects;
