import { BiChevronsRight } from 'react-icons/bi';

const ProjectCard = ({ image, title, description, live, source, tech }) => {
  return (
    <article className="bg-white shadow-lg hover:shadow-xl rounded-lg p-2 w-full flex flex-col gap-2 lg:flex-row lg:gap-8">
      <img
        src={image}
        alt={title}
        className="border border-green-400 block w-full lg:w-4/12 rounded"
      />
      <div className="w-full border border-black">
        <h3 className="text-lg">{title}</h3>
        <div>
          {description.map((item, index) => {
            return (
              <span
                className="flex items-center gap-2 text-slate-600"
                key={index}
              >
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
