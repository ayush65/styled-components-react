import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Questions from "../Pages/Questions";
import Download from "../Pages/Download";
import DashBoard from "../Pages/DashBoard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/download" element={<Download />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default AllRoutes;
