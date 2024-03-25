import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../components/css/Search.css'

const Searchbar = () => {
  const [careGivers, setCareGivers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCaregivers, setFilteredCaregivers] = useState([]);

  useEffect(() => {
    axios.get('https://careconnect-server.onrender.com/CaregiverAPI/getAllCaregiver')
      .then(response => setCareGivers(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = () => {
    if (careGivers) {
      setFilteredCaregivers(
        careGivers.filter(
          (careGiver) =>
            careGiver.Address.toLowerCase().includes(searchQuery.toLowerCase()) ||
            careGiver.Name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type='text'
          placeholder='Search by Address'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
<div className='results'>
      <div >
        {filteredCaregivers.map(careGiver => ( 
        <ul className='list'>
          <div key={careGiver.id}>
          <img
                className='card-img'
                src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no"
                alt="pic"
                style={{ width:'60%'}} />
            
            <li>Name: {careGiver.Name}</li>
            <li>Surname: {careGiver.Surname}</li>
            <li>Email: {careGiver.Email}</li>
            <li>PhoneNumber: {careGiver.PhoneNumber}</li>
            <li>Address: {careGiver.Address}</li>
            <li>Age: {careGiver.Age}</li>
            <li>Gender: {careGiver.Gender}</li>
            <li>Experience: {careGiver.Experience}</li>
          </div>    
           </ul>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
