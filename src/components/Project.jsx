import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './project.scss';
import github from '../resources/icons/github/github-original.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
const Project = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = () => {
      const itemName = props.id;
      const itemDetails = props.data.find((item) => (item.name === itemName));
      setData(itemDetails)
    }
    fetchData()
  }, [])





  return (
    <div className="project">
      <div className="project--container">

        <div className="project--image">
          <img className="project--image--img" src={data.image2} alt={data.name} />
        </div>
        <div className="project--details">
          <p className="project--name">{data.name}</p>
          <p className="project--description">{data.description}</p>
          <p className="project--description">{data.additionalInfo}</p>
          <p className="project--description"><span>built with:</span> {data.tech}</p>
          <div className="project--links">
            <a className="project--github-logo" href={data.github}>
              <p className="svg" style={{ backgroundImage: `url(${github})` }}></p>
            </a>
            <p className="project--description link"><span>link to site:</span> </p>
            <a className="siteLink" href={data.url}>{data.name}</a>
          </div>

        </div>
        <>
          <Link className="back" to="/projects"><FontAwesomeIcon icon={faBackward} /></Link>
        </>
      </div>
    </div>
  )
}
export default Project;