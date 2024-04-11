import ProjectGridCard from './ProjectGridCard';

const ProjectsGrid = ({ projects }) => {
  return (
    <section className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 place-items-center">
      {projects.map((item, index) => {
        return <ProjectGridCard key={index} {...item} />;
      })}
    </section>
  );
};

export default ProjectsGrid;
