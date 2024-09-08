import React from "react";
import { useContext } from "react";
import UserContext from "../utils/userContext";

class UserClass extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            // count:0
            userInfo:{
                name:"Dummy",
                location:"default",
                contact:"text",
                avatar_url:"issue"
            }
        }
    }

   async  componentDidMount(){
        console.log("Child comp did mount")

        const data = await fetch("https://api.github.com/users/kshitijpatle");
        const json = await data.json();

        console.log(json)

        this.setState({
            userInfo : json
        })
    }


    componentDidUpdate(){
        console.log("Component did update")
    }

    componentWillUnmount(){
        console.log("Component will unmount")
    }


    render(){

        const{name,location,url,avatar_url} = this.state.userInfo

        return(

            <div className="user-card">
            <img src={avatar_url} alt="" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {url}</h4>
            <div>
            LoggedInUserContext :-
            <UserContext.Consumer>
            {/* {(data)=>(console.log(data))} */}
                {({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
            </UserContext.Consumer>
            </div>
           
      
          </div> 
    //         <div className="user-card">
    //   <h2>Name: {this.props.name}</h2>
    //   <h3>Location: {this.props.location}</h3>
    //   <h4>Contact: @kamalSept29</h4>

    // </div> 
        )
    }
}


export default UserClass;













































// import React from "react";

// class UserClass extends React.Component{


//     constructor(props){
//         super(props);

//         this.state = {
//             count:0
//         }
//     }

//     componentDidMount(){
//         console.log("Child comp did mount")
//     }


//     render(){
//         return(
//             <div className="user-card">
//             <h1>Count: {this.state.count}</h1>
//             <button onClick={()=>{
//                 this.setState({
//                     count:this.state.count +1
//                 })
//             }}>Increase Count</button>
//       <h2>Name: {this.props.name}</h2>
//       <h3>Location: {this.props.location}</h3>
//       <h4>Contact: @kamalSept29</h4>

//     </div> 
//         )
//     }
// }


// export default UserClass;