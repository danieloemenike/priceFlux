import { Outlet, Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleThemeMode } from "../features/darkmodeSlice";
import {ReactComponent as Sun} from "../assets/Sun.svg"; //
import {ReactComponent as Moon} from "../assets/Moon.svg";
import { useState } from "react";
import "./root.css"
/*export async function loader(){
    const contacts = await getContacts();
    return { contacts };
}

export async function action() {
    const contact = await createContact();
    return { contact };
}*/
const navLinks = [

  {
    id: "cryptocurrencies",
    title: "Cryptocurrencies",
    path: "/cryptocurrencies"
  },
  {
    id: "exchange",
    title: "Exchange",
    path: "/exchange"
  },
  {
    id: "news",
    title: "News",
    path: "/news"
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact"
  },
];
const cryptoData = [
  { title:" Cryptos", amount:  "23,442"},
  { title:" Exchanges", amount:  "615" },
  { title: "Market Cap", amount: "$1,271,662,065,296" },
  { title: "24h Vol", amount: "$45,971,824,536" },
  { title: "BTC", amount: " 46.0%" },
  { title:" ETH", amount: "19.5 % "},
  { title:" ETH Gas", amount: "82Gwei" }
];
export default function Root() {
  //  const { contacts } = useLoaderData();

  const modeState = useSelector((state) => state.darkMode.mode)
  const dispatch = useDispatch();
 
  const handleThemeMode = () =>{
    dispatch(toggleThemeMode())
  }

    return (
        <>
        <section className={ `app ${modeState ? 'dark' : 'light'}` }>
        <div className="secondary-menu-bar">
              <div className="cryptoInfo">
                <div className="cryptodetails">
                  { cryptoData.map((crypto) => (
                    <p className="cryptos"> {crypto.title} :   <span className="cryptoAmount">  {crypto.amount} </span> </p>
                    
                  ))}
              </div>
              
              <div class = "auth-buttons">
                <button>  Log in</button>
                <button className="register">  Register</button>☻
              </div>
              
              </div>
            </div>
            
          <header>
           
            <div className="menu-bar">

            
            <div className="logo">
            <h1><span className="logo-inverse">PRICE</span>FLUX</h1>
            </div>
           
                <nav>
              <ul>
              {navLinks.map((navlink) => (
                <li key={ navlink.id } className="nav">
                  <Link to={ navlink.path } className = "nav-item"> { navlink.title } </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='dark_mode'>
            <input className='dark_mode_input' type='checkbox' id='darkmode-toggle' onChange={handleThemeMode}  />
              <label className='dark_mode_label' htmlFor='darkmode-toggle'>
            
                <Sun /> 
                <Moon />
            </label>
     
            </div>
         
            </div>
            </header>
            <div id="detail">
                <Outlet/>
          </div>
         </section>
        </>
    );
}