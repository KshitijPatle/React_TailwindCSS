import { Link } from "react-router-dom";
import React from "react";



const RestaurantCard = (props) => {
    //destructuring
    const { resData } = props;
    const { name, rating, cuisines, time, price, img } = resData?.data

    // if here we have data inside time and we want to use that so in below code we have to write time.minute like that 


    return (
        //  <div className="res-card" style={styleCard}>
        <div className="m-4 p-2 w-[304px] rounded-sm hover:bg-gray-300 bg-gray-200" >
            {/* <img className='res-logo' src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="res-logo" /> */}
            <img className='rounded-xl h-[240px] w-[290px]' src={img} alt="res-logo" />
            <div className=" flex flex-col  items-center">
            <h2 className="font-bold py-4 text-xl">{name}</h2>
            <h4 className="py-2">{cuisines}</h4>
            {/* <h5>{rating} stars ------  {time} minutes</h5> */}
            <h5 className="py-2" style={{ color: rating>=4.0? "green" :"red" }}>{rating} stars ------  {time} minutes</h5>
            <h3 className="py-2" style={{ color: "blue"}}>{price / 100} Rs.</h3>
            </div>
        </div>
    )
}



//Higher order component (takes comp as input - enhance it - return comp as output

export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-1  rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
    
}


export default RestaurantCard;  


