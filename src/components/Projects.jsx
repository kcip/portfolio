import React from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';
const Projects = (props) => {
  const data = props.data;
  return (
    <div className='projects'>
      <div className='projects--wrapper'>
        <div className='projects--container'>
          <h2 className='projects--text'><span>recent</span> projects</h2>
          <div className="projects--grid">
            {data && data.map((item, i) => (

              <div className={`projects--sample project-${item.id}`} key={i}
                style={{ backgroundImage: `url(${item.image})` }}>
                <Link className="link-more" to={`/projects/${item.name}`}>see more...</Link>
                {/* <span className="link-more">more</span> */}
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  )
}
export default Projects;
