import React, { useState, useEffect,Component } from "react";
import axios from "axios";
import SocialCard from "./SocialCard";
import MainCard from "./MainCard";
import NavBar from "./NavBar";
import './App.css';

function App() {
  const [users, setUser] = useState([]);
  const [mainuser,setMainuser]=useState({
    name : {
      title:"NA",
      first:"",
      last:""
    },
    location:{
      street:{
        number:null,
        name:"",
  
      },
      city:"",
      state:"",
      country:"",
      postcode:null,
      timezone:{
        offset:"",
        description:"",

      },
    },
    picture:{
      large:"",
      medium:"",
      thumbnail:"",
    }
  });
  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20");
      const userData = res.data.results;
      console.log(userData);
      setUser(userData);
    }
    catch (error) {
      console.log(error);

    }
  };


  useEffect(() => {
    profileData();
    
  }, []);
  return (
    <div className="App">
     <div className="main_box">
     <div className="nav_bar">
        <NavBar/>
      </div>
      <div className="main_card">
        <MainCard m={mainuser}/>
      </div>
      <div className="show_cards">

      {users.map((user) => {
        return <SocialCard  userData={user} id={user.email} muser={setMainuser} />;

      })} 
      </div>
     </div>
      
             

    </div>
  );
}

export default App;
