import { projectsData as data } from './utils/data';
import { BiChevronsRight } from 'react-icons/bi';

const Projects = () => {
  return (
    <div>
      {data.map((item, index) => {
        console.log(item);
        const { image, title, description, live, source } = item;
        return (
          <article key={index}>
            <img src={image} alt="" width={'250px'} />
            <div>
              <h3>{title}</h3>
              <div>
                {description.map((item, index) => {
                  return (
                    <p key={index}>
                      <BiChevronsRight /> {item}
                    </p>
                  );
                })}
              </div>
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
      })}
    </div>
  );
};

export default Projects;
