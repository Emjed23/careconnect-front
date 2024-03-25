
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link ,useLocation} from 'react-router-dom';
import { logout } from '../redux/Actions/CaregiverAction'
import './css/Navigationbar.css'

const Navigationbar = () => {
  const { Caregiver } = useSelector(state => state.loginDetails);
  console.log(Caregiver);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const isCurrentPath = (path) => location.pathname === path;
  const location = useLocation();
  return (
    <div className='nav1'>
      <Navbar>
        <Container>
          <Nav className="navbar">
          <Link to="/" >Home</Link>
         
          {!isCurrentPath('/ServicePage') && <li><Link to="/ServicePage">Service</Link></li>}
            {Caregiver && Caregiver.Caregiver && Caregiver.Caregiver._id ? (
              <Link to={`/CareGiver/${Caregiver.Caregiver._id}`}>Service</Link>
            ) : (
              !isCurrentPath('/ConnexionPage') && <li><Link to="/ConnexionPage">Connexion</Link></li>
           
            )}

            {Caregiver && Caregiver.Caregiver && Caregiver.Caregiver._id ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) :
             (
              !isCurrentPath('/SignupPage') && <li><Link to="/SignupPage">SignUp</Link></li>
            )}
             
             {!isCurrentPath('/Search') && <li><Link to="/Search">Search</Link></li>}
          
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};



export default Navigationbar; 