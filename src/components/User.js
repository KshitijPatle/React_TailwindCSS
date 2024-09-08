import { useState , useEffect } from "react";
import useUser from "../utils/useUser";


const User = (props)=>{

// const [info, setInfo] = useState(" ");

const info = useUser();

// useEffect(()=>{
//     getUser();
// },[])


// async function getUser(){
//     const data =await  fetch("https://api.github.com/users/kshitijpatle");
//     console.log("I am from user comp")
//     const json = await data.json();

//     setInfo(json)

//     console.log(json)

// }



//    // Render a loading state while the data is being fetched
//    if (!info) {
//     return <div>Loading...</div>;
//   }

const {name,location,url} = info;

   return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {url}</h4>

    </div>
   )
}


export default User;