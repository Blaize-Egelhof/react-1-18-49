import React from 'react';
import "./App.css";
import EventClass from './components/eventClass';
import EventFunction from './components/eventFunction' ; 
import ConditionalRenderingClass from './components/conditionalRenderingClass';
import ConditionalRenderingFunction from './components/conditionalRenderingFunction';
import NestingClass from './components/nestingComponent';
import ParentPropsClass from './components/MethodsAsPropsParent';
import NavBarForm from './components/NavBarForm';
import RenderingLists from './components/renderingLists';
import Content from './components/content';

function App() {
  return <div className="App">
    {/* <ConditionalRenderingClass />
    <ConditionalRenderingFunction connected={false} /> */}
    {/* <NestingClass /> */}
    {/* < ParentPropsClass /> */}
    {/* <NavBarForm /> */}
    {/* <RenderingLists /> */}
    <Content />
  </div>;
}

export default App;
