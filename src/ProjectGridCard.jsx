import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { useGlobalContext } from './context';

const ProjectGridCard = ({ id, image, title, live, source }) => {
  const { openModal } = useGlobalContext();

  return (
    <article className="w-11/12 bg-white p-3 shadow-lg hover:shadow-2xl  rounded-lg ">
      <img src={image} alt={title} className="w-full h-40" />
      <div>
        <h3 className="text-lg uppercase px-2 my-1 tracking-wider font-bold text-slate-800">
          {title}
        </h3>
        <div className="px-2 mt-4 flex justify-between gap-4 font-semibold text-cornflower-500 ">
          <div className="flex  gap-4">
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
          <button className="btn" onClick={() => openModal(id)}>
            <span className="link">
              <BsFillInfoCircleFill className="icon" />
              info
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectGridCard;
