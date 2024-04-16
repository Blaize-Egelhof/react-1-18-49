import React from 'react';
import "./App.css";
import EventClass from './components/eventClass';
import EventFunction from './components/eventFunction' ; 
import ConditionalRenderingClass from './components/conditionalRenderingClass';
import ConditionalRenderingFunction from './components/conditionalRenderingFunction';
import NestingClass from './components/nestingComponent';
import ParentPropsClass from './components/MethodsAsPropsParent';
import NavBarForm from './components/NavBarForm';

function App() {
  return <div className="App">
    {/* <ConditionalRenderingClass />
    <ConditionalRenderingFunction connected={false} /> */}
    {/* <NestingClass /> */}
    {/* < ParentPropsClass /> */}
    <NavBarForm />
  </div>;
}

export default App;
