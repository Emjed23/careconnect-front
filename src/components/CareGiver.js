import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCaregiver,  } from '../redux/Actions/CaregiverAction';
import './css/CareGiver.css';
import { useNavigate } from 'react-router-dom';



const CareGiver = () => {
  const dispatch = useDispatch();
  const { Caregiver, loading, error } = useSelector((state) => state.getCaregiver);
  const navigate=useNavigate()
console.log(Caregiver)
  useEffect(() => {
    dispatch(getCaregiver());
  }, [dispatch]);
// test
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDetails = (id) => {

  // dispatch(getOneCaregiver(Caregiver._id));
  navigate(`/Details/${id}`)
 
};

  return (
    <div>
      {
        Array.isArray(Caregiver) && Caregiver.map((caregiver) => (
          <div key={caregiver.id} className="card">
            <div className='bio'>
              <img
                className='card-img'
                src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no"
                alt="pic"
              />
              <div>
                <h2 className='name'>{caregiver.Name} {caregiver.Surname}</h2>
               
                <div className="button">
             
              <button className="link-button" onClick={() => handleDetails(caregiver._id)}>Details</button>
            </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CareGiver;
