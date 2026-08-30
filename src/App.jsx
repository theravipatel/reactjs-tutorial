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
import ArrayNestedLoop from './ArrayNestedLoopComponent';
import UseEffectHook from './UseEffectHookComponent';
import InlineStyle from './InlineStyleComponent';
import DynamicConditionalInlineStyle from './DynamicConditionalInlineStyleComponent';
import ExternalStyle from './ExternalStyleComponent';
import MyCssModules from './MyCssModulesComponent';
import StyledComponent from './StyledComponent';
import BootstrapStyle from './BootstrapStyleComponent';
import UseRefHook from './UseRefHookComponent';
import UncontrolledInputField from './UncontrolledInputFieldComponent';
import PassFunctionParent from './PassFunctionParentComponent';
import PassRefParent from './PassRefParentComponent';
import UseFormStatusParent from './UseFormStatusParentComponent';
import UseTransition from './UseTransitionComponent';
import DerivedState from './DerivedStateComponent';
import LiftingStateParent from './LiftingStateParentComponent';
import UpdateObject from './UpdateObjectComponent';
import UpdateArray from './UpdateArrayComponent';
import UseActionStateHook from './UseActionStateHookComponent';
import UseIdHook from './UseIdHookComponent';
import FragmentComponent from './FragmentComponent';
import ContextApiParent from './ContextApiParentComponent';
import CustomHook from './CustomHookComponent';
import ReactRouter from './ReactRouterComponent';
import { BrowserRouter } from 'react-router';
import RedirectionAnd404Route from './RedirectionAnd404RouteComponent';
import NestedRouting from './NestedRoutingComponent';
import RoutePrefix from './RoutePrefixComponent';
import DynamicRoutes from './DynamicRoutesComponent';
import OptionalSegment from './OptionalSegmentComponent';
import NavLinkActiveClass from './NavLinkActiveClassComponent';
import TailwindCss from './TailwindCssComponent';
import GetApi from './GetApiComponent';

function App() {
  return (
    <BrowserRouter>
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
      <hr />
      <h2>Array Nested Looping</h2>
      <ArrayNestedLoop />
      <hr />
      <h2>useEffect Hook</h2>
      <UseEffectHook />
      <hr />
      <h2>Inline Style</h2>
      <InlineStyle />
      <hr />
      <h2>Dynamic and Conditional Inline Style</h2>
      <DynamicConditionalInlineStyle />
      <hr />
      <h2>External CSS Style in React JS</h2>
      <ExternalStyle />
      <hr />
      <h2>Style with CSS Modules</h2>
      <MyCssModules />
      <hr />
      <h2>Styled Components</h2>
      <StyledComponent />
      <hr />
      <h2>Use Bootsrap Style in React JS</h2>
      <BootstrapStyle />
      <hr />
      <h2>useRef Hook in React JS</h2>
      <UseRefHook />
      <hr />
      <h2>Uncontrolled Component - Get Form Input Field Values</h2>
      <UncontrolledInputField />
      <hr />
      <h2>Pass Function in Component as Props</h2>
      <PassFunctionParent />
      <hr />
      <h2>Pass/Forward Ref in React JS (v19)</h2>
      <PassRefParent />
      <hr />
      <h2>useFormStatus Hook in React JS</h2>
      <UseFormStatusParent />
      <hr />
      <h2>useTransition Hook in React JS</h2>
      <UseTransition />
      <hr />
      <h2>Derived State in React JS</h2>
      <DerivedState />
      <hr />
      <h2>Lifting State Up in React JS</h2>
      <LiftingStateParent />
      <hr />
      <h2>Updating Objects in State</h2>
      <UpdateObject />
      <hr />
      <h2>Updating Array in State</h2>
      <UpdateArray />
      <hr />
      <h2>useActionState Hook in React JS</h2>
      <UseActionStateHook />
      <hr />
      <h2>useId Hook in React JS</h2>
      <UseIdHook />
      <hr />
      <h2>Fragment in React JS</h2>
      <FragmentComponent />
      <hr />
      <h2>Context API in React JS 19</h2>
      <ContextApiParent />
      <hr />
      <h2>Custom Hooks in React JS</h2>
      <CustomHook />
      <hr />
      <h2>React Router</h2>
      <ReactRouter />
      <hr />
      <h2>404 Page and Redirection in React Route</h2>
      <RedirectionAnd404Route />
      <hr />
      <h2>Nested Routing in React Router</h2>
      <NestedRouting />
      <hr />
      <h2>Route Prefix in React Router</h2>
      <RoutePrefix />
      <hr />
      <h2>Dynamic Routes in React Router</h2>
      <DynamicRoutes />
      <hr />
      <h2>Segment and Optional Segment in React Router</h2>
      <OptionalSegment />
      <hr />
      <h2>NavLink and Active Class in React Router</h2>
      <NavLinkActiveClass />
      <hr />
      <h2>Install Tailwind CSS in React</h2>
      <TailwindCss />
      <hr />
      <h2>GET API in React JS</h2>
      <GetApi />
    </BrowserRouter>
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
