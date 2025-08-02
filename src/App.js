import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import Blog from './pages/Blog';
import Hotels from './pages/Hotels';
import ScrollToTop from './components/ScrollToTop';
import Signup from './components/Signup';
import Login from './components/Login';
import BookNow from './pages/BookNow';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ProfilePage from './components/ProfilePage';
import EditProfile from './components/EditProfilePage';
import MyBookings from './components/MyBookings';
import Help from './components/Help';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Router >
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path='/edit-profile' element={<EditProfile />}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path="/book-now" element ={
          <ProtectedRoute>
            <BookNow/>
          </ProtectedRoute>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/forgot-password" element ={<ForgotPassword/>}/>
        <Route path="/reset-password/:uidb64/:token" element={<ResetPassword/>}/>
        <Route path="/profile" element = {<ProfilePage/>}/>
      </Routes>
      <Footer />
    </Router>

   <ToastContainer position = 'top-center'/>
   </>
  );
}

export default App;

