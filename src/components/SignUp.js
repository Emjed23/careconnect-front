import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCaregiver } from '../redux/Actions/CaregiverAction';
import './css/Signup.css';

const SignUp = () => {
  const [Caregiver,setCaregiver] = useState({});
  const dispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(addNewCaregiver(Caregiver));
  };

  const { loading = false, message = null, error = null } =
    useSelector((state) => state.addNewUCaregiver) || {};

  return (
    <div>
      <div className="container">
        <div className="title">Transforming Compassion into Action, Sign up now and join our community</div>
        <div className="content">
          {loading && <p>Loading...</p>}
          {message && <p>{message.message}</p>}
          {error && <p>{error}</p>}
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name</span>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  required
                  onChange={(e)=>setCaregiver({...Caregiver,Name:e.target.value })}
                />
              </div>
              <div className="input-box">
                <span className="details">Surname</span>
                <input
                  type="text"
                  placeholder="Enter your Surname"
                  required
                  onChange={(e)=>setCaregiver({...Caregiver,Surname:e.target.value })}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  onChange={(e)=>setCaregiver({...Caregiver,Email:e.target.value })}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your PhoneNumber"
                  required
                  onChange={(e)=>setCaregiver({...Caregiver,PhoneNumber:e.target.value })}
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  placeholder="Enter your Address"
                  required
                  onChange={(e)=>setCaregiver({...Caregiver,Address:e.target.value })}
                />
              </div>
              <div className="input-box">
                <span className="details">Age</span>
                <input
                  type="text"
                  placeholder="Enter your Age"
                  required
                  onChange={(e)=>setCaregiver({...Caregiver,Age:e.target.value })}
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  required
                  onChange={(e)=>setCaregiver({...Caregiver,Password:e.target.value })}
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                  onChange={(e)=>setCaregiver({...Caregiver,Password:e.target.value })}
                />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
              </div>
              <div className="input-box">
                <span className="details">Experience</span>
                <input
                  type="text"
                  placeholder="Put your Experience"
                  required
                  onChange={(e)=>setCaregiver({...Caregiver,Experience:e.target.value })}
                />
              </div>
            </div>
            <div className="button">
              <input  value="SignUp" onClick={handleSignUp} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
