import { BiChevronsRight } from 'react-icons/bi';

const ProjectCard = ({ image, title, description, live, source, tech }) => {
  return (
    <article className="bg-white shadow-lg hover:shadow-xl p-4 flex gap-x-8">
      <img src={image} alt="" width={'250px'} />
      <div>
        <h3>{title}</h3>
        <div>
          {description.map((item, index) => {
            return (
              <span className="flex items-center gap-2" key={index}>
                <BiChevronsRight /> {item}
              </span>
            );
          })}
        </div>
        <p>
          Built with:
          {tech.map((item, index) => (
            <span key={index}>
              {index < tech.length - 1 ? ` ${item}, ` : ` ${item}`}
            </span>
          ))}
        </p>
        <div>
          <button>
            <a href={live}>live app</a>
          </button>
          <button>
            <a href={source}>source code</a>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
