import { Outlet } from "react-router-dom";
import { NavigationBar } from './Navbartrial';
import Footer from "./Footer";
import Navigation from "../Etour/Navigation";

export default function Home() {
    return (
      <div style={{ marginTop:"59px" }}>
        {/* <NavigationBar/> */}
        <Navigation/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }