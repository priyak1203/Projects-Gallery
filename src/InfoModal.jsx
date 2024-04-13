import { useGlobalContext } from './context';
import { BiChevronsRight } from 'react-icons/bi';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const InfoModal = () => {
  const { isModalOpen, closeModal, modalData } = useGlobalContext();
  const { title, description, tech, live, source } = modalData;

  return (
    <section
      className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}
    >
      <div className="modal-container">
        {/* Project Title */}
        <h3 className="text-2xl uppercase px-2 my-1 tracking-wider font-bold text-slate-800 text-center">
          {title}
        </h3>
        {/* Project Features */}
        <>
          <h4 className="text-lg capitalize tracking-wider text-slate-800 font-medium ">
            features
          </h4>
          <div className="px-4 mb-2">
            {description?.map((item, index) => {
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
        </>
        {/* Project Tech Stack */}
        <>
          <h4 className="text-lg capitalize tracking-wider text-slate-800 font-medium ">
            tech stack
          </h4>
          <p className="px-2 mb-2 tracking-wide">
            {tech?.map((item, index) => (
              <span key={index} className="capitalize ml-1">
                {index < tech.length - 1 ? ` ${item}, ` : ` ${item}`}
              </span>
            ))}
          </p>
        </>
        {/* Project Links */}
        <>
          <h4 className="text-lg leading-none capitalize tracking-wider text-slate-800 font-medium  ">
            Links
          </h4>
          <div className="px-2 flex gap-4 font-semibold text-cornflower-500  text-base">
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
        </>

        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </section>
  );
};

export default InfoModal;
