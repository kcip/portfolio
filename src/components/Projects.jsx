import React from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';
const Projects = (props) => {
  const data = props.data;
  return (
    <div className='projects'>
      {console.log(data)}
      <div className='projects--wrapper'>
        <div className='projects--container'>
          <h2 className='projects--text'><span>recent</span> projects</h2>
          {data && data.map((item, i) => (
            <div className={`projects--sample project-${item.id}`} key={i}
              style={{ backgroundImage: `url(${item.image})` }}>
              <Link to={`/projects/${item.name}`}></Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
export default Projects;

{/* <div>
            {data && data.map((item, i) => (
              <Fragment>
                <div className={`item-${item.id}`}>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                </div>
              </Fragment>

            ))}
          </div> */}