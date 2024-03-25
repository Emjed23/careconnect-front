import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneCaregiver } from '../redux/Actions/CaregiverAction';
import { addReview } from '../redux/Actions/ReviewAction';
import '../components/css/Details.css'

const Details = () => {
 const {id}=useParams()
 console.log(id)
  const dispatch=useDispatch()
  useEffect(() => {
 dispatch(getOneCaregiver(id))
  }, [])
  const { Caregiver } = useSelector((state) => state.getCaregiver);
console.log(Caregiver)
const [review, setReview] = useState({})
console.log(review)
const AddReview=()=>{
  dispatch(addReview(review,id))
  window.location.reload()
}
  return (
    <div>


<div className="caregiver-details">
  <legend>CareGiver details</legend>
  <p>Nom: {Caregiver?.Name}</p>
  <p>Prénom: {Caregiver?.Surname}</p>
  <p>Email: {Caregiver?.Email}</p>
  <p>Numéro de téléphone: {Caregiver?.PhoneNumber}</p>
  <p>Adresse: {Caregiver?.Address}</p>
  <p>Âge: {Caregiver?.Age}</p>
  <p>Genre: {Caregiver?.Gender}</p>
  <p>Expérience: {Caregiver?.Experience}</p>
</div>
   
<div className="Reviewbox">
          <div className="rev">Reviews:</div>
          {Caregiver?.Reviews?.map((review, index) => (
            <div key={index}>
              <ul className='revlist'>
                <li>
                  <p className='name'>{review.ReviewerName}</p>
                </li>
                <li>
                  <p className='text'>{review.ReviewText}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
     
  
    <div className='Reviewbox'>
  <label htmlFor="reviewerName">Reviewer Name:</label>
  <input
    id="reviewerName"
    type="text"
    onChange={(e) => setReview({ ...review, ReviewerName: e.target.value })}
  />
  <label htmlFor="reviewText">Review Text:</label>
  <input
    id="reviewText"
    type="text"
    onChange={(e) => setReview({ ...review, ReviewText: e.target.value })}
  />
</div>
    <div>
    <button onClick={AddReview} >add review</button>
</div></div>
   
  );
}

export default Details;
