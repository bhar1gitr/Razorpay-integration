import Home from "./pages/User/Home";
import Profile from "./pages/User/Profile";
import Assessment from "./pages/User/Assessment";
import FindDoctors from "./pages/User/FindDoctors";
import BookAppointment from "./pages/User/BookAppointment";
import Payment from "./pages/User/Payment";
import Subscription from "./pages/User/Subscription";
import Notifications from "./pages/User/Notifications";
import Communication from "./pages/User/Communication";
import ContentAccess from "./pages/User/ContentAccess";
import PaymentSuccess from "./Components/PaymentSuccess";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/profile" exact element={<Profile/>} />
        <Route path="/assessment" exact element={<Assessment/>} />
        <Route path="/find-doctors" exact element={<FindDoctors/>} />
        <Route path="/book-appointment" exact element={<BookAppointment/>} />
        <Route path="/payment" exact element={<Payment/>} />
        <Route path="/subscription" exact element={<Subscription/>} />
        <Route path="/notifications" exact element={<Notifications/>} />
        <Route path="/communication" exact element={<Communication/>} />
        <Route path="/content-access" exact element={<ContentAccess/>} />
        <Route path="/paymentsuccess" exact element={<PaymentSuccess/>}/>
      </Routes>
    </Router>
  );
}

export default App;
