import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorkoutPlan from "./pages/WorkoutPlan";
import FitnessCalculator from "./pages/FitnessCalculator";
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
        <Route path="/fitness-calculator" element={<FitnessCalculator />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
