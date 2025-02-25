import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import About from './pages/About'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctor/>} />
        <Route path="/doctors/:speciality" element={<Doctor/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/my-appointments" element={<MyAppointments/>} />
        <Route path="/appointment/:docId" element={<Appointment/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App