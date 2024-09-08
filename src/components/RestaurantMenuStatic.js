  import React, { useEffect , useState } from 'react'
  import { detailedResList } from '../utils/mockData'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';

  const RestaurantMenuStatic = (props) => {

    const[resInfo , setResInfo] = useState(null);
    // console.log(detailedResList)

    const{resId} = useParams();

    const[showIndex , setShowIndex] = useState(null);

    const propsDrill = 'Hello , understanding Props drilling.....!!!!!!!!!!!!!!'



    useEffect(() => {
      // Convert resId to an integer and find the restaurant by its ID
      const restaurant = detailedResList.find((res) => res.id === parseInt(resId));
  
      // Update state with the found restaurant details
      setResInfo(restaurant);
    }, [resId]); // Dependency array includes resId to update whenever it changes

    // useEffect((i)={
    //   fetchMenu()
    // },[])
 

    // const fetchMenu = async ()=>{
    //   const data = await fetch();
    //   const json = await data.json();
    //   console.log(json)
    // }

    if(resInfo===null) return <Shimmer />

    const{name,cuisines,id,cards} = resInfo;
    //  console.log(cards[0].card.content.title);
    //  console.log(cards);
    //  console.log(cards[6].card.content.menu[2])



    return (
      <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <h2 className='font-bold text-lg'>{cuisines}</h2>
        {/* {cards.map((category , index) => (<RestaurantCategory key={index} data={category?.card?.content} showItems = { index===showIndex ? true:false} setShowIndex={()=>{setShowIndex(index)}} />))} */}
        {cards.map((category , index) => (<RestaurantCategory key={index} data={category?.card?.content} showItems = { index===showIndex ? true:false} setShowIndex={()=>{setShowIndex(index===showIndex ? null:index)}} propsDrill = {propsDrill} />))}
      </div>
      )








    // return (
    // <div className='menu'>
    //   <h1>{name}</h1>
    //   <h2>{cuisines}</h2>
    //   <h2>Menu</h2>
    //   <ul>
    //   {menu.map((itm)=>(
    //     <li key = {id}>{itm.item}  - {itm.price/100 || itm.defaultPrice/100  } Rs.</li>
    //   ))}
    //     {/* <li>{menu[0].item}</li>
    //     <li>{menu[1].item}</li>
    //     <li>{menu[2].item}</li>
    //     <li>{menu[3].item}</li> */}
    //   </ul>
    // </div>
    // )
  }

  export default RestaurantMenuStatic;
