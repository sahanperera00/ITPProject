
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/praweena/Packages.css'


function Packages() { 
  const [packages, setPackages] = useState([]);

  const getPackages = () => {
    axios.get("http://localhost:8070/packages")
      .then((res) => {
        setPackages(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getPackages() } , []);  //Shows changes of the page

  return (
    <div className='packageMain'>
   
    <h1 className='packageHeader'>Packages
          <h2 className='PackageDiscription'>Enjoy WonderFul Experience in Sri Lanka<br/>Let us Help You Prepare <br/>Plan Your Trip With Us </h2></h1>
    <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
      {packages.map((data) => {
        return (
          <Card style={{ width: '75rem',height:'25rem', margin: '2rem', padding: '0rem'}} className='PackageCard'>
            <Card.Img src={data.image} className='imagePackage' />
            <Card.Body className='PackageBody'>
              <Card.Title className='packageTitle'>{data.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{data.PackagesId}</Card.Subtitle>
              <Card.Text>
             
              Enter Package Name = {data.name}<br/>
              Travel Destination = {data.destination}<br/>
              Members Count      = {data.members}<br/>
              Hotel Name         = {data.hotel}<br/>
              Hotel Room Type    = {data.roomType}<br/>
              Vehicle            ={data.vehicle}<br/>
              Guide              = {data.guide}<br/> <br/>
              Price (LK rupees)  = {data.price}  
              <button className='PackageSelect' > Select</button>      
            
              </Card.Text>
            </Card.Body>
          </Card>
        )        
      })}
    </div>
  </div>
)
}


export default Packages;