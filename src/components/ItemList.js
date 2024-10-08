import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const ItemList = (props)=>{
  console.log(props.propsDrill)
    console.log(props[3])

    const dispatch = useDispatch();


   const handleAddItem = (item)=>{
    //Dispatch action
    dispatch(addItem(item))
   }




    return(
      <div>
      
        {props.items.map(item => 
        (<div className=" m-6  font-xs font-semibold border-b-4 ">
        <div className="flex justify-between">
            <span>{item.item}</span>
            <span>₹ {item.price/100 || item.defaultPrice/100}</span>
            </div>
            <div>
                <button className="bg-black text-white shadow-lg rounded-md" onClick={() => handleAddItem(item)}>Add +</button>
            </div>
        </div>))}
        
      </div>
    )
}

export default ItemList;