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
    UserDashboard,
    UserProfile,
    FinanceForm,
    ClientDashboard,
    UserProfile,
    ProfileUpdateForm,
    Bookings,
    Feedback,
    Payments,
    DestinationBookings,
    HotelResForm,
    FlightResForm,
    FeedbackForm,
    RentalForm,
    RentalPreview,
    CeoDashboard,
    SharedLayoutCeoDashboard,
    CeoOverview,
    CeoRevenue,
    EditorWebContent,
} from '../pages';


function AppRoutes() {
    return (
        <Router>
            <Routes>
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
                    <Route path='flightResForm' element={<FlightResForm/>}/>
                    <Route path='rentalPreview/:id' element={<RentalPreview/>}/>
                    <Route path='rentalForm' element={<RentalForm/>}/>
                </Route>
                
                <Route path="/ClientDashboard/:id" element={<ClientDashboard/>}>
                    <Route index element={<UserProfile/>}/>
                    <Route path="updateProfile" element={<ProfileUpdateForm/>}/>
                    <Route path="bookings" element={<Bookings/>}>
                        <Route path="destination" element={<DestinationBookings/>}/>
                    </Route>
                    <Route path="feedback" element={<Feedback/>}/>
                    <Route path="payments" element={<Payments/>}/>
                </Route>
                <Route path="/feedback/create" element={<FeedbackForm/>}/>
                <Route path="/ceoDashboard" element={<SharedLayoutCeoDashboard/>}>
                    <Route index element={<CeoDashboard/>}/>
                    <Route path="ceoOverview/:type" element={<CeoOverview/>}/>
                    <Route path="ceoRevenue" element={<CeoRevenue/>}/>
                </Route>
               <Route path="/fianaceForm" element={<FinanceForm/>}/>
               
                <Route path="/editorDashboard" element={<SharedLayoutEditorDashboard/>}>
                    <Route index element={<EditorDashboard/>}/>
                    <Route path="editorWebContent/:type" element={<EditorWebContent/>}/>
                    <Route path="flightForm" element={<FlightForm/>}/>
                    <Route path="hotelForm" element={<HotelForm/>}/>
                    <Route path="destinationForm" element={<DestinationForm />} />
                    <Route path="vehicleForm" element={<VehicleForm/>}/>
                    <Route path="packageForm" element={<PackageForm/>}/>
                    <Route path="flightUpdateForm/:id" element={<FlightUpdateForm />}/>
                    <Route path="hotelUpdateForm/:id" element={<HotelUpdateForm/>}/>
                    <Route path="destinationUpdateForm/:id" element={<DestinationUpdateForm />}/>
                    <Route path="vehicleUpdateForm/:id" element={<VehicleUpdateForm/>}/>
                    <Route path="packageUpdateForm/:id" element={<PackageUpdateForm/>}/>
                </Route>
                
            </Routes>
        </Router>
    ); 
}

export default AppRoutes;
