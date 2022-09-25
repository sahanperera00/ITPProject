import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/leo/Hotel.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Hotels() { 
  const [hotels, setHotels] = useState([]);

  const{id}=useParams();

  const getHotels = () => {
    axios.get("http://localhost:8070/hotels")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  

  useEffect(() => { getHotels() } , []);  //Shows changes of the page

  return (
    <div className='hotelMainContainer'>
      <h1 className='hotelHeader'>Hotels</h1>

      <div className='hotelContainer'>
        <div className="hotelSideBar">
          <h1>SideBar</h1>
        </div>
        <div className="hotelBodyContainer">
          {hotels.map((data) => {
          return (
            <Link to={'/hotelPreview/'+data._id}>
            <div className='CardContainer'>
              <div className='ImageContainer'>
                <img className='hotelCardImg' alt='pic' src={data.images}/>
              </div>
              <div className='TextContainer'>
                <center><h2>{data.name} ({data.location})</h2></center>
                  <p className='priceTage'>Price:Rs. {data.price}<br/></p>
                  <p className='desTage'>Description: {data.description}<br/></p>
                  <p className='starTage'>Stars: {data.stars}<br/></p>
              </div>
            </div>
            </Link>
          )        
        })}
        </div>
        
      </div>
    </div>
  )
}

export default Hotels;