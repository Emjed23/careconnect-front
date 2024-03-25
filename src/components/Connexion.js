
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/Actions/CaregiverAction";
import { useNavigate } from 'react-router-dom';


import './css/Connexion.css';

const Connexion = () => {
  const [cred, setCred] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConnexion = () => {
    dispatch(login(cred));
  };

  const {loading,Caregiver} = useSelector((state) => state.loginDetails);
  useEffect(() => {
    if (Caregiver && Caregiver?.caregiver?._id) {
      navigate(`/CareGiver/${Caregiver?.caregiver?._id}`);
    }
  }, [Caregiver]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {Caregiver && <h1>{Caregiver.message} </h1>}
      <div>
        <body>
          <div className="wrapper">
            <div className="title">Login Form</div>
            <form action="#">
              <div className="field">
                <input
                  type="text"
                  required
                  onChange={(e) => setCred({ ...cred,email:e.target.value })}
                />
                <label>Email Address</label>
              </div>
              <div className="field">
                <input
                  type="password"
                  required
                  onChange={(e) => setCred({ ...cred, password: e.target.value })}
                />
                <label>Password</label>
              </div>
              <div className="field">
                <input  value="Login" onClick={handleConnexion} />
              </div>
              <div className="signup-link">
                Not a member? <a href='/SignUp'>Signup now</a>
      
              </div>
            </form>
          </div>
        </body>
      </div>
    </div>
  );
};

export default Connexion;
 