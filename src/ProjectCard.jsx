import { BiChevronsRight } from 'react-icons/bi';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ image, title, description, live, source, tech }) => {
  return (
    <article className="bg-white shadow-lg hover:shadow-xl rounded-lg p-2 w-full flex flex-col gap-2 lg:flex-row lg:gap-8">
      <img src={image} alt={title} className="block w-full lg:w-4/12 rounded" />
      <div className="w-full">
        <h3 className="text-xl uppercase px-2 mb-2 tracking-wider font-bold text-slate-800">
          {title}
        </h3>
        <div className="px-4 mb-4">
          {description.map((item, index) => {
            return (
              <p
                className="items-center gap-2 text-slate-600 text-md tracking-normal "
                key={index}
              >
                <BiChevronsRight className="inline mr-2 text-slate-800" />
                {item}
              </p>
            );
          })}
        </div>
        <p className="px-2 mb-2 tracking-wide">
          <span className="font-bold text-slate-800">Built with:</span>
          {tech.map((item, index) => (
            <span key={index} className="capitalize ml-1">
              {index < tech.length - 1 ? ` ${item}, ` : ` ${item}`}
            </span>
          ))}
        </p>
        <div className="px-2 mt-4 flex gap-4 font-semibold text-purple-500 ">
          <button className="btn">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaExternalLinkAlt className="icon" />
              live app
            </a>
          </button>
          <button className="btn">
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaGithub className="icon" />
              source code
            </a>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
