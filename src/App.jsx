import { Outlet, Link } from "react-router-dom";
import Header from '../src/components/header/Header'
import './index.css'

export default function App() {
  return (
    <div>
      
      <Header/>
  
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/malwa">Malwa</Link> |{" "}
        <Link to="/nowosci">Nowości</Link> |{" "}
        <Link to="/Opony">Opony</Link>
      </nav>
      <Outlet />
    </div>
  );
}