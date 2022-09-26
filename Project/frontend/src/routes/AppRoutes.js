import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Home,
    Flights,
    Hotels,
    Attractions,
    Taxis,
    Vehicles,
    Packages,
    EditorDashboard,
    DestinationForm,
    SharedLayoutHome,
    SharedLayoutEditorDashboard,
    AttractionEdit,
    HotelForm,
    HotelEdit,
    FlightForm,
    FlightEdit,
    FlightPreview,
    DestinationUpdateForm,
    PackageForm,
    PackagesEdit,
    PackageUpdateForm,
    HotelUpdateForm,
    HotelPreview,
    RegistrationForm,
    SharedLayoutDestination,
    DesPreview,
    FlightUpdateForm,
    VehicleUpdateForm,
    VehicleForm,
    VehiclesEdit,
    ClientDashboard,
    UserDashboard,
    UserProfile,
    ProfileUpdateForm,
    Bookings,
    Feedback,
    Payments,
    HotelResForm,
    FeedbackForm
} from '../pages';

import RentalForm from '../pages/RentalForm'; 
import RentalPreview from '../pages/RentalPreview'; 

import Tester from '../pages/tester.js'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='tester' element={<Tester/>}/>
                <Route path="/" element={<SharedLayoutHome />}>
                    <Route index element={<Home />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="attractions" element={<SharedLayoutDestination />}>
                        <Route index element={<Attractions />} />
                        <Route path=":id" element={<DesPreview />} />
                    </Route>
                    <Route path="taxis" element={<Taxis />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path = "registration" element={<RegistrationForm />} />
                    <Route path='hotelPreview/:id' element={<HotelPreview/>}/>
                    <Route path='flightPreview/:id' element={<FlightPreview/>}/>
                    <Route path='hotelResForm' element={<HotelResForm/>}/>
                    <Route path='rentalPreview/:id' element={<RentalPreview/>}/>
                    <Route path='rentalForm' element={<RentalForm/>}/>
                </Route>
                
                <Route path="/editorDash" element={<SharedLayoutEditorDashboard />}>
                    <Route index element={<EditorDashboard />} />
                    <Route path="addAttractionsForm" element={<DestinationForm />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="attractions" element={<Attractions />} />
                    <Route path="vehicles" element={<Vehicles />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path="attractionEdit" element={<AttractionEdit />} />
                    <Route path="hotelForm" element={<HotelForm/>}/>
                    <Route path="hotelEdit" element={<HotelEdit/>}/>
                    <Route path="flightForm" element={<FlightForm/>}/>
                    <Route path="flightEdit" element={<FlightEdit/>}/>
                    <Route path="destinationUpdateForm/:id" element={<DestinationUpdateForm />}/>
                    <Route path="flightUpdateForm/:id" element={<FlightUpdateForm />}/>
                    <Route path="packageForm" element={<PackageForm/>}/>
                    <Route path="packagesEdit" element={<PackagesEdit/>}/>
                    <Route path="packageUpdateForm/:id" element={<PackageUpdateForm/>}/>
                    <Route path="hotelUpdateForm/:id" element={<HotelUpdateForm/>}/>
                    <Route path="vehicleForm" element={<VehicleForm/>}/>
                    <Route path="vehiclesEdit" element={<VehiclesEdit/>}/>
                    <Route path="vehicleUpdateForm/:id" element={<VehicleUpdateForm/>}/>
                </Route>
                
                <Route path="/ClientDashboard/:id" element={<ClientDashboard/>}>
                    <Route index element={<UserProfile/>}/>
                    <Route path="updateProfile" element={<ProfileUpdateForm/>}/>
                    <Route path="bookings" element={<Bookings/>}/>
                    <Route path="feedback" element={<Feedback/>}/>
                    <Route path="payments" element={<Payments/>}/>
                </Route>
                <Route path="/feedback/create" element={<FeedbackForm/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
