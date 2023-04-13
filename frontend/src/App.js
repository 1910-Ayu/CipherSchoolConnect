import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './dashboard/Dashboard';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import Profile from './components/profile/Profile';
import ProfileView from './components/profile/ProfileView';
import Profiles from './components/profile/Profiles';
import Myprofile from './components/profile/Myprofile';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route exact path="/posts/:id" element={<Post/>} />
        <Route exact path="/myprofile" element={<Myprofile/>} />
        <Route path='/profiles' element={<Profiles/>}/>
        <Route path="profile/:id" element={<Profile/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
