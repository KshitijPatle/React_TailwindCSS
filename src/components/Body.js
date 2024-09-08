import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect,useContext } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";




const Body = () => {


    const [originalData] = useState(resList);
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    const [searchValue, setSearchValue] = useState("");
    const [searchValueName, setSearchValueName] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); 

    const filteredTopData = () => {
        const filteredData = originalData.filter((res) => res.data.rating > 4);
        setListOfRestaurant(filteredData);
    }

    const changeSearchValue = (e) => {
        setSearchValue(e.target.value)
        // console.log(searchValue)
    }

    // console.log(useState());


    const filterByPrice = () => {
        const filterPrice = originalData.filter((ress) => Number(ress.data.price) <= Number(searchValue.trim()))
        // console.log(filterPrice)
        // console.log(Number(ress.data.price))
        // console.log(Number(searchValue.trim()))
        setListOfRestaurant(filterPrice);
    }



    const changeSearchValueName = (e) => {
        setSearchValueName(e.target.value)
        // console.log(searchValueName)
    }



    const filterByName = ()=>{
        const filterName = originalData.filter((resta)=>resta.data.name.toLowerCase().includes(searchValueName.toLowerCase()))
        setListOfRestaurant(filterName);
    }


    useEffect(() => {
        console.log("Hello use effect");
        // fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);

        // use below when using live data , fetching data from live api
        // setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // setListOfRestaurant(json.data.cards);
    }


    // if(listOfRestaurant.length === 0){
    //     // console.log("load")
    //     // return <h1>Loading.........</h1>
    //     return <Shimmer />
    // }


    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false) 
        return (
        <h1>
        Looks like you are offline. Please check your internet connection ...!!!
        </h1>
        );


        const {loggedInUser , setUserName} = useContext(UserContext)




    return listOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="flex items-center justify-center">
                <div className="searchSection m-4 p-4">
                    <input type="text" className="border border-solid border-black px-2 mx-1 rounded-md" placeholder="Search by name..." value={searchValueName} onChange={changeSearchValueName} />
                    <button className="px-4 py-1 m-4 bg-green-100 rounded-md" style={{ backgroundColor: "black", color: "yellow", cursor: "pointer" }} onClick={filterByName}>Search</button>
                </div>
                <button className="filter-btn bg-gray-300 rounded-md px-2 py-1" onClick={filteredTopData}>Top Rated Restaurant</button>
                <div className="searchSection">
                    <input type="text" className="border border-solid border-black mx-5 px-2 rounded-md" placeholder="Search by price..." value={searchValue} onChange={changeSearchValue} />
                    <button className="px-4 py-1 m-4 bg-green-100 rounded-md" style={{ backgroundColor: "black", color: "yellow", cursor: "pointer" }} onClick={filterByPrice}>Search</button>
                </div>
                <div>
                    <label>UserName : </label>
                    <input type=" " className="border border-solid border-black px-2 mx-1 rounded-md" value = {loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
            </div>

            <div className="flex flex-wrap">
                {/* //RestaurantCard */}
                {/* <RestaurantCard name={"Meghna Foods"} cuisine="Biryani , Non-veg"/> */}
                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[5]} />
                <RestaurantCard resData={resList[6]} />
                <RestaurantCard resData={resList[7]} />
                <RestaurantCard resData={resList[8]} />
                <RestaurantCard resData={resList[9]} />
                <RestaurantCard resData={resList[10]} />
                <RestaurantCard resData={resList[11]} />
                <RestaurantCard resData={resList[12]} /> */}
                {/* <RestaurantCard name = "KFC" cuisine="Fast Food, Burger"/> */}

                {/* resList.map(restaurant=> <RestaurantCard key={restaurant.data.id} resData={restaurant}/>) */}
                {listOfRestaurant.map((restaurant) =>(
                    <Link
                     key={restaurant.data.id} 
                     to={"/restaurants/" + restaurant.data.id}
                     >
                     {restaurant.data.promoted ? <RestaurantCardPromoted resData={restaurant}/> :  <RestaurantCard  resData={restaurant} /> }
                    
                     </Link>
                     ))}
            </div>
        </div>
    )
}

export default Body;