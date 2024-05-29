import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IfElseComponent from './Components/Conditional_Rendering/if_else.js';
import TernaryComponent from './Components/Conditional_Rendering/Ternary_operator.js';
import LogicalComponent from './Components/Conditional_Rendering/Logical_operator.js';
import Heading1, {Heading2 as Head2, Heading3} from './Components/Exports/Headings_Exports.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IfElseComponent></IfElseComponent>
    <TernaryComponent></TernaryComponent>
    <LogicalComponent></LogicalComponent>
    <Heading1></Heading1>
    <Head2></Head2>
    <Heading3></Heading3>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
