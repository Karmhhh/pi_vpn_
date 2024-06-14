import { Outlet } from "react-router";
import "../App.css";
import MyNavBar from './MyNavBar';

export default function Layout  (props)  {

  return (
    <div className="App">
      <header className="App-header">
        <MyNavBar />
      </header>
      <div >
      <Outlet />
      </div>
 
    </div>
  );
};