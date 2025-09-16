import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/CetegoryService";
export const AppContext=createContext(null);
import { fetchItems } from "../Service/ItemService";

export const AppContextProvider=(props)=>{
    const[categories,setCategories]=useState([]);
    const[itemsData,setItemsData]=useState([]);
    const[auth,setAuth]=useState({token:null, role:null});
    const[cartItems,setCartItems]=useState([]);
    
    const addToCart=(item)=>{
           const existingItem=cartItems.find(cartItems=>cartItems.name === item.name);
           if(existingItem){
            setCartItems(cartItems.map(cartItems=>cartItems.name===item.name ? {...cartItems,quantity:cartItems.quantity+1}:cartItems));
           }else{
            setCartItems([...cartItems,{...item,quantity:1}]);
           }
    } 

    const removeFromCart=(itemId)=>{
      setCartItems(cartItems.filter(item =>item.itemId!==itemId));
    }

    const updateQuantity=(itemId)=>{
      setCartItems(cartItems.map(item =>item.itemId===itemId ? {...item,quantity:item.quantity+1}:item));
    }


    useEffect(()=>{
        async function localData() {
          if (localStorage.getItem("token") && localStorage.getItem("role")) {
  setAuth({
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role")

  });
                 }

         const response=await  fetchCategories(); 
         const itemResponse=await fetchItems();
         setCategories(response.data);
         setItemsData(itemResponse.data);
        }
        localData();
    },[]);
/*useEffect(() => {
  async function localData() {
    if (localStorage.getItem("token") && localStorage.getItem("role")) {
      setAuth({
        token: localStorage.getItem("token"),
        role: localStorage.getItem("role")
      });
    }

    try {
      const response = await fetchCategories(); // fetch authorized categories
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }

    try {
      const itemResponse = await fetchItems(); // fetch items for all authenticated users
      setItemsData(itemResponse.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  localData();
}, []);*/




const setAuthData=(token,role)=>{
  setAuth({token,role});
}
const clearCart=()=>{
  setCartItems([]);
}
    const  contextValue={
           categories,
           setCategories,
           auth,
           setAuthData,
           itemsData,
           setItemsData,
           addToCart,
           cartItems,
           removeFromCart,
           updateQuantity,
           clearCart
    }
    return <AppContext.Provider value={contextValue}>
     {props.children} 
    </AppContext.Provider>
}