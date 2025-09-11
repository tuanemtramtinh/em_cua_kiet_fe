import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import User from "../pages/User";
import Quiz from "../pages/Quiz";
import Contact from "../pages/Contact";
import Resource from "../pages/Resource";
import Passport from "../pages/Passport";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Video from "../pages/Video";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="contact" element={<Contact />} />
        <Route path="passport" element={<Passport />} />
        <Route path="resource" element={<Resource />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="video" element={<Video />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
