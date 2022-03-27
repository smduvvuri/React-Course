import { useEffect, useReducer, useState } from 'react';
import './App.css';
import download from './download.jpeg'
import {Routes, Route} from "react-router-dom";
import{
  Home, About,Events, Contact, Error404, Services, History, Location} from "./pages";


/* function Header(props){
  return (
    <header>
    <h1>Shree's {props.name} Store</h1>
    </header>
  )
}

function Main(props){
  return (
    <section>
      <p> We have all the {props.desc} things you need.</p>
      <img src={download} alt="Craft Store Image"></img>
      <ul style={{textAlign:'left'}}>
        {props.items.map((item) => (
        <li key={item.id}> {item.title} </li>))}
      </ul>
    </section>
  )
}

function Footer(props){
  return (
    <footer>
      Copyright @{props.year}
    </footer>
  )
}

const items=[
  "Washi Tape",
  "Gift Cards",
  "Modelling Clay"
];

const itemObjects=items.map((item,i)=> ({id:i, title:item}));




function App() {
  return (
    <div className="App">
      <Header name="Craft"/>
      <Main desc="craft" items={itemObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}




function SecretComponent(){
  return(
    <h1>Secret Component</h1>
  );
}

function RegularComponent(){
  return(
    <h1>Regular Component</h1>
  );
}



function App() {
  if(props.authorized){
    return <SecretComponent />;
  }
    else{
    return <RegularComponent />;
    }
  const [greeting, setGreeting]=useState("Hello");
  const [secondary, setSecondary]=useState("Tired");
  useEffect(()=> {
console.log(`${greeting}`);
  }, [greeting]);

  useEffect(()=> {
    console.log(`${secondary}`);
  },[secondary]);

  const [checked, toggle]= useReducer(
    (checked)=> !checked,
    false
    );

  function toggle(){
    setChecked((checked)=> !checked);
  }

  return (
    <>
    {props.authorized ? <SecretComponent /> : <RegularComponent /> }
    </>
  
    <>
    <h1>{greeting} and {secondary}</h1>
    <button onClick={()=> setGreeting("Hi")}  > 
    Hi
    </button>
    <button onClick={()=> setSecondary("Tired")}>
      Tired
    </button>
    <button onClick={()=> setSecondary("Enthu")}>
      Enthu
    </button>
    <button onClick={()=> setGreeting("How are you?")} >
      How?
    </button>
    </>

    <>
    <input type="checkbox" 
           value={checked}
           onChange={toggle}
          />
          <p>{checked ? "checked" : "not checked"}</p>
    </>

    );
}



//https://api.github.com/users/smduvvuri

function App({login}){
  const[data, setData]= useState(null);
  const[loading, setLoading]= useState(null);
  const [error, setError]=useState(null);

  useEffect(()=> {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
    .then(()=>setLoading(false))
    .catch(setError);
  }, [login]);

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error,null,2)}</pre>;
  if(!data) return null;


    return (<div>
    <h1> {data.name} </h1>
    <p>{data.id}</p>
    <img alt={data.login} src={data.avatar_url}></img>
    </div>
    );
 
}
*/ 

function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
             <Route path="services" element={<Services />}/>
             <Route path="location" element={<Location />} />
             <Route path="history" element={<History />} />
        </Route>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;