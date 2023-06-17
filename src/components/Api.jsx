import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function API() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
console.log(data)
  return (
    <div>
        
      {data.map(item => (
        <div key={item.id}>
        
          <img src={item.image_url} alt="a" />
          <h2>{item.name}</h2>
          <p>{item.contributed_by} </p>
          <p>{item.tagline   } </p>
          <Link to="/BeerDetails"> Beer Details </Link> 
        </div>
      ))}
    </div>
  );
}


export default API;