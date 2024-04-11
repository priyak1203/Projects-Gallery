import ProjectListCard from './ProjectListCard';

const ProjectsList = ({ projects }) => {
  return (
    <section className="p-4 grid gap-8 justify-center lg:px-24 lg:py-8">
      {projects.map((item, index) => {
        return <ProjectListCard key={index} {...item} />;
      })}
    </section>
  );
};

export default ProjectsList;
