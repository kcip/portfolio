import React, { useEffect, useState } from 'react';
import './project.scss';
import github from '../resources/icons/github/github-original.svg'
const Project = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = () => {
    const itemName = props.id;
    const itemDetails = props.data.find((item) => (item.name === itemName));
    setData(itemDetails)
  }



  return (
    <div className="project">
      <div className="project--container">
        <img src={data.image} alt={data.name} />
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>{data.additionalInfo}</p>
        <a href={data.github}>
          <p className="svg" style={{ backgroundImage: `url(${github})` }}></p>
        </a>
        <a href={data.url}>{data.name}</a>
      </div>


    </div>
  )
}
export default Project;