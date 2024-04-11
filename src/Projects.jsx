import ProjectCard from './ProjectListCard';
import ProjectsGrid from './ProjectsGrid';
import ProjectsList from './ProjectsList';
import { useGlobalContext } from './context';
import { useFetchProjects } from './fetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  const { listView } = useGlobalContext();

  if (isLoading) {
    return (
      <section className="p-8 grid justify-center">
        <div className="border-4 border-slate-400 w-24 h-24 rounded-full border-t-cornflower-700 animate-spin"></div>
      </section>
    );
  }

  if (listView) {
    return <ProjectsList projects={projects} />;
  }

  return <ProjectsGrid projects={projects} />;
};

export default Projects;
