import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

    //const [resInfo,setResInfo]=useState(null);

    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);

    const [showIndex,setShowIndex]=useState(null)

    /*useEffect(()=>{
        fetchMenu();

    },[])

    const fetchMenu=async()=>{
        const data=await fetch(MENU_API + resId);
        const json=await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    */

    if(resInfo===null){
        return (<Shimmer/>)
    }
    
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const cat=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]===(("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")));
    //console.log(cat);
    
  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
        <p className="font-bold text-lg">
            {(resInfo?.cards[2]?.card?.card?.info?.cuisines).join(" ,")} -  {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
        </p>
        {cat.map((category, index)=>(<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index===showIndex?true:false} setShowIndex={()=>setShowIndex(index)}/>))}
    </div>
  )
}
export default RestaurantMenu;
