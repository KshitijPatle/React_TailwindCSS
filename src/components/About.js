import User from "./User";
import UserClass from "./UserClass";
import React from "react";




class About extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("Parent comp did mount")
    }

    render(){
        return(
            <div>
            <h1>About</h1>
            <h2>This is for checking about component</h2>
            <User name={"Kamal - (function)"}/>
            <UserClass name={"Kamal - (class)"} location = {"Jam - (class)"}/>
        </div>
        )
    }

}








// const About = ()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is for checking about component</h2>
//             <User name={"Kamal - (function)"}/>
//             <UserClass name={"Kamal - (class)"} location = {"Jam - (class)"}/>
//         </div>
//     )
// }

export default About;