import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Components/components.css'

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  console.log(id);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await axios(url);
        setCharacter(res.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [url]); 

  return (
    <div className='container'>
      <h2>Dentist {character.id} details </h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{character.name}</td>
            <td>{character.email}</td>
            <td>{character.phone}</td>
            <td>{character.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
};

export default Detail;
