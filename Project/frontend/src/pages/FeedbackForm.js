import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import '../styles/praweena/PackageForm.css'

function FeedbackForm(){
    const [feedbacktype,setfeedbacktype]=useState('');
    const [placeofincident,setplaceofincident]=useState('');
    const [phonenumber,setphonenumber]=useState('');
    const [subject,setsubject]=useState('');
    const [message,setmessage]=useState('');
    const [image, setimage] =useState('');


    return (
        <div className='PackageFormMainCont'>
            <h1>Feedback Management System</h1>
            <div className="#">
                <br />
                <form onSubmit={async(e) => {
                    e.preventDefault();
                    //image
                    const imageRef = ref(storage, `images/feedback/${feedbacktype + image.name}`);

                    await uploadBytes(imageRef, image) //uploads image to the DataBase
                        .then(() => {
                            console.log('Uploaded image');
                        }).catch((err) => {
                            console.log(err);
                        })

                    await getDownloadURL(ref(storage, `images/feedback/${feedbacktype + image.name}`))
                        .then((url) => {
                            console.log(url);
                       
                    const newFeedback = {
                                feedbacktype,
                                placeofincident,
                                phonenumber,
                                subject,
                                message,
                                image :url
                    }

                    axios.post("http://localhost:8070/feedback/create", newFeedback)
                        .then(() => {
                            alert("Feedback Form submitted succesfully");
                        }).catch((err) => {
                            alert("Error adding feedback Content");
                            console.log(err);
                        })
                    }).catch((err) => {
                        console.log(err);
                    })
                }}>

<div className="form-group">
                <label className="form-label" id='form-label-feed'>Category</label>
                <select class="form-select" aria-label="Default select example" 
                onChange={(e) =>{ setsubject
                    (e.target.value)}} required>
                <option value="Service Quality issues">Service Quality issues</option>
                <option value="Harrasment">Harrasment</option>
                <option value="Fraud">Fraud</option>
                <option value="Other">Other</option>
                 </select>

                    </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Place of incident</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setmessage(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Phone Number</label>
                    <input type="number" className="form-control" 
                    onChange={(e) => {
                        setphonenumber(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Subject</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setfeedbacktype(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Details</label>
                    <input type="text" className="ratingfeed" 
                    onChange={(e) => {
                        setplaceofincident(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                        <label className="form-label">Add Image</label>
                        <input type="file" className="form-control"
                            onChange={(e) => {
                                setimage(e.target.files[0]);
                            }} required />
                    </div>
                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default FeedbackForm;