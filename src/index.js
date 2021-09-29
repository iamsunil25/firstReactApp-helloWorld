import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
import logo from './clock.png'

// import logoo from '../pictures/dy2.jpg'
// import App from './App'

  //  React.createElement(
    // 'h1',
    // {},
    // React.createElement('h6',{},'My name is snuel'));
// }

// const Hello = ()=>{
//   return   React.createElement('h6',{},React.createElement('p',{},""))
// }
const dy1 = {
  name:"sunel jam",
  singer : "raggaeton",
  age:25
}
const dy2={
  im:{logo},
   name:"sunel garcia",
  singer : "raggaeto",
  age:24
}

const WatchGallery=()=>{
  return(
    <section className="watchGallery">
    
       <Watch 
       name={dy1.name}
       singer={dy1.singer}
       age={dy1.age}
       >
          </Watch>
          <Watch 
       name={dy2.name}
       singer={dy2.singer}
       age={dy2.age}
        />
    
    </section>
  )
}
const Watch = (props)=>{
  const {name,singer,age}=props;
    return(
    <article className="watch">
     <Image/>
      <h1>{name}</h1>
       <h2>{singer}</h2>
      <h3>{age}</h3>
    </article>
  )
}

const Image=()=> <img style={{borderRadius:'50%'}} src ={logo} width="200px" height="200px" alt="" />
// const WatchName = ()=> <h1 style={{color:'#111',fontSize:'2rem', margin:'auto'}}>Rolex</h1> 
// const Price = ()=><p>$100.00</p> 
ReactDOM.render(<WatchGallery/>,document.getElementById("root"));









// ReactDOM.render(<Greeting></Greeting>,document.getElementById('root'))
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// const  Greeting = () =>
// {
// return(
//   <div Style = "display:flex">
// <Books></Books>
// <Books></Books>
// <Books></Books>
// <Books></Books>
// <Books></Books>
// <Books></Books>
// <Books></Books>
// <Books></Books>
// <Books></Books>
// <Books></Books>
// </div>
// )

/*
 function name must be capital and attribute must be capitalize
 nested component
const Nitesh = () =>  <h2>nitesh joshi</h2>;

const Ashok = ()=> <h2>ashok joshi</h2>;

const Jaswant = ()=> <h2>jaswant joshi</h2>;
<Nitesh />
<Ashok></Ashok>
<Jaswant></Jaswant> */
  // return (
  //   <h1>sss</h1>
  // )
// return React.createElement('h1',{},React.createElement('h1',{},'hello i am inside'))

// }
// const Books = ()=>{
//   return (
//     <div>
//       <img src="https://www.online-image-editor.com/online-image-editor-logo.png" width ="200px" height="200px" alt="dd"  />
//       <Title></Title>
//       <Author></Author>
//     </div>
//   )
// }
//  const Title = ()=>{
//    return <p>The Road Not Taken</p>
//  }
//  const Author = ()=>{
//    return <h1>Robert Frost</h1>
//  }


