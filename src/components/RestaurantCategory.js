import React , {useState} from 'react'
import ItemList from './ItemList'




function RestaurantCategory(props) {
// function RestaurantCategory({data,showItems,setShowIndex,prpsDrill}) {

  console.log(props.data)

  //commented to make resaturantCategory as controlled component

//   const[showItems , setShowItems] = useState(false);

//   const handleClick = ()=>{

//     console.log("clicked")

//     // showItems ?  setShowItems(false) :  setShowItems(true)
//     setShowItems(!showItems)  
//   }


  const handleClick = ()=>{
      props.setShowIndex(); 
  }




  return (
    <div>
      <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
      <div className='flex justify-between'>
        <span className='font-bold text-lg'>{props.data.title} ({props.data.menu.length}) </span>
        {/* <span className='cursor-pointer text-4xl'  onClick={handleClick}>🔽</span> */}
        <span className='cursor-pointer text-4xl' onClick={handleClick}>🔽</span>
        </div>
       {props.showItems &&  <ItemList  items={props.data.menu} propsDrill = {props.propsDrill}/>  }
      </div>
       
    </div>
  )
}

export default RestaurantCategory;