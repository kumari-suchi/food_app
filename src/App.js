import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { Auth0Provider } from "@auth0/auth0-react";
import Logout from "./components/Logout";
//import Grocery from "./components/Grocery";

const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;

const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout=()=> {
    const [userInfo,setUserInfo]=useState();

   useEffect(()=>{
    const data={
        name:"Ram",

    };
    setUserInfo(data.name);
   },[]); 

    return (
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                    
                </div>
                <Logout/>
            </UserContext.Provider>
        </Provider>
      
        </Auth0Provider>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ],
        errorElement:<Error/>
    },
    
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);