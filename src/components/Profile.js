import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { login, deleteCaregiver, updateCaregiver, logout } from '../redux/Actions/CaregiverAction';
import { Button } from "react-bootstrap";
import '../components/css/profile.css'

const Profile = () => {
    const { id } = useParams();
    const { Caregiver } = useSelector((state) => state.loginDetails);
    const caregiver=Caregiver?.caregiver
    console.log(caregiver)
    const [info, setInfo] = useState({
        Name:  caregiver?.Name,
        Surname: caregiver?.Surname,
        Email:  caregiver?.Email,
        PhoneNumber:  caregiver?.PhoneNumber,
        Address: caregiver?.Address,
        Age: caregiver?.Age,
        Experience:  caregiver?.Experience,
    });
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCaregiver(caregiver._id));
        dispatch(login( caregiver));
    };
    const handleUpdate = async () => {
        dispatch(updateCaregiver( info, id ));
    };

    const handleLogout = () => {
        dispatch(logout());
    };
const navigate=useNavigate()
    useEffect(() => {
    if(!caregiver){
navigate('/ConnexionPage')
    }
    }, [caregiver])
    
    return (
        <div className='boxinfo'>
            <div className='label'>
                <label >Name</label>
                <input value={info.Name} onChange={(e) => setInfo({ ...info, Name: e.target.value })} />
                <label >Surname</label>
                <input value={info.Surname} onChange={(e) => setInfo({ ...info, Surname: e.target.value })} />
                <label >Email</label>
                <input value={info.Email} onChange={(e) => setInfo({ ...info, Email: e.target.value })} />
                <label >PhoneNumber</label>
                <input value={info.PhoneNumber} onChange={(e) => setInfo({ ...info, PhoneNumber: e.target.value })} />
                <label >Address</label>
                <input value={info.Address} onChange={(e) => setInfo({ ...info, Address: e.target.value })} />
                <label >Age</label>
                <input value={info.Age} onChange={(e) => setInfo({ ...info, Age: e.target.value })} />
                <label >Experience</label>
                <input value={info.Experience} onChange={(e) => setInfo({ ...info, Experience: e.target.value })} />
            </div>
            <div className='btn'>
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    );
}

export default Profile;