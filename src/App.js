import React, {lazy , Suspense, useState,useEffect,useContext} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenuStatic from './components/RestaurantMenuStatic';
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
// import RestaurantMenuStatic from './components/RestaurantMenuStatic';
import Grocery from './components/Grocery';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';



const Grocery = lazy(()=> import("./components/Grocery"))



const AppLayout = ()=>{


  const[userName,setUserName] = useState();

  useEffect(()=>{

    const data ={ name :"Kshitij Patle"}
    setUserName(data.name)

  },[])




  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName , setUserName}}>

    <div className="app">
        {/* //Header
        //Body
        //Footer */}
        
        <Header/>
        {/* <Body/> */}
        
        <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
)


    // return(
    //     <div className="app">
    //         {/* //Header
    //         //Body
    //         //Footer */}
    //         <Header/>
    //         {/* <Body/> */}
    //         <Outlet />
    //     </div>
    // )
}



const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement: <Error />,
      children:[
        {
            path:"/",
            element:<Body />
          },
        {
            path:"/about",
            element:<About />
          },
          {
              path:"/contact",
              element:<Contact />
            },
          {
              path:"/grocery",
              element:(<Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>)
            },
            {
               path:"/restaurants/:resId",
               element:<RestaurantMenuStatic />,
               errorElement: <Error />
            },
            {
               path:"/cart",
               element:<Cart />,
              //  errorElement: <Error />
            }
      ]
    }
    
])






const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);










const styleCard = {
    backgroundColor: "#f0f0f0"
}


// const Title = ()=>(
//     <h1 className='second'>Hello I am Title</h1>
// )


// const HeadingComp = ()=>
//     (
//         <div>
//     <Title />
//     {Title()};
//     {2+2+2+2-4-4+23}
//     <h1 id='container'>Hello I am Head</h1>
//     </div>
//     )

// const HeadingAssignment =()=>(
//     <div id='header'>
//     <img style={{height:"90px" , width:"120px"}}  src="https://w7.pngwing.com/pngs/941/692/png-transparent-black-small-apple-logo-logo-material-apple-logo-black-thumbnail.png" alt="" />
//     <div className="search"  >
//         <input  type="text" placeholder='Type here...' />
//         <button >Search</button>
//     </div>
//     <img  style={{height:"90px" , width:"120px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHtqsQizwi4syQ1AyhMVid6SO78Nfdd-meQ&s" alt="" />
       
//     </div>
// )
    




// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingAssignment/>);



// const heading = React.createElement("h1", {}, "Hello React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement("div", {id:"parent"},
//      React.createElement("div",{id:"child"},
//         [
//             React.createElement("h1",{id:"hh1", key:"h1"},"Hello I am H1"),
//             React.createElement("h2",{id:"hh2", key:"h2"},"Hello I am H2"),
//         ]
//     ));

//     const parent = React.createElement("div", {id:"parent"},
//         [React.createElement("div",{id:"child", key:"h1234"},
//            [
//                React.createElement("h1",{id:"hh1", key:"h1"},"Hello I am H1 with Kshitij"),
//                React.createElement("h2",{id:"hh2", key:"h2"},"Hello I am H2"),
//            ]
//        ),
//        React.createElement("div",{id:"child", key:"h1236"},
//         [
//             React.createElement("h1",{id:"hh123", key:"h3"},"Hello I am H123"),
//             React.createElement("h2",{id:"hh223", key:"h4"},"Hello I am H223 with Kamal"),
//         ]
//     )
//     ]);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);




// const RestaurantCard = (props)=>{
// //destructuring
// const {resData}  = props;
// const {name,rating,cuisines,time,price,img} = resData?.data


//     return(
//         // <div className="res-card" style={styleCard}>
//         <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//         {/* <img className='res-logo' src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="res-logo" /> */}
//         <img className='res-logo' src={img} alt="res-logo" />
//             <h2>{name}</h2>
//             <h4>{cuisines}</h4>
//             <h5>{rating} stars ------  {time} minutes</h5>
//             <h3 style={{color:"blue"}}>{price/100} Rs.</h3>
//         </div>
//     )
// }







// const RestaurantCard = ()=>{
//     return(
//         // <div className="res-card" style={styleCard}>
//         <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//         <img className='res-logo' src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="res-logo" />
//             <h2>Meghana Foods</h2>
//             <h4>Biryani, North East, Asian</h4>
//             <h5>4.4 stars ------  38 minutes</h5>
//             {/* <h6>38 minutes</h6> */}
//         </div>
//     )
// }    