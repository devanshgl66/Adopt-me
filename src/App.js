import React from "react"
import ReactDOM from "react-dom"
import Pet from"./Pet"
import SearchParam from './searchParams'
import Details from './Details'
import {Router } from '@reach/router'
// //formal method
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement(Pet, { name: "as", animal: "qw", breed: "er" }),
//     React.createElement(Pet, { name: "asa", animal: "qw", breed: "er" }),
//     React.createElement(Pet, { name: "asas", animal: "qw", breed: "er" }),
//   ]);
// };

//using AJX
//Name of Pet should be starting from capital letter or else it will render it as html
const App=()=>{
    return(
        // <div>
        //     <h1>Hello</h1>
        //     <Pet name="ramu" breed="human" animal="None"></Pet>
        // </div>

        //calling searchParam
        //first import SearchParam from file 'searchParam'
        //SearchParam starts with capital letter as it is a react component not a html
        <Router>       
            <SearchParam path="/" />
            <Details path='detail/:id' />
        </Router>

    );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
