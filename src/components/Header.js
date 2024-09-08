import { LOGO_URL } from "../utils/constants";
import { useState , useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Header = ()=>{

  const onlineStatus = useOnlineStatus();

    let btnName = 'Login' // this will not work 
    const[btnNameReact,setBtnNameReact] = useState("Login");

    const data = useContext(UserContext);
    // const loggedInUser = useContext(UserContext);
    // console.log(data)


    useEffect(()=>{
        // console.log("Effect effect effect")
    }, [btnNameReact])
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
               {/* <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/> */}
               <img className="w-36" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className="px-4">Online Status : {onlineStatus ? "🟢" :"🔴"}</li>
                    <li className="px-4 font-semibold"> <Link to="/">Home</Link></li>
                    <li className="px-4 font-semibold"> <Link to="/about">About Us</Link></li>
                    <li className="px-4 font-semibold"> <Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-semibold"> <Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-semibold">Cart</li>
                    <button className="login" style={{height:"10px" }} onClick={()=>{btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}> <b>{btnNameReact}</b></button>
                    <li className="px-4 font-bold text-green-600">{data.loggedInUser}</li>
                    {/* <li className="px-4 font-semibold text-green-600">{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    ) 
}

export default Header;