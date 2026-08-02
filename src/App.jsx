import './App.css'
import Login, { Register, UserKey } from './UserComponent';
import JsxDemo from './JsxDemoComponent';
import JsxCurlyBraces from './JsxCurlyBracesComponent';
import FunctionCallClickEvent from './FunctionCallClickEventComponent';
import MyCount from './StateComponent';
import ConditionalRendering from './ConditionalRenderingComponent';
import PropsParent from './PropsParentComponent';
import PassJsxPropsParent from './PassJsxPropsParentComponent';
import GetSetClearInputField from './GetSetClearInputFieldComponent';
import GetSetClearCheckboxField from './GetSetClearCheckboxFieldComponent';
import GetSetClearRadioAndDropdownField from './GetSetClearRadioAndDropdownFieldComponent';
import LoopInJsx from './LoopInJsxComponent';
import ReuseComponentInLoop from './ReuseComponentInLoopComponent';

function App() {
  return (
    <>
      <h1>ReactJS Tutorial</h1>
      <br></br><br></br>
      <h2>Fruits:</h2>
      <Fruit></Fruit>
      <br></br>
      <h2>Colors:</h2>
      <Color></Color>
      <br></br>
      <hr />
      <br></br>
      <h2>Import/Export Component</h2>
      <Login />
      <Register />
      <h6>Imported UserKey = { UserKey } </h6>
      <hr />
      <h2>JSX Simple Demo</h2>
      <JsxDemo></JsxDemo>
      <hr />
      <h2>JSX Curly Braces</h2>
      <JsxCurlyBraces></JsxCurlyBraces>
      <hr />
      <h2>Function Call and Click Event in ReactJS</h2>
      <FunctionCallClickEvent></FunctionCallClickEvent>
      <hr />
      <h2>State</h2>
      <MyCount></MyCount>
      <hr />
      <h2>Conditional Rendering</h2>
      <ConditionalRendering></ConditionalRendering>
      <hr />
      <h2>Props</h2>
      <PropsParent />
      <hr />
      <h2>Pass JSX Content as Props</h2>
      <PassJsxPropsParent />
      <hr />
      <h2>Controlled Component - Get, Set and Clear Input field Value</h2>
      <GetSetClearInputField />
      <hr />
      <h2>Get, Set and Clear Checkbox field Value</h2>
      <GetSetClearCheckboxField />
      <hr />
      <h2>Get, Set and Clear Radio button & Dropdown field Value</h2>
      <GetSetClearRadioAndDropdownField />
      <hr />
      <h2>Loop in the JSX</h2>
      <LoopInJsx />
      <hr />
      <h2>Reuse Component in Loop</h2>
      <ReuseComponentInLoop />
    </>
  )
}

function Fruit() {
  return (
    <>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
    </>
  );
}

function Color() {
  return (
    <>
      <ul>
        <li>Orange</li>
        <li>White</li>
        <li>Green</li>
      </ul>
    </>
  );
}

export default App
