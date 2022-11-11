import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
//import '../styles/sudul/HotelResUpdateForm.css';


function HotelResUpdateForms() {
    const [name, setName] = useState('');
    const [check_in, setCheckIn] = useState('');
    const [check_out, setCheckOut] = useState('');
    const [contactNo, setcontact] = useState('');
    const [hotel_Name, setHotelName] =useState('');
    const [suite,setSuite]=useState('');
    const [customizations, setCustomizations] = useState('');

    

    const { id } = useParams();
    const { hotelResId } = useParams();
    const navigate = useNavigate();

    const getReservation = () => {
        axios.get("http://localhost:8070/hotelRes/" + hotelResId)
            .then((res) => {
                setName(res.data.name);
                setCheckIn(res.data.check_in);
                setCheckOut(res.data.check_out);
                setcontact(res.data.contactNo);
                setHotelName(res.data.hotel_Name);
                setSuite(res.data.suite);
                setCustomizations(res.data.customizations);
                

                // const date = new Date(res.data.date);
                // setDate(date.toISOString().split('T')[0]);
                // setTime(res.data.time);
                // setAdults(res.data.adults);
                // setChildren(res.data.children);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { getReservation() }, []);
    

    return (
        <div className="HotelResUpdateFormMainCont">
            <h1>Update Booking Details</h1>
            <div className='HotelResUpdateFormCont'>
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const newTicket = {
                        name,
                        check_in,
                        check_out,
                        contactNo,
                        suite,
                        customizations
                    };

                    axios.put(`http://localhost:8070/hotelRes/customize/${hotelResId}`, newTicket)
                        .then(() => {
                            alert("Ticket updated successfully");
                            navigate(`/clientDashboard/${id}/bookings/hotel`);
                        }).catch((err) => {
                            alert("Error adding ticket");
                            console.log(err);
                        });
                }}>
                    <div className="form-group">
                        <label className="form-label">Hotel Name</label>
                        <input type="text" className="form-control" value={hotel_Name} readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Suite</label>
                        <input type="text" className="form-control" value={suite} onChange={(e) => { setSuite(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Check In Time</label>
                        <input type="date" className="form-control" value={check_in} onChange={(e) => { setCheckIn(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                <label className="form-label">Check Out Time</label>
                <input type="date" className="form-control" value={check_out} onChange={(e) => {setCheckOut(e.target.value)}} required/>
              </div>
              <div >
                        <label className="form-label">Customizations</label><br/>
                        <input type="radio"  name="Cuz" value="Normal" onChange={(e) => { setCustomizations(e.target.value) }} required />Normal
                        <input type="radio"  name="Cuz" value="Gold" onChange={(e) => { setCustomizations(e.target.value) }} required />Gold
                        <input type="radio"  name="Cuz" value="Platinum" onChange={(e) => { setCustomizations(e.target.value) }} required />Platinum
                    </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="Number" className="form-control" value={contactNo} onChange={(e) => {setcontact(e.target.value)}} required/>
              </div>
               
              <button type="submit" className="submitbtn">Submit</button>
            </form>
            </div><br />
        </div>
    )
}

export default HotelResUpdateForms;