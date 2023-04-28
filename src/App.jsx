// import { useState } from "react";
import './index.css'
import Footer from "./ui/pages/home/FooterComp/Footer";
import Header from "./ui/pages/home/HeaderComp/Header";
import Home from "./ui/pages/home/HomeComp/Home";
import Info from "./ui/pages/home/InfoComp/Info";
import Progress from "./ui/pages/home/ProgressComp/Progress";
import ReachedGoals from "./ui/pages/home/ReachedGoalsComp/ReachedGoals";
import Services from "./ui/pages/home/ServicesComp/Services";
import Testimony from "./ui/pages/home/TestimonyComp/Testimony";
import GetStarted from "./ui/pages/home/GetStartedComp/GetStarted";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Info />
      <Services />
      <Progress />
      <Testimony />
      <ReachedGoals />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
