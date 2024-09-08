import { useEffect , useState } from "react";


const useUser = ()=>{

    const[info , setInfo] = useState(" ")

     useEffect(()=>{
        fetchData();
     },[])

     const fetchData= async ()=>{
        const data =await  fetch("https://api.github.com/users/kshitijpatle");
        const json = await data.json();

        setInfo(json)
       
     }


     return info;
   
}

export default useUser;