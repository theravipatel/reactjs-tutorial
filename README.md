# ReactJS Tutorial

## 1) Introduction

- What is React JS?
    - React is JavaScript Library
    - Use to make web front-end application
    - With React we make SPA (Single Page Application)
- Why Learn React?
    - Fast because of virtual DOM
    - Easy to learn
    - Learning curve is also less compare other UI technology.
    - Hight demand and a lots of Job in market.
    - Large community
- Prerequisite for React
    - Just Basic Understanding of JavaScript, HTML and CSS

## 2) Installation

- Install Node.js
- Install Vite
    - Why Vite?
        - Officially recommended by React docs
        - Super fast dev server
        - Cleaner build process
        - Supports TypeScript, CSS modules, pre-processors, and more!
- Setup React App via Terminal:
    -   ```
        npm create vite@latest
        ```
    - Follow the prompts and select as per your need
- Install Node Modules
    -   ```
        npm install
        ```
- Run the React App
    -   ```
        npm run dev
        ```
    - App should now run on localhost:5173 (Vite's default port).

## 3) How React Works

- You can write HTML code inside JavaScript using JSX.
- React renders everything properly in the browser.
- First file that executes is `index.html`
    -   ```html
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
        ```
    - The `<script>` tag loads main.jsx.
    - The root element is the starting point of the React app.
- In `main.jsx` File
    -   ```jsx
        import { StrictMode } from 'react'
        import { createRoot } from 'react-dom/client'
        import './index.css'
        import App from './App.jsx'

        createRoot(document.getElementById('root')).render(
            <StrictMode>
                <App />
            </StrictMode>,
        )
        ```
    - `createRoot()` finds the element with id root in `index.html`.
    - It renders the `<App />` component inside that root.
    - This is the main job of the `main.jsx` file.
- In `App.jsx` File
    -   ```jsx
        import './App.css'
        function App() {
            return (
                <>
                    <h1>ReactJS Tutorial</h1>
                </>
            )
        }
        export default App
        ```
- Why Should Component Names Start With a Capital Letter?
    - Because React treats lowercase tags like HTML elements (e.g., `<div>`, `<h1>`), and uppercase tags as custom React components.
- Return Must Have a Single Parent Tag means All JSX returned by a component must be wrapped inside a single parent element like a `<div>` or a fragment `<> </>`.
- ReactJS is a library and not a framework so the main difference between library and framwork is a below:
    - **Library**: You control the flow (e.g., React).
    - **Framework**: The framework controls the flow; you just follow its structure (e.g., Angular).

## 4) Component

- In React, a component is a small, reusable part of the UI (User Interface).
- The header, button, footer, or form field can be components.
- A component can contain other smaller components inside it. i.e. Nested components
- Role of Components in React
    - Every part of the UI in React is made using components.
    - Components can be reused throughout the app.
    - They make the code modular, readable, and easy to maintain.
- Rules for Writing Components
    - Always start component names with a Capital Letter.
    - Components must return a single parent tag.
    - Use `<div>...</div>` or `<>...</>` (React Fragment).
- How to Write Your First React Component:
- In `App.jsx`:
    -   ```jsx
        import './App.css'

        function App() {
            return (
                <>
                    <h1>ReactJS Tutorial</h1>
                    <br></br><br></br>
                    <h2>Fruits:</h2>
                    <Fruit />           {/* Self-closing tag */}
                    <br></br>
                    <h2>Colors:</h2>
                    <Color></Color>     {/* Normal tag */}
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

        ```
- Note that:
    - A React component must return a single tag.
    - You cannot return two or more HTML elements side by side without wrapping them.

## 5) Import and Export Components

- We should not  create all components in a single file.
- If we want to use a component in other files, we must export it.
- To use an exported component, we need to  import it in the file where we want to use it.
- Example Use Case:
    - If you create an *Image component*, you can reuse it in multiple places like Profile section, Post section, Navbar etc.
    - This keeps your code modular and reusable.
- Type of Import/Export Component:
    - `Default`:
        - You can export only one default per file.
        - Import it without curly braces.
        - Example:
            -   ```jsx
                // Export
                export default Login;

                // Import
                import Login from "./UserComponent.jsx";
                ```
    - `Named`:
        - You can export multiple values from a single file using named exports.
        - Example:
            -   ```jsx
                // Export
                export function Profile() {
                    return <h1>Profile</h1>;
                }

                export function Setting() {
                    return <h1>Setting</h1>;
                }
                
                // Import
                import { Profile, Setting } from "./UserComponent.jsx";
                ```
- Both Default and Named Exports in One File
- Example:
    -   ```jsx
        function Login() {
            return <h1>Login User</h1>;Economics
        }

        export function Profile() {
            return <h1>Profile</h1>;
        }

        export function Setting() {
            return <h1>Setting</h1>;
        }

        export default Login;
        
        // Import in App.jsx
        import Login, { Profile, Setting } from "./UserComponent.jsx";

        function App() {
            return (
                <div>
                    <h1>Importing and Exporting Components</h1>
                    <Login />
                    <Profile />
                    <Setting />
                </div>
            );
        }
        ```
- You can also export variables (like keys, constants):
- Example:
    -   ```jsx
        // In UserComponent.jsx
        export const UserKey = "SecretKey";
        
        // In App.jsx
        import { UserKey } from "./UserComponent.jsx";
        ```

## 6) JSX in React

- There is often some confusion about what JSX stands for. Some say it means JavaScript Extension, while others believe it's JavaScript XML. However, there is no official full form of JSX mentioned on the React official website.
- It is just a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files.
- JSX makes it easier and cleaner to create React elements and build the UI.
- With JSX: You can write both together in the same file.
    - Example:
        -   ```jsx
            function App() {
                const userName = "Ravi Patel";
                let x = 20;
                let y = 30;

                return (
                    <div>
                        <h1>{userName}</h1>
                        <h1>{10 + 20 + 30}</h1>
                        <h1>{x * y}</h1>Development Tools
                        <button onClick={() => alert("Hello")}>Click</button>
                    </div>
                );
            }
            ```
- Without JSX: HTML and JavaScript are written separately.
    - Example:
        -   ```jsx
            import { createElement } from "react";Scripting Languages

            function App() {
                return createElement(
                    "div",
                    { id: "rootDiv" },
                    createElement("h1", { className: "heading" }, "Hello without JSX")
                );
            }
            ```

## 7) JSX Simple Demo
-   ```jsx
    // In JsxDemoComponent.jsx
    function JsxDemo () {
        function clickMe () {
            alert("Hello There!");
        }

        return (
            <>
                <h2>JSX Demo Title</h2>
                <hr />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/330px-Flag_of_India.svg.png" alt="India Flag" width="200px" />
                <hr />
                <p>This is JSX Demo</p>
                <button onClick={clickMe}>Click Me</button>
            </>
        );
    }

    export default JsxDemo;

    // In App.jsx
    import JsxDemo from "./JsxDemoComponent.jsx";

    function App() {
        return (
            <>
                <h1>ReactJS Tutorial</h1>
                <br></br><br></br>
                <h2>JSX Simple Demo</h2>
                <JsxDemo></JsxDemo>
            </>
        )
    }

    export default App;
    ```

## 8) JSX Curly Braces
- Example:
-   ```jsx
    // In JsxCurlyBracesComponent.jsx
    function JsxCurlyBraces() {
        const name = "Ravi Patel";
        const x = 10;
        const y = 20;

        const userObject = {
            name: "Ravi Patel",
            email: "ravi@patel.com"
        };

        const colorArray = ["Orange", "White", "Red"];

        const imagePath = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/330px-Flag_of_India.svg.png";

        function demoFunction() {
            return "This is from the demo function.";
        }

        function calFunction(arg1, arg2, operation = "sum") {
            if (!arg1 || !arg2) {
                return "Error!";
            }

            if (operation === "sum") {
                return arg1 + arg2;
            } else if (operation === "subtract") {
                return arg1 - arg2;
            } else {
                return "Invalid operation!";
            }
        }

        return (
            <div>
                <ul>
                    <li>
                        <h4>Using Variables</h4>
                        <p>Name: {name}</p>
                        <p>x + y = {x + y}</p>
                    </li>
                    <li>
                        <h4>Conditional Rendering</h4>
                        <p>{(name) ? name : "-"}</p>
                    </li>
                    <li>
                        <h4>Using Functions</h4>
                        <p>{demoFunction()}</p>
                    </li>
                    <li>
                        <h4>Performing Operations</h4>
                        <p>Sum of 5 & 10 = {calFunction(5, 10)}</p>
                        <p>Subtract of 10 & 1 = {calFunction(10, 1, "subtract")}</p>
                    </li>
                    <li>
                        <h4>Using Objects</h4>
                        <p>User Name = {userObject.name}</p>
                        <p>User Email = {userObject.email}</p>
                    </li>
                    <li>
                        <h4>Using Arrays</h4>
                        <p>First color = {colorArray[0]}</p>
                    </li>
                    <li>
                        <h4>Using HTML Tag Attributes</h4>
                        <input type="text" name="name" value={name} />
                        <br /><br />
                        <img src={imagePath} alt="India Flag" width="200px" />
                    </li>
                </ul>
            </div>
        );
    }

    export default JsxCurlyBraces;
    ```


## 9) Function call and Click event handling
- To call a function in React JS, we need to follow below rules:
    - Use camelCase: `onClick` instead of `onclick`.
    - Don't use quotes `""`: JSX treats quoted functions as strings.
    - Do not call the function immediately using `()`. Just pass the reference like `onClick={demoFunction}`.
- Using `onClick={demoFunction}`, means we are passing function definition, not function name like in Plain JavaScript.
- To pass the argument with function we can not write `onClick={ paramFunction("Apple") }` because it will call the function immediately, not on click. So we need to use `onClick={ () => paramFunction("Apple") }` ensures the function runs only when the button is clicked.
- Example:
-   ```jsx
    // In FunctionCallClickEventComponent.jsx
    function FunctionCallClickEvent() {
        function demoFunction() {
            alert("This is from the demo function.");
        }
        const arrowFunction = () => {
            alert("This is from the Arrow function!");
        };
        const paramFunction = (name) => {
            alert("You have clicked " + name);
        };

        return (
            <div>
                <div>
                    <h6>Normal Function</h6>
                    <button onClick={demoFunction}>Call Normal Function</button>
                </div>
                <div>
                    <h6>Arrow Function</h6>
                    <button onClick={arrowFunction}>Call Arrow Function</button>
                </div>
                <div>
                    <h6>Function with Parameter</h6>
                    <button onClick={ () => paramFunction("Apple") }>Click Apple</button>
                    <br />
                    <button onClick={ () => paramFunction("Orange") }>Click Orange</button>
                </div>
            </div>
        );
    }

    export default FunctionCallClickEvent;
    ```


## 10) Upgrade React Version
- To see what version of React you're currently using:
    - Open your project folder.
    - Open the `package.json` file.
    - Look under the `dependencies` section:
    -   ```json
        "dependencies": {
            "react": "^19.2.7",
            "react-dom": "^19.2.7"
        },
        ```
- To upgrade to the latest version, we just need to run below command:
-   ```cmd
    npm install react@latest react-dom@latest
    ```
- After upgrading, test if everything works fine.


## 11) State
- State is like a variable but smarter.
- It stores dynamic data and automatically re-renders the component whenever the state changes.
- React does not understand normal JavaScript variables for UI updates.
- If you want to update and reflect values in the UI, use state.
- We can call it as Data Container.
- State is mutable (it can change).
- It allows React components to keep track of data that changes over time.
- React will automatically update the UI when the state value changes.
- React re-renders the component every time you call the update function.
- You can use multiple state values in a single component.
- State makes your React components interactive and responsive.
- To use State, we need to use `Hooks` like `use` keyword i.e. `useState`, `useEffect` etc.
- `Hooks` are special functions that let you use React features in functional components.
- With hooks, you can use:
    - State (useState)
    - Lifecycle methods (useEffect)
    - Other advanced features
- How to Use useState:
    - Import useState like `import { useState } from "react";`
    - In component write like 
        -   ```jsx
            const [fruit, setFruit] = useState("Apple");
            const handleFruit = () => {
                setFruit("Banana");
            };
            ```
    - Here,
        - fruit is the current value.
        - setFruit is the function to update the value.
        - Clicking the button changes like `<button onClick={handleFruit}>Change Fruit Name</button>`, "Apple" to "Banana" and updates the UI.
- Example:
-   ```jsx
    // In StateComponent.jsx
    import { useState } from "react";

    function MyCount() {
        const [count1, setCount1] = useState(0);
        const [count2, setCount2] = useState(10);

        return (
            <div>
                <h6>Count 1 is { count1 }</h6>
                <h6>Count 2 is { count2 }</h6>
                <button onClick={ () => setCount1(count1 + 1) }>Increase Count by 1</button>
                <br></br>
                <button onClick={ () => setCount2(count2 - 1) }>Decrease Count by 1</button>
            </div>
        );
    }

    export default MyCount;
    ```


## 12) Conditional Rendering
- Using the Ternary Operator `(? :)` (Inline JSX)
    - This is the most common pattern inside JSX blocks for handling direct if-else scenarios concisely.
    -   ```jsx
        function StatusMessage({ isOnline }) {
            return (
                <div>
                    User is {isOnline ? <span>Online 🟢</span> : <span>Offline 🔴</span>}
                </div>
            );
        }
        ```
- Using the Logical AND Operator `(&&)` (Inline JSX)
    - Use this "short-circuit" method when you want to render a specific piece of JSX only if a condition is true, and nothing otherwise.
    - Avoid putting numbers directly on the left side of &&. For example, `0 && <p>text</p>` will render `0` on your screen.
    - Convert it to a strict boolean using comparisons instead: `count > 0 && <p>text</p>`
    - ```jsx
        function NotificationBanner({ hasUnreadMessages }) {
            return (
                <div>
                    { hasUnreadMessages && <p>You have unread mail!</p> }
                </div>
            );
        }
        ```
- Using Switch Case or Object Mapping (For Multi-State UI)
    - When dealing with multiple potential views (like an API status tracking loading, success, or error), use a helper function or an object map.
    - ```jsx
        const views = {
            loading: <Spinner />,
            success: <DataView />,
            error: <ErrorMessage />
        };

        function StatusContainer({ status }) {
            return <div>{views[status] || <DefaultView />}</div>;
        }
        ```
- Example:
    -   ```jsx
        // In ConditionalRenderingComponent.jsx
        import { useState } from "react";

        function ConditionalRendering() {
            const [isOnline, setIsOnline] = useState(true);
            const [hasUnreadMessages, setHasUnreadMessages] = useState(true);
            const [showView, setShowView] = useState('default');
            const views = {
                loading: <p>Clicked Loading</p>,
                success: <p>Clicked Success</p>,
                default: <p>Clicked Default</p>
            };

            return (
                <div>
                    <div>
                        <h5>Using the Ternary Operator `(? :)`</h5>
                        <div>
                            <button onClick={ () => setIsOnline(!isOnline) }>Toggle Status</button>
                            User is {isOnline ? <span>Online 🟢</span> : <span>Offline 🔴</span>}
                        </div>
                    </div>

                    <div>
                        <h5>Using the Logical AND Operator `(&&)`</h5>
                        <div>
                            <button onClick={ () => setHasUnreadMessages(!hasUnreadMessages) }>Toggle Status</button>
                            { hasUnreadMessages && <p>You have unread mail!</p> }
                        </div>
                    </div>

                    <div>
                        <h5>Using Switch Case or Object Mapping</h5>
                        <div>
                            <button onClick={ () => setShowView('loading') }>loading</button>
                            <button onClick={ () => setShowView('success') }>success</button>
                            <button onClick={ () => setShowView('default') }>default</button>
                            <br></br>
                            <div>{views[showView] || views['default']}</div>
                        </div>
                    </div>
                </div>
            );
        }

        export default ConditionalRendering;
        ```


## 13) Props
- Props (short for "properties") are like function parameters.
- They allow you to pass data from one component to another (typically from parent to child).
- We can pass data like `<User name="Ravi Patel" />`.
- To retrieve that data we need to write as below:
    - 1) Using simple function parameter
    -   ```jsx
        function User(props) {
            return (
                <div>
                    <h1>{props.name}</h1>
                </div>
            );
        }
        ```
    - 2) Using destructuring the props
    -   ```jsx
        function User({name}) {
            return (
                <div>
                    <h1>{name}</h1>
                </div>
            );
        }
        ```
- We can also pass multiple props as below:
    - ```jsx
        const rollnumber = 10;
        const addressObjData = {
            state: "Gujarat",
            country: "Bharat",
        };
        const colorArrayData = ["Orange", "White", "Red"];
        <User
            name="Ravi Patel"
            email="ravi@patel.com"
            phone={123456}
            rollnumber={rollnumber}
            addressObjData={addressObjData}
            colorArrayData={colorArrayData}
        />
        ```
- Default props are a way of providing default values for props that are not required by the component.
- The cleanest and most efficient way to assign fallback values is by destructuring props directly inside your function signature. i.e. `function Profile({ name = "Guest", role = "Member" }) { }`
- Example:
    -   ```jsx
        // In PropsParentComponent.jsx
        import PropsChild from "./PropsChildComponent";

        function PropsParent() {
            const rollnumber = 10;
            const addressObjData = {
                state: "Gujarat",
                country: "Bharat",
            };
            const colorArrayData = ["Orange", "White", "Red"];
            return (
                <div>
                    <h6>Parent Component</h6>
                    <p>-------</p>
                    <PropsChild
                        name="Ravi Patel"
                        email="ravi@patel.com"
                        phone={123456}
                        rollnumber={rollnumber}
                        addressObjData={addressObjData}
                        colorArrayData={colorArrayData}
                    />
                </div>
            );
        }

        export default PropsParent;
        ```
    -   ```jsx
        // In PropsChildComponent.jsx
        function PropsChild({ name, email, phone, rollnumber, addressObjData, colorArrayData }) {
            return (
                <div>
                    <h6>Child Component</h6>
                    <ul>
                        <li>Name: { name }</li>
                        <li>Email: { email }</li>
                        <li>Phone: { phone }</li>
                        <li>Rollnumber: { rollnumber }</li>
                        <li>Address: { addressObjData.state + ", " + addressObjData.country }</li>
                        <li>Color: { colorArrayData[0] }</li>
                    </ul>
                </div>
            );
        }

        export default PropsChild;
        ```


## 14) Pass JSX Content with Props
- We can pass JSX between components by using the special children prop or by passing JSX as a named prop.
- Using the children Prop:
    - Nest the JSX directly between the opening and closing tags of the child component.
    - The receiving component accesses it automatically using `props.children`.
    -   ```jsx
        // Parent Component
        function App() {
            return (
                <Card>
                    <h2>Special Offer!</h2>
                    <p>Sign up today to get a 20% discount.</p>
                </Card>
            );
        }
        // Child Component
        function Card({ children }) {
            return (
                <div className="card-wrapper">
                    {children} 
                </div>
            );
        }
        ```
- Using Named Props:
    - Pass JSX chunks as standard named properties if your component needs to place content into multiple specific locations (like a header and a footer).
    - ```jsx
        // Parent Component
        function App() {
            return (
                <Layout 
                    header={<h1>My Dashboard</h1>}
                    body={<p>Welcome back, user! Here is your data.</p>}
                />
            );
        }
        // Child Component
        function Layout({ header, body }) {
            return (
                <div className="layout">
                    <header className="top-bar">{header}</header>
                    <main className="main-content">{body}</main>
                </div>
            );
        }
        ```
- Example:
    -   ```jsx
        // In PassJsxPropsParentComponent.jsx
        import PassJsxPropsChild from "./PassJsxPropsChildComponent";

        function PassJsxPropsParent() {
            return (
                <div>
                    <h6>Parent Component</h6>
                    <p>-------</p>
                    <PassJsxPropsChild
                        header={<p><u>This is my Header</u></p>}
                        footer={<p><u>This is my footer</u></p>}
                    >
                        <p>Hello Everyone,</p>
                        <p>This is all about the content of the body.</p>
                    </PassJsxPropsChild>
                </div>
            );
        }

        export default PassJsxPropsParent;
        ```
    -   ```jsx
        // In PassJsxPropsChildComponent.jsx
        function PassJsxPropsChild({ children, header, footer }) {
            return (
                <div>
                    <h6>Child Component</h6>
                    <header>{ header }</header>
                    { children }
                    <footer>{ footer }</footer>
                </div>
            );
        }

        export default PassJsxPropsChild;
        ```


## 15) Controlled Component - Get, Set and Clear Input field Value
- A `Controlled Component` is a form input field whose value is controlled by React using state.
- That means:
    - The value typed in the input is stored in a `useState()` variable.
    - Whenever the user types something, the state is updated.
    - The input field shows the value from the state.
- To get, set and cleat input field value, we can use the `useState` hook to manage the input value.
- We can define a state variable `val` using `useState`, then `onChange` event captures user input and updates the state for which we need to use `event.target.value` to get the current value of the input.
- Example:
    -   ```jsx
        // In GetSetClearInputFieldComponent.jsx
        import { useState } from "react";

        function GetSetClearInputField() {
            const [nameVal, setNameVal] = useState("");
            return (
                <div>
                    <table width="500px" border="1" cellPadding="5">
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={nameVal}
                                        onChange={(event) => setNameVal(event.target.value)}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => setNameVal("")}>Reset</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Typed value:</td>
                                <td colSpan="2">{nameVal}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default GetSetClearInputField;
        ```


## 16) Get, Set and Clear Checkbox field Value
- With checkboxes, we may have multiple values. So we need to store these values in an array using state. When a checkbox is unchecked, we must remove that value from the array.
- For that, we can:
    - Use `event.target.value` to get the value of the checkbox.
    - Use `event.target.checked` to check whether checkbox is check or not which will returns true or false.
    - To add the selected value to the array, we can use spread operator i.e. `...skills` which will get the current value of the `skills` array
    - To remove the selected value from the array, we can use `.filter()` along with spread operator i.e. `...skillsVal.filter((item) => item != event.target.value)`
- Example:
    -   ```jsx
        // In GetSetClearCheckboxFieldComponent.jsx
        import { useState } from "react";

        function GetSetClearCheckboxField() {
            const [skillsVal, setSkillsVal] = useState([]);

            const handleCheckbox = ((event) => {
                console.log(event.target.value, event.target.checked);
                // Here we are using spread operator to add the new value to the existing array of selected values. If the checkbox is unchecked, we filter out the value from the array.
                if (event.target.checked) {
                    setSkillsVal([...skillsVal, event.target.value]);
                } else {
                    setSkillsVal([...skillsVal.filter((item) => item != event.target.value)]);
                }
            });

            const clearCheckboxField = (() => {
                setSkillsVal([]);
                // Get all checkboxes
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                // Loop through each checkbox and uncheck it
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = false;
                });
            });

            return (
                <div>
                    <table width="500px" border="1" cellPadding="5">
                        <tbody>
                            <tr>
                                <td>Skills:</td>
                                <td>
                                    <label htmlFor="php">
                                        <input
                                            type="checkbox"
                                            name="skills[]"
                                            id="php"
                                            value="PHP"
                                            onChange={handleCheckbox}
                                        />
                                        PHP
                                    </label>
                                    <br />
                                    <label htmlFor="reactjs">
                                        <input
                                            type="checkbox"
                                            name="skills[]"
                                            id="reactjs"
                                            value="ReactJS"
                                            onChange={handleCheckbox}
                                        />
                                        ReactJS
                                    </label>
                                </td>
                                <td>
                                    <button onClick={() => clearCheckboxField() }>Reset</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Selected value:</td>
                                <td colSpan="2">{ skillsVal.toString() }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default GetSetClearCheckboxField;
        ```

## 17) Get, Set and Clear Radio button & Dropdown field Value
- The radio button and dropdown will work similar to input/checkbox, just to keep in mind that for the radio, we can use the default checked attribut like `checked={ genderVal === "Male" }` and for the dropdown, we can use the default downdown option selection like `defaultValue={defaultCity}`.
- Example:
    -   ```jsx
        // In GetSetClearRadioAndDropdownFieldComponent.jsx
        import { useState } from "react";

        function GetSetClearRadioAndDropdownField() {
            const defaultGender = "Male";
            const [genderVal, setGenderVal] = useState(defaultGender);
            
            const defaultCity = "City 2";
            const [cityVal, setCityVal] = useState(defaultCity);
            
            return (
                <div>
                    <table width="500px" border="1" cellPadding="5">
                        <tbody>
                            <tr>
                                <td>Gender:</td>
                                <td>
                                    <label htmlFor="male">
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value="Male"
                                            onChange={ (event) => setGenderVal(event.target.value) }
                                            checked={ genderVal === "Male" }
                                        />
                                        Male
                                    </label>
                                    <br />
                                    <label htmlFor="female">
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            value="Female"
                                            onChange={ (event) => setGenderVal(event.target.value) }
                                            checked={ genderVal === "Female" }
                                        />
                                        Female
                                    </label>
                                </td>
                                <td>
                                    <button onClick={() => setGenderVal(defaultGender)}>Reset</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Gender value:</td>
                                <td colSpan="2">{ genderVal }</td>
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td>
                                    <select
                                        name="city"
                                        id="city"
                                        defaultValue={defaultCity}
                                        value={cityVal}
                                        onChange={ (event) => setCityVal(event.target.value) }
                                    >
                                        <option value="City 1">City 1</option>
                                        <option value="City 2">City 2</option>
                                        <option value="City 3">City 3</option>
                                        <option value="City 4">City 4</option>
                                        <option value="City 5">City 5</option>
                                    </select>
                                </td>
                                <td>
                                    <button onClick={() => setCityVal(defaultCity)}>Reset</button>
                                </td>
                            </tr>
                            <tr>
                                <td>City value:</td>
                                <td colSpan="2">{ cityVal }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default GetSetClearRadioAndDropdownField;
        ```


## 18) Loop in the JSX
- For the loop in the JSX, we can use the `.map()` function to loop through the arrat of objects.
- Example:
    -   ```jsx
        // In LoopInJsxComponent.jsx
        import { useState } from "react";

        function LoopInJsx() {
            const userData = [
                { id: 1, name: "User 1", email: "user1@test.com" },
                { id: 2, name: "User 2", email: "user2@test.com" },
                { id: 3, name: "User 3", email: "user3@test.com" },
            ];
            return (
                <div>
                    <table width="500px" border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user) => {
                                    return (
                                        <tr key={ user.id }>
                                            <td>{ user.id }</td>
                                            <td>{ user.name }</td>
                                            <td>{ user.email }</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            );
        }

        export default LoopInJsx;
        ```


## 19) Reuse Component in Loop
- Instead of writting all the html code inside the jsx and looping for the data, we can make new component and pass the data to that componenet as prop to reuse it so inside the JSX, code will be clear & readable.
- Example:
    -   ```jsx
        // In ReuseComponentInLoopComponent.jsx
        import ReuseComponent from "./ReuseComponent";

        function ReuseComponentInLoop() {
            const userData = [
                { id: 1, name: "User 1", email: "user1@test.com" },
                { id: 2, name: "User 2", email: "user2@test.com" },
                { id: 3, name: "User 3", email: "user3@test.com" },
            ];
            return (
                <div>
                    <table width="500px" border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user) => {
                                    return (
                                        <ReuseComponent key={ user.id } user={ user } />
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            );
        }

        export default ReuseComponentInLoop;
        ```
    -   ```jsx
        // In ReuseComponent.jsx
        function ReuseComponent({ user }) {
            console.log(user);
            
            return (
                <tr>
                    <td>{ user.id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                </tr>
            );;
        }

        export default ReuseComponent;
        ```


## 20) Array Nested Looping
- Example:
-   ```jsx
    // In ArrayNestedLoopComponent.jsx
    import StudentDetail from "./StudentDetailComponent";

    function ArrayNestedLoop() {
        const studentData = [
            {
                name: "Ravi Patel",
                roll_number: "1",
                city: "Rajkot",
                subject_score: [
                    {
                        subject1: 90,
                        subject2: 100,
                        subject3: 95,
                    }
                ],
            },
            {
                name: "John Doe",
                roll_number: "2",
                city: "Amdavad",
                subject_score: [
                    {
                        subject1: 80,
                        subject2: 70,
                        subject3: 75,
                    }
                ],
            },
        ];
        return (
            <div>
                <h4>Student Data</h4>
                {
                    studentData.map((student, index) => (
                        <StudentDetail key={index} student={student} />
                    ))
                }
            </div>
        );
    }

    export default ArrayNestedLoop; 
    ```
-   ```jsx
    // In StudentDetailComponent.jsx
    import StudentScore from "./StudentScoreComponent";

    function StudentDetail({ student }) {
        return (
            <div style={{
                border: "1px solid #FBC02D",
                borderRadius: "10px",
                padding: "5px",
                margin: "5px"
            }}>
                <h4 style={{ margin: "5px 0" }}>{ student.name }</h4>
                <ul style={{ margin: "5px 0", fontSize: "0.83em" }}>
                    <li>Roll No.: { student.roll_number }</li>
                    <li>City: { student.city }</li>
                    <li>
                        Subject Scores:
                        <StudentScore subject_score={student.subject_score} />
                    </li>
                </ul>
            </div>
        );
    }

    export default StudentDetail;
    ```
-   ```jsx
    // In StudentScoreComponent.jsx
    function StudentScore({ subject_score }) {
        return (
            <ul>
                {
                    subject_score.map((subject_score, index) => (
                        <div key={index}>
                            <li>Subject 1 - { subject_score.subject1 } </li>
                            <li>Subject 2 - { subject_score.subject2 } </li>
                            <li>Subject 3 - { subject_score.subject3 } </li>
                        </div>
                    ))
                }
            </ul>
        );
    }

    export default StudentScore;
    ```


## 21) Hooks in React JS
- React Hooks are built-in JavaScript functions that allow you to use state, lifecycle methods and other React features inside functional components.
- It is introduced in React 16.8.
- They eliminated the structural need for complex JavaScript class components, making our frontend code significantly shorter and easier to maintain.
- Why React Hooks Were Created:
    - Before hooks, managing a component's lifecycle or local state required writing a JavaScript class.
    - This often led to:
        - Bloated Code: Verbose class syntax required constructors, binding methods, and calling `this.state`.
        - Scattered Logic: Splitting related code across disconnected lifecycle methods like `componentDidMount` and `componentWillUnmount`.
        - Poor Reusability: Difficulty sharing stateful behavior between components without altering component hierarchies.
- Most Common Built-In Hooks:
    - `useState`: Stores and updates local variables directly inside the component.
    - `useEffect`: Orchestrates side effects such as pulling external API data, setting up timers, or interacting with the DOM.
    - `useContext`: Subscribes directly to global context systems to pull in global data (like themes) without drilling props down manually through intermediate parents.
    - `useRef`: Persists mutable values across renders without re-triggering component UI updates, or references underlying physical DOM nodes directly.
    - `useMemo / useCallback`: Cache calculated values or generated function instances to prevent expensive performance bottlenecks.
- The Core Rules of Hooks:
    - To ensure React links state data to the proper elements correctly during rapid user interactions, we must follow two strict rules:
        - `Only Call Hooks at the Top Level`: Never invoke hooks inside conditional blocks, JavaScript loops, or nested callback functions.
        - `Only Call Hooks from React Functions`: Invoke hooks exclusively within functional components or inside your own engineered Custom Hooks.
- Example:
-   ```jsx
    import React, { useState } from 'react';

    function Counter() {
        // Declares a state variable named "count" starting at 0
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>
        );
    }
    ```


## 22) useEffect Hook in React JS
- The `useEffect` hook in React allows you to handle side effects in functional components.
- Side effects are tasks that happen outside the scope of a standard UI render, such as fetching data, setting up subscriptions, managing timers, or changing the DOM manually.
- It replaces the classic class component lifecycle methods:
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount
- The `useEffect` hook accepts two arguments. The second argument is optional. i.e. `useEffect(<function>, <dependency>)`
- Basic Syntax:
    -   ```jsx
        import { useEffect } from 'react';

        useEffect(() => {
            // Your side effect code goes here

            return () => {
                // Optional cleanup function goes here
            };
        }, [dependencies]);
        ```
- The behavior of `useEffect` is controlled entirely by its second argument, known as the `dependency array`.
- We can handle the dependencies as follow:
    - No dependency array passed:
        - It will run `after every single render of the component`.
        - Analogy to Class Lifecycles: `componentDidMount` + `componentDidUpdate`
        -   ```jsx
            useEffect(() => {
                //Runs on every render
            });
            ```
    - An empty dependency array:
        - It will run `only once after the initial render (mounting)`.
        - Analogy to Class Lifecycles: `componentDidMount`
        -   ```jsx
            useEffect(() => {
                //Runs only on the first render
            }, []);
            ```
    - With props or state values:
        - It will run `on the initial render and whenever the specified props or state values change`.
        - Analogy to Class Lifecycles: `componentDidUpdate`
        -   ```jsx
            useEffect(() => {
                //Runs on the first render
                // //And any time any dependency value changes
            }, [prop1, state1]);
            ```
- The Importance of the Cleanup Function
    - If our effect sets up something persistent (like a timer, a network subscription, or a global event listener), we must return a cleanup function.
    - React will execute this cleanup function right before the component unmounts, or right before running the effect again on a dependency change.
    - This prevents severe performance issues like memory leaks.
- Example:
    -   ```jsx
        // In UseEffectHookComponent.jsx
        import { useEffect, useState } from "react";

        function UseEffectHook() {

            const [callEveryTimeCounter, setCallEveryTimeCounter] = useState(0);
            const [callOnceCounter, setCallOnceCounter] = useState(0);
            const [callOnStateChangeCounter, setCallOnStateChangeCounter] = useState(0);
            
            function callEveryTimeCounterFn() {
                console.log("callEveryTimeCounterFn called every time", callEveryTimeCounter);
            }

            function callOnceCounterFn() {
                console.log("callOnceCounterFn called will be execute only once", callOnceCounter);
            }

            function callOnStateChangeCounterFn() {
                console.log("callOnStateChangeCounterFn called when state change", callOnceCounter);
            }

            /*
                // without useEffect below code will always call 
                callEveryTimeCounterFn();
                callOnceCounterFn();
            */

            
            // Called every time component renders
            useEffect(() => {
                callEveryTimeCounterFn();
            });

            // Called only once when component mounts
            useEffect(() => {
                callOnceCounterFn();
            }, []);

            // Called only when callOnStateChangeCounter state change
            useEffect(() => {
                callOnStateChangeCounterFn();
            }, [callOnStateChangeCounter]);

            return (
                <div>
                    <table border="1" cellPadding="1">
                        <thead>
                            <tr>
                                <td>Action</td>
                                <td>Value</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button onClick={ () => setCallEveryTimeCounter(callEveryTimeCounter+1) }>Call Everytime Counter</button>
                                </td>
                                <td>{ callEveryTimeCounter }</td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={ () => setCallOnceCounter(callOnceCounter+1) }>Call Once Counter</button>
                                </td>
                                <td>{ callOnceCounter }</td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={ () => setCallOnStateChangeCounter(callOnStateChangeCounter+1) }>Call On State Change Counter</button>
                                </td>
                                <td>{ callOnStateChangeCounter }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default UseEffectHook;
        ```


## 23) useEffect Hook for Life Cycle Methods in React JS
- React lifecycle methods dictate the series of predictable events that a component goes through from its birth to its death.
- Traditionally used in class components, these events are split into three primary phases:
    - `Mounting`:
        - This phase happens when an instance of a component is created and inserted into the DOM.
        - Key Class Method: `componentDidMount()`
        - Hook Equivalent (useEffect): `useEffect(() => {}, [])` (Empty dependency array)
    - `Updating`:
        - An update occurs when there is a change to the component's internal state or its parent props.
        - Key Class Method: `componentDidUpdate()`
        - Hook Equivalent (useEffect): `useEffect(() => {}, [dependency])`
    - `Unmounting`:
        - This phase cleans up memory before the component disappears from the DOM.
        - Key Class Method: `componentWillUnmount()`
        - Hook Equivalent (useEffect): `useEffect(() => { return () => {} }, [])` (Cleanup function)
- Modern functional React code manages these same phases using the `useEffect` Hook.
- Example:
    -   ```jsx
        // In UseEffectHookComponent.jsx
        import { useEffect, useState } from "react";
        import LifeCycle from "./LifeCycleComponent";

        function UseEffectHook() {

            const [callEveryTimeCounter, setCallEveryTimeCounter] = useState(0);
            const [callOnceCounter, setCallOnceCounter] = useState(0);
            const [callOnStateChangeCounter, setCallOnStateChangeCounter] = useState(0);
            const [showCounter, setShowCounter] = useState(true);
            
            function callEveryTimeCounterFn() {
                console.log("callEveryTimeCounterFn called every time", callEveryTimeCounter);
            }

            function callOnceCounterFn() {
                console.log("callOnceCounterFn called will be execute only once", callOnceCounter);
            }

            function callOnStateChangeCounterFn() {
                console.log("callOnStateChangeCounterFn called when state change", callOnceCounter);
            }

            /*
                // without useEffect below code will always call 
                callEveryTimeCounterFn();
                callOnceCounterFn();
            */

            
            // Called every time component renders
            useEffect(() => {
                callEveryTimeCounterFn();
            });

            // Called only once when component mounts
            useEffect(() => {
                callOnceCounterFn();
            }, []);

            // Called only when callOnStateChangeCounter state change
            useEffect(() => {
                callOnStateChangeCounterFn();
            }, [callOnStateChangeCounter]);

            return (
                <div>
                    <table border="1" cellPadding="1">
                        <thead>
                            <tr>
                                <td>Action</td>
                                <td>Value</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button onClick={ () => setCallEveryTimeCounter(callEveryTimeCounter+1) }>Call Everytime Counter</button>
                                </td>
                                <td>{ callEveryTimeCounter }</td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={ () => setCallOnceCounter(callOnceCounter+1) }>Call Once Counter</button>
                                </td>
                                <td>{ callOnceCounter }</td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={ () => setCallOnStateChangeCounter(callOnStateChangeCounter+1) }>Call On State Change Counter</button>
                                </td>
                                <td>{ callOnStateChangeCounter }</td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={ () => setShowCounter(!showCounter) }>Toggle Counter</button>
                                </td>
                                <td>
                                    {
                                        showCounter ? <LifeCycle data={callEveryTimeCounter} /> : null
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default UseEffectHook;
        ```
    -   ```jsx
        // In LifeCycleComponent.jsx
        import { useEffect } from "react";

        function LifeCycle({ data }) {
            // Called when mount
            useEffect(() => {
                console.log("LifeCycle Method - called when mount");
            }, []);

            // Called when update
            useEffect(() => {
                console.log("LifeCycle Method - called when update");
            }, [data]);

            // Called when unmount
            useEffect(() => {
                return (() => {
                    console.log("LifeCycle Method - called when unmount");
                });
            }, []);

            return (
                <div>
                    <h6><i>{ data }</i></h6>
                </div>
            );
        }

        export default LifeCycle;
        ```


## 24) Styling in React JS
- In React JS, there are five primary ways to apply styles to components.
- 1) Inline Style
    - We can pass styles directly to elements using a JavaScript object via the `style attribute`.
    - **Syntax**: Uses `camelCase` for property names instead of hyphens (e.g., `backgroundColor` instead of `background-color`).
    - **Pros**: Great for quick prototyping and dynamic styles calculated on the fly.
    - **Cons**: No support for pseudo-classes (like `:hover`), media queries, or clean separation of concerns.
    - Example:
        -   ```jsx
            <div style={{ color: 'blue', fontSize: '16px' }}>Hello World!</div>
            ```
- 2) External Style
    - You can write normal CSS or Sass in a separate file and import it directly into your React component.
    - **Syntax**: Uses the `className` attribute instead of the traditional HTML class attribute.
    - **Pros**: Familiar syntax; allows use of standard preprocessors like Sass or Less.
    - **Cons**: All styles are globally scoped, meaning class names can conflict and overwrite each other across different components.
    - Example:
        -   ```jsx
           import './styles.css';
            ```
- 3) CSS Modules
    - This approach writes regular CSS but scopes it locally to the specific component by auto-generating unique class names.
    - **Syntax**: Files must be named with the `.module.css` extension and imported as an object.
    - **Pros**: Eliminates class name conflicts entirely without needing additional library dependencies.
    - **Cons**: Applying global style overrides or dynamic prop-based sharing can be verbose.
    - Example:
        -   ```jsx
            // In MyComponent.module.css
            .container {
                background-color: #CCCCCC;
                padding: 10px;
            }
            ```
        -   ```jsx
            // In MyComponent.jsx
            import styles from './MyComponent.module.css';

            <div className={styles.container}>Hello World!</div>
            ```
- 4) Styled Components / Emotion (CSS in JS)
    - This methodology leverages external libraries to embed CSS directly inside your JavaScript files using tagged template literals.
    - **Syntax**: Highly popular via third-party packages like Styled Components(https://styled-components.com/) or Emotion(https://emotion.sh/docs/introduction).
    - **Pros**: Dynamically alters components using React props, nests easily, and automatically handles scoping.
    - **Cons**: Slightly slower runtime performance; increases the overall JavaScript bundle size.
    - Example:
        -   ```jsx
            // In MyComponent.jsx
            import styled from 'styled-components';

            const Button = styled.button`
                background-color: ${props => props.primary ? 'blue' : 'gray'};
                color: white;
                padding: 10px 20px;
                border: none;
            `;
            ```
- 5) Utility-First Frameworks (Externa CSS Library/Framework)
    - Instead of writing custom CSS, we apply pre-defined atomic utility classes directly within our JSX structure.
    - **Syntax**: Utilized by installing frameworks like Tailwind CSS.
    - **Pros**: Drastically speeds up production; ensures highly consistent layout grids, spacing, and design systems.
    - **Cons**: Leads to long, cluttered class strings within your JSX markup.


## 25) Inline Style in React JS
- In React JS, the style is passed as a JavaScript object inside JSX.
- CSS properties must be written in `camelCase`.
- Use `commas (,)`, not `semicolons (;)`, after each property.
- Values are in quotes if they are strings.
- In HTML, we will write style as string `("color: red;")`
- In React, we will write style as object `({ color: 'red' })`
- Example:
    -   ```jsx
        // In InlineStyleComponent.jsx
        function InlineStyle() {
            const styleObj = {
                color: '#FBC02D',
                backgroundColor: '#607D8B',
                margin: '10px 0',
                padding: '5px',
                borderRadius: '5px',
                border: '2px solid #E91E63'
            };
            return (
                <div>
                    <h4 style={{ color: '#3949AB', backgroundColor: '#FF8A65', margin: '10px 0', padding: '5px', borderRadius: '5px', border: '2px solid #43A047' }}>Inline style inside div</h4>
                    <h4 style={ styleObj }>Inline style using object</h4>
                </div>
            );
        }

        export default InlineStyle;
        ```


## 26) Dynamic and Conditional Inline Style
- We can update the styles dynamically i.e. add or remove styles, by using React state.
- Exaple:
    -   ```jsx
        // In DynamicConditionalInlineStyleComponent.jsx
        import { useState } from "react";

        function DynamicConditionalInlineStyle() {
            const defaultTextColor = "#fff";
            const defaultTableStyle = {
                border: "1px solid #ed3a3a",
                borderCollapse: "collapse",
                backgroundColor: "orange",
                color: defaultTextColor,
            };
            const [theme, setTheme] = useState("orange");
            const [tableStyle, setTableStyle] = useState(defaultTableStyle);

            function updateTheme(bgColor) {
                setTheme(bgColor);
                let newStyle = {
                    backgroundColor: bgColor
                }
                newStyle = { 
                    ...newStyle,
                    ...( bgColor === "blue" ? { textAlign: "right" } : { textAlign: "left" })
                }
                setTableStyle({ ...tableStyle, ...newStyle });
            }

            return (
                <div>
                    <table border="1" width="500px" cellPadding="5px" style={tableStyle}>
                        <thead>
                            <tr>
                                <td>
                                    <button onClick={ () => updateTheme("orange") }>Orange Theme</button>
                                </td>
                                <td>
                                    <button onClick={ () => updateTheme("white") }>White Theme</button>
                                </td>
                                <td>
                                    <button onClick={ () => updateTheme("blue") }>Blue Theme</button>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    <h4 style={{ color: theme === "white" ? "#555" : defaultTextColor }}>!!!Hello World!!!</h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default DynamicConditionalInlineStyle;
        ```


## 27) External CSS Style in React JS
- In React JS, we can use external CSS by creating a standalone `.css` stylesheet and importing it directly into our component file using JavaScript `import` syntax.
- Instead of using the traditional HTML `class` attribute, React utilizes the `className` attribute to assign styles to JSX elements.
- Note that `Traditional external CSS` files imported into a React component are not `scoped` to that component. When build tools like Webpack bundle our app, these styles become global. If you define `.title` in `Home.css` and another `.title` in `About.css`, they will overwrite each other and conflict.
- How to use:
    - Create a standard CSS file (i.e., `style.css`) in our project directory.
    - Import and Use inside the React Component.
- Example:
    -   ```css
        /* In src/css/style.css */
        .externa-style-container {
            width: 100%;
            background-color: #222;
        }
        .externa-style-container .table,
        .externa-style-container .table tr,
        .externa-style-container .table td {
            border: 1px solid #444;
            padding: 5px;
            border-collapse: collapse;
        }
        .externa-style-container .title {
            font-size: 24px;
            text-align: center;
            color: #f23f12;
        }
        .externa-style-container .img {
            width: 200px;
            padding: 5px;
            border: 1px solid #545454;
        }
        .externa-style-container .description {
            color: #fff;
        }
        ```
    -   ```jsx
        // In ExternalStyleComponent.jsx
        import './css/style.css';

        function ExternalStyle() {
            return (
                <div className="externa-style-container">
                    <table className="table">
                        <tr>
                            <td colSpan={2}>
                                <h3 className="title">What is Artificial Intelligence?</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://www.zabala.eu/wp-content/uploads/2023/11/Artificial-intelligente-and-consultancy.jpg" alt="What is Artificial Intelligence?" className="img" />
                            </td>
                            <td>
                                <p className="description">Artificial Intelligence (AI) is a set of technologies that allows computers and machines to copy human thinking, learning, and problem-solving. It helps systems process data, spot patterns, and make choices. </p>
                            </td>
                        </tr>
                    </table>
                </div>
            );
        }

        export default ExternalStyle;
        ```


## 28) Style with CSS Modules
- CSS Modules allow us to write locally scoped CSS files that automatically avoid class name conflicts in our React application.
- Why we should use CSS Modules:
    - **No Name Clashing**: Build tools compile `.btnPrimary` into a unique global string like `_btnPrimary_q1obu_1`.
    - **Dead Code Elimination**: Unused classes can be caught easily during production builds.
    - **Standard CSS**: You can still use standard CSS features like pseudo-classes `(:hover)`, media queries, and animations natively.
- How to use:
    - Name your CSS file using the `.module.css` naming convention and write standard CSS classes inside it.
    - Import the CSS file as a JavaScript object i.e. `import styles from './Button.module.css';`.
    - Map the object properties directly to the className attribute i.e. `className={styles.btnPrimary}`.
- Handle Advanced Style Use Cases:
    - **Multiple Classes**:
        - Use template literals to join multiple module classes together.
        - ```<div className={`${styles.btnPrimary} ${styles.large}`}>```
    - **Conditional Classes**:
        - Combine conditions using standard JavaScript logic.
        - ```<button className={isError ? styles.errorBtn : styles.btnPrimary}>```
    - **Global Classes**:
        - Mix a global utility class with local styles.
        - ```<div className={`global-container ${styles.btnPrimary}`}>```
    - **Sass/SCSS Support**:
        - Rename the file to `.module.scss` if your build system has preprocessor support.
- Example:
    -   ```css
        /* In src/css/MyCssModules.module.css */
        .externa-style-container {
            width: 100%;
            background-color: #222;
        }
        .externa-style-container .table,
        .externa-style-container .table tr,
        .externa-style-container .table td {
            border: 1px solid #444;
            padding: 5px;
            border-collapse: collapse;
        }
        .externa-style-container .title {
            font-size: 24px;
            text-align: center;
            color: #f23f12;
        }
        .externa-style-container .img {
            width: 200px;
            padding: 5px;
            border: 1px solid #545454;
        }
        .externa-style-container .description {
            color: #fff;
        }
        ```
    -   ```jsx
        // In MyCssModulesComponent.jsx
        import style from './css/MyCssModules.module.css';

        function MyCssModules() {
            return (
                <div className={ style['externa-style-container'] }>
                    <table className={ style.table }>
                        <tbody>
                            <tr>
                                <td colSpan={2}>
                                    <h3 className={ style.title }>What is Artificial Intelligence?</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://www.zabala.eu/wp-content/uploads/2023/11/Artificial-intelligente-and-consultancy.jpg" alt="What is Artificial Intelligence?" className={ style.img } />
                                </td>
                                <td>
                                    <p className={ style.description }>Artificial Intelligence (AI) is a set of technologies that allows computers and machines to copy human thinking, learning, and problem-solving. It helps systems process data, spot patterns, and make choices. </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default MyCssModules
        ```


## 29) Styled Components
- Styled Components is a CSS-in-JS library that allows us to write actual CSS code inside your JavaScript or TypeScript files, scoped to individual components.
- Install the package via your terminal: `npm install styled-components`
- How to use:
    - Tagged Template Literals (Standard Method):
        - This is the default recommended method. It uses backticks **(`)**, letting us to write standard, unaltered CSS syntax directly inside your JavaScript file.
        - Example:
            -   ```jsx
                const PrimaryButton = styled.button`
                    background-color: #0070f3;
                    color: white;
                    font-size: 16px;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;

                    &:hover {
                        background-color: #0051a2; /* Native CSS nesting and pseudo-classes */
                    }
                `;

                // <PrimaryButton>Click Me</PrimaryButton>
                ```
    - Object Syntax (CSS-in-JS Style Object):
        - Instead of backticks, we can pass a JavaScript object directly into the style constructor function.
        - This syntax uses camelCase for CSS properties and requires quotes for string values.
        - Example:
            -   ```jsx
                const Box = styled.div({
                    backgroundColor: 'royalblue',
                    padding: '20px',
                    borderRadius: '8px',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: 'navy',
                    }
                });

                // <Box></Box>
                ```
    - Overriding Existing Components:
        - To reuse base styles on a new element, pass the existing component into the `styled()` function as a wrapper.
        - Example:
            -   ```jsx
                const BaseButton = styled.button`
                    color: black;
                    border: 1px solid black;
                `;

                // Inherits all styles from BaseButton and overrides/adds new ones
                const TomatoButton = styled(BaseButton)`
                    color: red;
                    border-color: red;
                `;

                // <BaseButton>Black Color Button</BaseButton>
                // <TomatoButton>Red Color Button</TomatoButton>
                ```
- Example:
    -   ```jsx
        // In StyledComponent.jsx
        import styled from "styled-components";

        function StyledComponent() {
            const Box = styled.div({
                backgroundColor: '#222',
                padding: '20px',
                borderRadius: '8px',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#37474F',
                }
            });
            const PrimaryButton = styled.button`
                background-color: #0070f3;
                color: white;
                font-size: 16px;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                width: 200px;

                &:hover {
                    background-color: #0051a2; /* Native CSS nesting and pseudo-classes */
                }
            `;

            const DangerButton = styled(PrimaryButton)`
                background-color: #EF5350;
                &:hover {
                    background-color: #D32F2F; /* Native CSS nesting and pseudo-classes */
                }
            `;

            return (
                <Box>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <PrimaryButton>Click Me</PrimaryButton>
                                </td>
                                <td>
                                    <DangerButton>Danger Click</DangerButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            );
        }

        export default StyledComponent;
        ```


## 30) Use Bootsrap Style in React JS
- We can use Bootstrap in React.js by choosing one of two primary approaches: vanilla Bootstrap classes via standard CSS or the native react-bootstrap library.
- The native component library (react-bootstrap) is highly recommended because it removes heavy dependencies like jQuery and treats Bootstrap components as true, accessible React elements.
- The native component library (react-bootstrap) replaces vanilla Bootstrap JavaScript with native React components, preventing DOM manipulation bugs and ensuring better accessibility.
- Install the package via your terminal: `npm install react-bootstrap bootstrap`
- How to use:
    - Add the stylesheet import to your global entry file, typically `src/main.jsx` or `src/index.js`.
        - `import 'bootstrap/dist/css/bootstrap.min.css';`
    - Import specific pieces from the React Bootstrap library inside your components.
        - `import Button from 'react-bootstrap/Button';` or `import { Button } from 'react-bootstrap';`
    - Use it like `<Button variant="primary">Click Me</Button>`
- Example:
    -   ```jsx
        // In src/main.jsx
        import 'bootstrap/dist/css/bootstrap.min.css';
        ```
    -   ```jsx
        // In BootstrapStyleComponent.jsx
        import { Button } from "react-bootstrap";

        function BootstrapStyle() {
            return (
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <Button variant="primary">Bootstrap Button</Button>
                                </td>
                                <td>
                                    <button>Normal Button</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default BootstrapStyle;
        ```


## 31) useRef Hook in React JS
- The `useRef` Hook allows you to persist values between renders.
- It can be used to store a mutable value that does not cause a re-render when updated.
- It can be used to access a DOM element directly.
- If we tried to count how many times our application renders using the `useState` Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
- To avoid this, we can use the `useRef` Hook.
- `useRef` only returns one item. It returns an Object called `.current`.
- How to use:
    - Create a ref using the useRef Hook: `const inputElement = useRef();`.
    - Attach the ref to a DOM element using the ref attribute in JSX: `<input type="text" ref={inputElement} />`.
    - Access the DOM element using the current property: `inputElement.current.value="123"` or `inputElement.current.focus()`.
- Example:
    -   ```jsx
        // In UseRefHookComponent.jsx
        import { useRef } from "react";
        import { Button } from "react-bootstrap";

        function UseRefHook() {
            const inputRef = useRef(null);
            const focusHandler = () => {
                console.log("inputRef => ", inputRef);
                inputRef.current.focus();
            }
            const setValueHandler = () => {
                console.log("inputRef => ", inputRef);
                inputRef.current.value = "Default Value";
                inputRef.current.style.color = "yellow";
            }
            return (
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td colSpan={2}>
                                    <input className="form-control" type="text" ref={inputRef} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="primary" onClick={ focusHandler }>Focus Input</Button>
                                </td>
                                <td>
                                    <Button variant="secondary" onClick={ setValueHandler }>Set Default Value in Input</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default UseRefHook;
        ```


## 32) Uncontrolled Component - Get Form Input Field Values
- An `uncontrolled component` in React JS is a form element whose value and state are managed directly by the browser's `Document Object Model (DOM)` instead of by React state.
- Which means, the form element controls itself - React does not track or manage its value directly.
- Instead of tracking every keystroke with a state variable (`useState`) and updating it via an onChange event, we pull the value from the DOM only when we need it (like during a form submission) using a React `ref`.
- Example:
    -   ```jsx
        // In UncontrolledInputFieldComponent.jsx
        import { useRef } from "react";
        import { Button } from "react-bootstrap";

        function UncontrolledInputField() {
            const usernameRef = useRef("");

            // Using DOM method
            const handleInputDom = () => {
                const username = document.querySelector("#usernameDom").value;
                console.log("usernameDom = ", username);
            }

            // Using react ref
            const handleInputRef = () => {
                const username = usernameRef.current.value;
                console.log("usernameRef = ", username);
            }

            return (
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" id="usernameDom" className="form-control" />
                                </td>
                                <td>
                                    <Button variant="primary" onClick={ handleInputDom }>Submit DOM</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" id="usernameRef" ref={ usernameRef } className="form-control" />
                                </td>
                                <td>
                                    <Button variant="secondary" onClick={ handleInputRef }>Submit Ref</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default UncontrolledInputField;
        ```

## 33) Pass Function in Component as Props
- We can define the function in the parent component and then assign it as an attribute to the child component.
- This pattern is the primary way for a child component to trigger state updates or actions inside its parent.
- Example:
    -   ```jsx
        // In PassFunctionChildComponent.jsx
        import PassFunctionChild from "./PassFunctionChildComponent";

        function PassFunctionParent() {
            
            const whichFruit = (name) => {
                alert("It is " + name + "...!!!");
            }

            return (
                <div>
                    <PassFunctionChild whichFruit={whichFruit} />
                </div>
            );
        }

        export default PassFunctionParent;
        ```
    -   ```jsx
        // In PassFunctionChildComponent.jsx
        import { Button } from "react-bootstrap";

        function PassFunctionChild({ whichFruit }) {

            return (
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <Button variant="danger" onClick={() => whichFruit("Apple") }>Click Apple</Button>
                                </td>
                                <td>
                                    <Button variant="warning" onClick={() => whichFruit("Banana") }>Click Banana</Button>
                                </td>
                                <td>
                                    <Button variant="warning" onClick={() => whichFruit("Orange") }>Click Orange</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default PassFunctionChild;
        ```


## 34) Pass/Forward Ref in React JS (v19)
- In React 19, `forwardRef` is officially deprecated because we can now pass `ref` directly as a standard prop to function components. 
- In the earlier version of React JS, it is done as below
    -   ```jsx
        // In Child Component
        import { forwardRef } from "react";
        function UserInput (props, ref) {
            return(
                <div>
                    <input type="text" ref={ref}  />
                </div>
            );
        }
        export default forwardRef(UserInput)
        ```
- But in React JS v19, we do not need to wrap our child component with `forwardRef()` anymore. Simply destructure `ref` directly from the props list.
- Example:
    -   ```jsx
        // In PassRefParentComponent.jsx
        import { useRef } from "react";
        import { Button } from "react-bootstrap";
        import PassRefChild from "./PassRefChildComponent";

        function PassRefParent() {
            const inputRef = useRef(null);

            const updateInputHandler = () => {
                inputRef.current.value = 5000;
                inputRef.current.focus();
            }

            const clearInputHandler = () => {
                inputRef.current.value = "";
                inputRef.current.focus();
            }

            return (
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td colSpan={2}>
                                    <PassRefChild inputRef={inputRef} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="primary" onClick={ updateInputHandler }>Update Input</Button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={ clearInputHandler }>Clear Input</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default PassRefParent; 
        ```
    -   ```jsx
        // In PassRefChildComponent.jsx
        function PassRefChild({ inputRef }) {
            return (
                <div>
                    <input className="form-control" type="text" ref={inputRef} />
                </div>
            );
        }

        export default PassRefChild;
        ```


## 35) useFormStatus Hook in React JS
- The `useFormStatus` hook is a built-in React Hook that provides status information about the last parent `<form>` submission.
- It acts like a context consumer, tracking if a form is actively submitting data without requiring us to manually pass down state or props.
- Unlike most standard React hooks, it must be imported from `react-dom` rather than the core `react` package.
- The `useFormStatus` hook does not accept any parameters. It returns an object with the following four properties:
    - `pending`: A boolean value indicating if the parent form is currently submitting.
    - `data`: A FormData object containing the values of the form being submitted.
    - `method`: A string showing the submission HTTP method ('get' or 'post').
    - `action`: A reference to the function passed to the parent form's action prop.
- Syntax:
    -   ```jsx
        import { useFormStatus } from 'react-dom';
        const { pending, data, method, action } = useFormStatus();
        ```
- The useFormStatus hook must be called from a child component rendered inside the `<form>` element.
- If you call it inside the exact same component that defines the `<form>` tag, it will not work, and `pending` will always return false.
- It only detects the status of a form that surrounds it hierarchically.
- Example:
    -   ```jsx
        // In UseFormStatusParentComponent.jsx
        import UseFormStatusChild from "./UseFormStatusChildComponent";

        function UseFormStatusParent() {
            const submitForm = async () => {
                await new Promise( res => setTimeout(res, 3000));      
                console.log("form submitted.");  
            }
            
            return (
                <div>
                    <form action={ submitForm } method="post">
                        <UseFormStatusChild />
                    </form>
                </div>
            );
        }

        export default UseFormStatusParent;
        ```
    -   ```jsx
        // In UseFormStatusChildComponent.jsx
        import { Button } from "react-bootstrap";
        import { useFormStatus } from "react-dom";

        function UseFormStatusChild() {
            const { pending, data, method, action } = useFormStatus();
            console.log("Is pending = ", pending);
            console.log("data = ", data);
            console.log("method = ", method);
            console.log("action = ", action);
            return (
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="username">Username:</label>
                                </td>
                                <td>
                                    <input type="text" id="username" name="username" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password">Password:</label>
                                </td>
                                <td>
                                    <input type="text" id="password" name="password" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <Button type="submit" variant="primary">{ pending ? "Submitting..." : "Submit" }</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default UseFormStatusChild;
        ```


## 36) useTransition Hook in React JS
- The `useTransition` hook is a React Hook that lets you update the state without blocking the user interface.
- It splits your state updates into two categories: 
    - `Urgent updates` (like typing in an input) which render immediately.
        - Example:
            -   ```jsx
                const [query, setQuery] = useState('');
                // 1. Urgent Update: Update input field text instantly
                setQuery(e.target.value);
                ```
    - `Transition updates` (like filtering a massive list) which can be interrupted and delayed in the background.
        - Example:
            -   ```jsx
                const [isPending, startTransition] = useTransition();
                // 2. Non-Urgent Update: Lower priority computation handled in background
                startTransition(() => {
                    const hugeFilteredList = generateLargeList(e.target.value);
                    setList(hugeFilteredList);
                });
                ```
- Syntax: `const [isPending, startTransition] = useTransition();`
    - `isPending`: A boolean value that returns true while the background transition is actively rendering.
    - `startTransition`: A function that wraps your state update to demote its rendering priority.
- Example:
    -   ```jsx
        // In UseTransitionComponent.jsx
        import { useTransition } from "react";
        import { Button } from "react-bootstrap";

        function UseTransition() {

            const [isPending, startTransition] = useTransition();

            const handleSubmit = () => {
                startTransition(async () => {
                    await new Promise(res => setTimeout(res, 3000));
                });
            }

            return (
                <div>
                    <Button variant="primary" onClick={ handleSubmit } disabled={isPending}>
                        { isPending ? "Submitting..." : "Submit" }
                    </Button>
                </div>
            );
        }

        export default UseTransition;
        ```


## 37) Keep Your Components Pure in React JS
- Keeping your components pure means ensuring they always return the same JSX given the same inputs (props, state, and context) and perform no side effects during rendering.
- React relies heavily on this principle to optimize rendering, handle updates predictably, and keep your application fast.
- The Rules of Purity:
    - To write pure components, you must stick to these core constraints:
        - `Same inputs, same output`: A component must strictly use its props, state, and context to compute the JSX it returns.
        - `No render-phase mutations`: Never modify any variable or object that existed before the component started rendering.
        - `Mind your business`: A component should calculate its JSX independently without trying to coordinate with or modify other components during rendering.
- Why Purity Matters in React:
    - `Strict Mode Verification`: 
        - React uses StrictMode during development to intentionally run our component functions twice.
        - If our component is impure, the two passes will yield different outputs, exposing hidden bugs immediately.
    - `Performance Enhancements`: 
        - Pure components allow React to skip unnecessary re-renders.
        - We can wrap functional components in React.memo to easily cache and reuse the previous render output when props remain unchanged.
    - `Safer Concurrent Rendering`:
        - Modern React features can pause, abort, or restart component rendering based on priority.
        - If a component is pure, stopping it mid-render causes no side-effect damage.
- Example of Impure Component:
    - This component modifies an external variable during the render phase.
    - If this component renders multiple times, the output changes constantly
    -   ```jsx
        let guestCount = 0; // External variable

        function App() {
            return (
                <div>
                    <Cup />
                </div>
            );
        }

        const Cup = () => {
            // Bad: Modifying a pre-existing variable during render!
            guestCount = guestCount + 1;
            return (
                <div>
                    <h2>Tea cup for guest #{guestCount}</h2>
                </div>
            );
        }

        export default App;


        /**
         * OUTPUT:
         * 
         * Tea cup for guest #2
         */
        ```
- Example of Pure Component:
    - This component reads directly from its inputs (props) and does not touch the outside world during calculation
    -   ```jsx
        function App() {
            return (
                <div>
                    <Cup guestCount={1} />
                </div>
            );
        }

        const Cup = ({ guestCount }) => {
            // Good: Purely calculating output based on the input prop
            return (
                <div>
                    <h2>Tea cup for guest #{guestCount}</h2>
                </div>
            );
        }

        export default App;


        /**
         * OUTPUT:
         * 
         * Tea cup for guest #1
         */
        ```


## 38) Derived State in React JS
- `Derived State` is any value that can be calculated from existing props or state, rather than needing to be stored in its own `useState`.
- The core React principle is that if we can calculate it during render, do not store it in state.
- If we us `useState` alongside `useEffect` to sync a dependent value whenever the base data changes then it will triggers two renders every time the inputs change: one for the initial state change, and a second one when the useEffect updates the secondary state.
    - The Wrong Way / Anti-Pattern Example:
        -   ```jsx
            import { useState, useEffect } from 'react';

            function NameForm() {
                const [firstName, setFirstName] = useState('');
                const [lastName, setLastName] = useState('');
                // Redundant state
                const [fullName, setFullName] = useState(''); 

                useEffect(() => {
                    setFullName(`${firstName} ${lastName}`);
                }, [firstName, lastName]); // Triggers an unnecessary second render
            }
            ```
- So to avoid it we should use the existing props or state variable, because React re-runs the component function on every render, the variable is calculated instantly using the latest data with zero extra overhead.
    - The Right Way / Derived State Example:
        -   ```jsx
            import { useState } from 'react';

            function NameForm() {
                const [firstName, setFirstName] = useState('');
                const [lastName, setLastName] = useState('');

                // Derived state: Calculated automatically on every render
                const fullName = `${firstName} ${lastName}`; 
            }
            ```
- Example:
    -   ```jsx
        // In DerivedStateComponent.jsx
        import { useState } from "react";
        import { Button } from "react-bootstrap";

        function DerivedState() {
            const [user, setUser] = useState('');
            const [users, setUsers] = useState([]);

            const saveUserHandler = () => {
                setUsers([...users, user]);
            }

            const total_users = users.length;
            const last_user_added = users[users.length-1];
            const unique_users_list = [...new Set(users)];
            const total_unique_users = unique_users_list.length;

            return (
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <input className="form-control" type="text" onChange={ (event) => setUser(event.target.value) } />
                                </td>
                                <td>
                                    <Button variant="primary" onClick={ saveUserHandler }>Add User</Button>
                                </td>
                                <td colSpan={2}>
                                    :)
                                </td>
                            </tr>
                            <tr>
                                <td>Total Users: <b>{ total_users }</b></td>
                                <td>Last User Added: <b>{ last_user_added }</b></td>
                                <td>Unique Users List: <b>{ unique_users_list.join(", ") }</b></td>
                                <td>Total Unique Users: <b>{ total_unique_users }</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default DerivedState;
        ```


## 39) Lifting State Up in React JS
- `Lifting state up` in React is the process of moving shared data from child components to their closest common parent.
- We use this pattern when two or more sibling components need to stay synchronized or reflect the same changing data.
- By keeping state in the parent, we create a single source of truth and ensure data consistency across our UI.
- According to the official React Documentation, lifting state up follows a standard workflow:
    - `Identify the shared state`: Figure out which components need access to the same shifting data.
    - `Move state to the parent`: Remove the useState hook from the individual children and declare it in their nearest common ancestor.
    - `Pass data down`: Pass the state variable down from the parent to the child components as read-only properties (props).
    - `Pass handler callbacks down`: Pass setter functions or customized event handlers down to children so they can request state modifications.
- Example:
    -   ```jsx
        // In LiftingStateParentComponent.jsx
        import { useState } from "react";
        import { Button } from "react-bootstrap";
        import LiftingStateChild1 from "./LiftingStateChild1Component";
        import LiftingStateChild2 from "./LiftingStateChild2Component";

        function LiftingStateParent() {
            const [user, setUser] = useState('');
            const [users, setUsers] = useState([]);

            const saveUserHandler = () => {
                setUsers([...users, user]);
            }

            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <LiftingStateChild1 setUser={ setUser } saveUserHandler={ saveUserHandler } />
                        </div>
                        <div className="col-md-6">
                            <LiftingStateChild2 users={ users } />
                        </div>
                    </div>
                </div>
            );
        }

        export default LiftingStateParent;
        ```
    -   ```jsx
        // In LiftingStateChild1Component.jsx
        import { Button } from "react-bootstrap";

        function LiftingStateChild1({ setUser, saveUserHandler }) {
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan={2}>Add User Form (Child Component 1)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input className="form-control" type="text" onChange={ (event) => setUser(event.target.value) } />
                                </td>
                                <td>
                                    <Button variant="primary" onClick={ saveUserHandler }>Add User</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default LiftingStateChild1;
        ```
    -   ```jsx
        // In LiftingStateChild2Component.jsx
        function LiftingStateChild2({ users }) {
            const unique_users_list = [...new Set(users)];
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Unique User List  (Child Component 2)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    { unique_users_list.join(", ") }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default LiftingStateChild2;
        ```


## 40) Updating Objects in State
- To update an object in React state, you must treat the existing object as immutable (read-only) and replace it entirely with a new object copy.
- Direct modifications (like user.name = 'Alex') fail to trigger a re-render because React tracks object reference changes, not internal property updates.
- The most common way to change an object property is using the JavaScript `spread operator (...)`. It copies all properties from the original object into a new one, allowing you to explicitly override specific fields.
    -   ```jsx
        import { useState } from 'react';

        function UserProfile() {
            const [user, setUser] = useState({ name: 'Jane', age: 25, role: 'User' });

            function updateAge() {
                // Copies the user object but overrides the age property
                setUser({
                    ...user,
                    age: 26
                });
            }
        }
        ```
- For a deeply nested objects, we can not use spread operator as the spread operator only creates a shallow copy (one level deep), so for nested objects we need to explicitly copy every layout level down to the target property.
    -   ```jsx
        const [employee, setEmployee] = useState({
            name: 'Alex',
            company: {
                title: 'Developer',
                department: 'Engineering'
            }
        });

        function changeDepartment() {
            setEmployee(prevEmployee => ({
                ...prevEmployee,                    // 1. Copy top-level properties
                company: {                          // 2. Open the nested object
                    ...prevEmployee.company,        // 3. Copy nested properties
                    department: 'Product Management'// 4. Override target property
                }
            }));
        }
        ```
- Example:
    -   ```jsx
        // In UpdateObjectComponent.jsx
        import { useRef, useState } from "react";
        import { Button } from "react-bootstrap";

        function UpdateObject() {
            const nameRef = useRef("");
            const titleRef = useRef("");
            const deptRef = useRef("");

            const [employee, setEmployee] = useState({
                name: 'Alex',
                company: {
                    title: 'Developer',
                    department: 'Engineering'
                }
            });

            const saveEmployeeNameHandler = () => {
                const name = nameRef.current.value;
                employee.name = name;

                setEmployee({ ...employee });
            }
            const saveEmployeeCompanyHandler = () => {
                const title = titleRef.current.value;
                const department = deptRef.current.value;

                employee.company.title = title;
                employee.company.department = department;
                console.log(employee);
                
                setEmployee({ 
                    ...employee,
                    company: {
                        ...employee.company
                    }
                });
            }

            return (
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Update Employee Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Name: <input className="form-control" type="text" ref={nameRef} />
                                    </td>
                                    <td>
                                        <Button variant="primary" onClick={ saveEmployeeNameHandler }>Update</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Title: <input className="form-control" type="text" ref={titleRef} />
                                        <br></br>
                                        Dept: <input className="form-control" type="text" ref={deptRef} />
                                    </td>
                                    <td>
                                        <Button variant="primary" onClick={ saveEmployeeCompanyHandler }>Update</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>Name: { employee.name }</li>
                            <li>Title: { employee.company.title }</li>
                            <li>Department: { employee.company.department }</li>
                        </ul>
                    </div>
                </div>
            );
        }

        export default UpdateObject;
        ```


## 41) Updating Array in State
- To update an array in React state, we must treat the array as `immutable (read-only)`.
- Do not use methods that mutate the original array like push(), pop(), or splice().
- Instead, we must pass a completely new array to the state setter function using non-mutating operations.
    - Example Non-Mutating Methods:
        - **Adding Items** : `Spread syntax [...arr, item]`
        - **Removing Items** : `filter()`
        - **Replacing / Editing Items** : `map()`
        - **Sorting / Reversing** : Copy first: `[...arr].sort()`
- Example:
    -   ```jsx
        // In UpdateArrayComponent.jsx
        import { useState } from "react";

        function UpdateArray() {
            const [userNames, setUserNames] = useState(["Test 1", "Test 2", "Test 3"]);
            const [userDetails, setUserDetails] = useState([
                {name: "Test 100", age: "1"},
                {name: "Test 200", age: "2"},
                {name: "Test 300", age: "3"},
            ]);

            const updateLastUserName = (val) => {
                const updatedUserName = [...userNames];
                updatedUserName[updatedUserName.length - 1] = val;

                setUserNames(updatedUserName);
            }

            const updateLastUserAge = (val) => {
                const updatedLastUserAge = [...userDetails];
                updatedLastUserAge[updatedLastUserAge.length - 1].age = val;

                setUserDetails(updatedLastUserAge);
            }

            return (
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Update Last User's Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>
                                        <ul>
                                            {
                                                userNames.map((userName, index) => (
                                                    <li key={index}>{ userName }</li>
                                                ))
                                            }
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Enter last user's name:</td>
                                    <td>
                                        <input type="text" className="form-control" onChange={ (event) => updateLastUserName(event.target.value) } />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Update Last User's Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>
                                        <ul>
                                            {
                                                userDetails.map((userDetail, index) => (
                                                    <li key={index}>{ userDetail.name } : Age - { userDetail.age } Yr</li>
                                                ))
                                            }
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Enter last user's age:</td>
                                    <td>
                                        <input type="text" className="form-control" onChange={ (event) => updateLastUserAge(event.target.value) } />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        export default UpdateArray;
        ```


## 42) useActionState Hook in React JS
- `useActionState` is a built-in `React 19` Hook that updates component state based on the result of a form action.
- It dramatically reduces boilerplate code by automatically tracking loading states, managing errors, and linking user interactions directly to state updates.
- It was previously named useFormState in experimental React Canary versions.
- Syntax:
    - `const [state, formAction, isPending] = useActionState(actionFn, initialState, permalink?);`
- Parameters
    - `actionFn`: The function triggered when the form submits. It receives the previous state and the form data as arguments.
    - `initialState`: The starting value for the state before any user actions are triggered.
    - `permalink` (Optional): A URL string containing the unique page URL for apps utilizing Server Components.
- Returns
    - `state`: The current state, which initially matches initialState and changes based on the return value of actionFn.
    - `formAction`: A dispatch function you pass directly to the `<form>` element's action attribute.
    - `isPending`: A boolean flag that stays true while the asynchronous action processes.
- Example:
    -   ```jsx
        // In UseActionStateHookComponent.jsx
        import { useActionState } from "react";
        import { Alert, Button } from "react-bootstrap";

        function UseActionStateHook() {
            let response = {success: false, error: false, message: ""};

            // Define the action function
            const submitFormFn = async (previousState, formData) => {
                const useremail = formData.get("useremail");

                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 3000));

                if (!useremail || !useremail.includes("@")) {
                    response.error = true;
                    response.message = "Invalid email address.";
                } else {
                    response.success = true;
                    response.message = "Successfully registered!";
                }
                return response;
            }

            // Tie the action function to state management
            const [state, submitFormAction, isPending] = useActionState(submitFormFn, response);

            return (
                <div>
                    {
                        state.message && (
                            <Alert variant={(state.success === true) ? "success" : "danger" }>
                                { state.message }
                            </Alert>
                        )
                    }
                    <form action={submitFormAction} className="mt-2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan={3}>User Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Enter User Email:</td>
                                    <td>
                                        <input type="text" className="form-control" name="useremail" id="useremail" />
                                    </td>
                                    <td>
                                        <Button type="submit" variant="primary" disabled={isPending}>
                                            {isPending ? "Submitting..." : "Submit"}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            );
        }

        export default UseActionStateHook;
        ```


## 43) useId Hook in React JS
- The `useId` hook in React generates unique, stable ID strings that are primarily used for linking HTML form elements and accessibility attributes.
- Introduced in React 18, it guarantees that IDs match exactly between the server-rendered HTML and the client during hydration, avoiding common hydration mismatch errors.
- Syntax:
    -   ```jsx
        import { useId } from 'react';
        const id = useId();
        ```
- Common Use Cases:
    - Linking Labels to Form Inputs
        -   ```jsx
            <label htmlFor={inputId}>{label}</label>
            <input id={inputId} type="text" />
            ```
    - Multiple Fields in One Component
        -   ```jsx
            <label htmlFor={id + '-username'}>Username</label>
            <input id={id + '-username'} type="text" />
            ```
    - Connecting ARIA Accessibility Attributes
        -   ```jsx
            <input type="password" aria-describedby={hintId} />
            <p id={hintId}>Password must be at least 8 characters long.</p>
            ```
- For the `useId` hook, we need to take care of below points:
    - Never use `useId` to generate the key prop for rendering items in a loop. Keys should always be generated directly from your database or state data.
    - Do not use it to create IDs for your application data or state entities.
    - The IDs generated by React contain a special colon token (e.g., `:r0:`). This token ensures application uniqueness but is not supported by traditional CSS selectors or APIs like `querySelectorAll`.
    - Like all React hooks, we can only call useId at the top level of our component. We cannot place it inside loops or if statements.
- Example:
    -   ```jsx
        // In UseIdHookComponent.jsx
        import { useId, useState } from "react";
        import { Button } from "react-bootstrap";

        function UseIdHook() {
            const id = useId();
            const [name, setName] = useState();

            const handleSubmit = () => {
                alert("Id = " + id + " and Name = " + name);
            }

            return (
                <div>
                    <form onSubmit={handleSubmit} className="mt-2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan={3}>User Form - Id = { id }</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor={id + "name"}>Enter User Name:</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id={id + "name"}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Button type="submit" variant="primary">Submit</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            );
        }

        export default UseIdHook;
        ```


## 44) Fragment in React JS
- A React `Fragment` is a built-in feature that lets you group multiple elements without adding extra, unnecessary nodes to the HTML DOM.
- Because JSX functions must return a single root element, developers historically wrapped adjacent elements in a `<div>`.
- Fragments solve this constraint cleanly by acting as a invisible wrapper that disappears when the browser renders the page.
- We can implement fragments in our React application using two different syntaxes:
    - The Shorthand Syntax (`<>...</>`)
        - This is the most common and cleanest way to write fragments.
        - It requires no imports.
        -   ```jsx
            function UserProfile() {
                return (
                    <>
                        <h1>John Doe</h1>
                        <p>Software Engineer</p>
                    </>
                );
            }
            ```
    - The Explicit Syntax (`<Fragment>`):
        - We need to import `<Fragment>` directly from 'react'.
        - We must use this form if we need to pass a key prop during list loops.
        -   ```jsx
            import { Fragment } from 'react';
            function Menu({ items }) {
                return (
                    <div>
                        {
                            items.map(item => (
                                <Fragment key={item.id}>
                                    <dt>{item.term}</dt>
                                    <dd>{item.description}</dd>
                                </Fragment>
                            ))
                        }
                    </div>
                );
            }
            ```
- Critical Use Cases:
    - `Valid HTML Compliance`:
        - Elements like `<tr>`, `<td>`, or `<option>` require strict parent containment.
        - Wrapping them in a standard `<div>` breaks valid HTML semantics.
    - `CSS Layout Preservation`:
        - Adding wrapper `<div>` tags can break flexbox, CSS grid, or column layouts.
        - Fragments keep our child items as direct layout descendants.
    - `Performance Optimization`:
        - Avoiding useless wrapper DOM nodes leads to lighter memory usage and faster layout processing.
- Important Constraints:
    - We cannot apply attributes like className, style, or id to a Fragment.
    - The key attribute is the only prop supported by the explicit `<Fragment>` component.
- Example:
    -   ```jsx
        // In FragmentComponent.jsx
        import { Fragment } from "react";

        function FragmentComponent() {
            // return (
            //     <MyDiv1 />
            // );
            return (
                <MyDiv2 />
            );
        }

        function MyDiv1() {
            return (
                <>
                    <h3>Hello World!</h3>
                </>
            );
        }

        function MyDiv2() {
            return (
                <Fragment key={"my_key"}>
                    <h3>Hello World Again!</h3>
                </Fragment>
            );
        }

        export default FragmentComponent;
        ```


## 45) Rules for React JS Hooks
- There are two primary Rules of Hooks enforced by React to guarantee that state logic behaves predictably across component renders:
    - Only call Hooks at the top level:
        - We must always call Hooks at the very beginning of your React function, before any early returns or conditional paths.
        - Do not use Hooks inside `if` statements or conditions.
        - Do not use Hooks inside `for`, `while`, or `map` loops.
        - Do not use Hooks inside `nested functions` or `callback functions`.
        - Do not use Hooks inside `try/catch/finally` blocks.
        -   ```jsx
            export default function App() {
                const [user, setUser] = useState(); // the correct way

                if (condition) {
                    const [data, setData] = useState(); // not the correct way
                }

                return (
                    <div>
                        <h1>Hello</h1>
                    </div>
                )
            }
            ```
    - Only call Hooks from React functions:
        - Hooks are specialized tools tied closely to the React component lifecycle. We cannot use them anywhere else.
        - Do call them inside React functional components.
        - Do call them inside your own custom Hooks.
        - Do not call them inside standard, regular JavaScript helper functions.
        - Do not call them inside event handlers like `onClick` or `onSubmit`.
        - Do not call them inside functions passed to `useMemo`, `useReducer`, or `useEffect`.
        - Do not call them inside legacy React class components.
- Additional Conventions & Tooling:
    - `The Naming Convention`:
        - Custom Hooks must start with the lowercase word "use" followed by a capital letter (e.g., useFetch, useAuth).
        - This signals to developers and developer tools that the function contains Hook logic.
    - `Automated Enforcement`:
        - Always configure the official `eslint-plugin-react-hooks` package in our development environment.
        - This tool automatically analyzes our codebase to catch rule violations and outputs syntax warnings before our code is built.


## 46) Context API in React JS 19
- In React 19, the Context API receives a significant modernization that eliminates traditional boilerplate and relaxes old structural rules.
- Context allows us to store data in a shared place and access it directly from any component inside that Context.
- Context is useful when multiple components need access to the same data.
- Without Context, we may need to pass the data through every component like `App → Dashboard → Profile → UserInfo`.
- To use contex, there are mainly three steps:
    - Step 1: Create Context
        -   ```jsx
            const ThemeContext = createContext();
            ```
    - Step 2: Provide Context
        -   ```jsx
            <ThemeContext value={data}>
                <MyComponents />
            </ThemeContext>
            ```
    - Step 3: Use Context
        -   ```jsx
            const data = useContext(ThemeContext);
            ```
- Example:
    -   ```jsx
        // In MyContext.jsx (Create the Context)
        import { createContext } from "react";

        const MyContext = createContext();

        export default MyContext;
        ```
    -   ```jsx
        // In ContextApiParentComponent.jsx (Provide Data Using Context)
        import { useState } from "react";
        import ContextApiChild from "./ContextApiChildComponent";
        import MyContext from "./MyContext";

        function ContextApiParent() {
            const [subject, setSubject] = useState();
            const subjectLabel = "Selected Subject: ";
            return (
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Parent Component</td>
                                <td>Child Component</td>
                            </tr>
                            <tr>
                                <td>
                                    <select className="form-control" name="subject" id="subject" onChange={ (event) => setSubject(event.target.value) }>
                                        <option value="">--Please Select Subject--</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Sanskrit">Sanskrit</option>
                                        <option value="Gujarati">Gujarati</option>
                                        <option value="Maths">Maths</option>
                                    </select>
                                </td>
                                <td>
                                    <MyContext value={{ subject, subjectLabel }}>
                                        <ContextApiChild />
                                    </MyContext>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default ContextApiParent;
        ```
    -   ```jsx
        // In ContextApiChildComponent.jsx (Use the Context)
        import { useContext } from "react";
        import MyContext from "./MyContext";

        function ContextApiChild() {
            const { subject, subjectLabel } = useContext(MyContext);
            return (
                <div>
                    <b>{ subjectLabel }</b>: { subject }
                </div>
            );
        }

        export default ContextApiChild;
        ```


## 47) Custom Hooks in React JS
- `Custom Hooks` in React are regular JavaScript functions that extract and reuse stateful logic across multiple components.
- They act as a bridge to share internal React hook logic—like state management or lifecycle methods—without duplicating our code or creating complex component structures.
- To ensure React compiles and handles our hooks correctly, we must follow two strict design constraints:
    - `The "use" Naming Prefix`:
        - The function name must always begin with the lowercase word `use`, followed by a capital letter (e.g., useFetch, useAuth).
        - React relies on this naming convention to automatically check for rule violations.
    - `Top-Level Invocation Only`:
        - Custom hooks can only call other React hooks at the absolute top-level of their scope.
        - We cannot call them inside conditional loops, nested blocks, or event functions.
- Example:
    -   ```jsx
        // In hooks/useToggle.jsx
        import { useState } from "react";

        function useToggle(initialValue = false) {
            const [value, setValue] = useState(initialValue);

            function toggleValue(newVal) {
                if (typeof newVal !== "boolean") {
                    // If we are not passing the value when we use this custom hook then toggle the initial value
                    setValue(!value);
                } else {
                    // If we are passing the value when we use this custom hook then set passed value
                    setValue(newVal);
                }
            }

            return [value, toggleValue];
        }

        export default useToggle;
        ```
    -   ```jsx
        // In CustomHookComponent.jsx
        import { Button } from "react-bootstrap";
        import useToggle from "./hooks/useToggle";

        function CustomHook() {
            const [toggleVal, toggleDivFn] = useToggle(true);
            return (
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td colSpan={3} align="center">
                                    {
                                        toggleVal && <h3>Hello Custom Hook!</h3>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button type="button" onClick={ toggleDivFn } variant={ toggleVal === true ? "danger" : "success" }>Toggle Div</Button>
                                </td>
                                <td>
                                    <Button type="button" onClick={ () => toggleDivFn(true) }>Show Div</Button>
                                </td>
                                <td>
                                    <Button type="button" onClick={ () => toggleDivFn(false) }>Hide Div</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        export default CustomHook;
        ```


## 48) React Router
- `React Router` is the standard library for handling client-side routing in React single-page applications (SPAs).
- It intercepts browser requests to seamlessly load specific application components without forcing a full page refresh.
- For this we need to install `react-router` library package.
    -   ```cmd
        npm install react-router
        ```
- It contain mainly:
    - `BrowserRouter` → This component enables client-side routing using the browser's history API.
    - `Routes` → Contains all routes and responsible for rendering the appropriate component based on the current URL.
    - `Route` → Defines a URL and its component
    - `Link` → Used to navigate between pages
- Example:
    -   ```jsx
        // In ReactRouterComponent.jsx
        import { BrowserRouter, Routes, Route, Link } from "react-router";

        function Home() {
            return <h1>Home Page</h1>;
        }

        function About() {
            return <h1>About Page</h1>;
        }

        function ReactRouter() {
            return (
                <BrowserRouter>
                    <nav>
                        <Link to="/">Home</Link>
                        {" | "}
                        <Link to="/about">About</Link>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            );
        }

        export default ReactRouter;
        ```


## 49) 404 Page and Redirection in React Route
- We can set up a 404 page and handle redirections in React Router by using a catch-all asterisk path `*` and `<Navigate>` component.
- To handle the page not found,
    - Place a route with `path="*"` at the very bottom of your `<Routes>` list.
    - It matches any URL that fails to trigger previous route definitions.
    - Example:
        -   ```jsx
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* Catch-all route for 404 Not Found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            ```
- To handle the redirect,
    - To send users from an old URL to a new one:
        - `<Route  path='/old-path' element={<Navigate to="/new-path" />} />`
    - To send users from unknown route to a specific route:
        - `<Route  path='/*' element={<Navigate to="/home" />} />`
- Example:
    -   ```jsx
        // In RedirectionAnd404RouteComponent.jsx
        import { Link, Navigate, Route, Routes } from "react-router";

        function RedirectionAnd404Route() {
            return (
                <div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        { " | " }
                        <Link to={"/about"}>About</Link>
                        { " | " }
                        <Link to={"/new-path"}>New Page</Link>
                        { " | " }
                        <Link to={"/unknown"}>Unknown Page</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={ <HomePageComponent /> }></Route>
                        <Route path="/about" element={ <AboutPageComponent /> }></Route>
                        <Route path="/new-path" element={ <NewPageComponent /> }></Route>
                        <Route path="/old-path" element={ <Navigate to="/new-path" /> }></Route>
                        <Route path="/*" element={ <PageNotFoundComponent /> }></Route>
                    </Routes>
                </div>
            );
        }

        function HomePageComponent() {
            return (
                <div>
                    Home Page
                </div>
            );
        }

        function AboutPageComponent() {
            return (
                <div>
                    About Page
                </div>
            );
        }

        function NewPageComponent() {
            return (
                <div>
                    New Page
                </div>
            );
        }

        function PageNotFoundComponent() {
            return (
                <div>
                    Page Not Found Page
                </div>
            );
        }

        export default RedirectionAnd404Route;
        ```


## 50) Nested Routing in React Router
- `Nested Routing` allows us to build multi-level layouts where child routes render inside a parent component.
- Key Core Concepts:
    - `Parent Route`: Defines the layout wrapper and the shared path prefix.
    - `<Outlet />`: A placeholder component imported from react-router. It must be placed inside the parent component to designate exactly where child components should render.
    - `Index Route`: A special child route without a path that renders by default when the user hits exactly the parent's URL.
- Exampple:
    -   ```jsx
        // In NestedRoutingComponent.jsx
        import { Link, Outlet, Route, Routes } from "react-router";

        function NestedRouting() {
            return (
                <div>
                    <ul>
                        <li>
                            <Link to={"/main-page"}>Main Page</Link>
                            <ul>
                                <li>
                                    <Link to="/main-page/sub-page-1">Sub Page 1</Link>
                                </li>
                                <li>
                                    <Link to="/main-page/sub-page-2">Sub Page 2</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <Routes>
                        {/* Parent Route */}
                        <Route path="main-page" element={ <PageLayoutComponent /> }>
                            {/* Index Route renders at "/main-page" */}
                            <Route index element={ <MainPageComponent /> } ></Route>
                            {/* Nested Route */}
                            <Route path="sub-page-1" element={ <SubPage1Component /> }></Route>
                            <Route path="sub-page-2" element={ <SubPage2Component /> }></Route>
                        </Route>
                        <Route path="*" element={ null }></Route>
                    </Routes>
                </div>
            );
        }

        function PageLayoutComponent() {
            return (
                <div>
                    Parent Layout
                    {/* The child routes will inject their components right here */}
                    <Outlet />
                </div>
            );
        }

        function MainPageComponent() {
            return (
                <div>
                    Main Page
                </div>
            );
        }

        function SubPage1Component() {
            return (
                <div>
                    Sub Page 1
                </div>
            );
        }

        function SubPage2Component() {
            return (
                <div>
                Sub Page 2
                </div>
            );
        }

        export default NestedRouting;
        ```


## 51) Layout and Index Routes in React Router
- Layout Routes and Index Routes work together to create efficient, nested user interfaces.
- `Layout Routes`:
    - A Layout Route is a parent route that does not add any segments to the URL.
    - Its entire purpose is to provide a shared, consistent visual shell (like headers, navigation bars, or sidebars) around a group of child routes.
    - To make a layout route, create a parent component that utilizes the `<Outlet />` component.
    - The `<Outlet />` acts as a placeholder or portal; whenever a child route is matched, its content is automatically injected there.
    - Example:
        -   ```jsx
            import { Outlet, Link } from "react-router";

            // This serves as the layout layout shell
            export function DashboardLayout() {
                return (
                    <div className="dashboard-container">
                        <nav>
                            <Link to="/dashboard">Dashboard Home</Link>
                            <Link to="/dashboard/settings">Settings</Link>
                        </nav>
                        <main>
                            {/* Child routes inject their elements right here */}
                            <Outlet /> 
                        </main>
                    </div>
                );
            }
            ```
- `Index Routes`:
    - An Index Route is the default child route that renders inside a parent's `<Outlet />` when the user visits the exact URL of the parent.
    - Think of it as the "homepage" or fallback view for a specific URL prefix.
    - Because an index route shares the exact same URL path as its parent, it cannot have a path property and it cannot have child routes of its own.
    - Instead, define it using the `index: true` flag or an index prop.
- Implementation Methods:
    - Object-Based Data Router (Recommended):
        - This approach passes an array of configuration objects to createBrowserRouter, which is highly optimized for React Router's data APIs.
        - Example:
            -   ```jsx
                import { createBrowserRouter, RouterProvider } from "react-router";
                import { DashboardLayout } from "./DashboardLayout";
                import { DashboardHome } from "./DashboardHome";
                import { DashboardSettings } from "./DashboardSettings";

                const router = createBrowserRouter([
                    {
                        path: "/dashboard",
                        Component: DashboardLayout, // The Layout Route
                        children: [
                        {
                            index: true, // The Index Route (renders at "/dashboard")
                            Component: DashboardHome,
                        },
                        {
                            path: "settings", // Nested Child Route (renders at "/dashboard/settings")
                            Component: DashboardSettings,
                        },
                        ],
                    },
                ]);

                export function App() {
                    return <RouterProvider router={router} />;
                }
                ```
    - Traditional Declarative JSX Router:
        - It is component-based routing rules via JSX tags, we can achieve the same behavior using `<Routes>` and `<Route>`.
        - Example:
            -   ```jsx
                import { BrowserRouter, Routes, Route } from "react-router";
                import { DashboardLayout } from "./DashboardLayout";
                import { DashboardHome } from "./DashboardHome";
                import { DashboardSettings } from "./DashboardSettings";

                export function App() {
                    return (
                        <BrowserRouter>
                            <Routes>
                                {/* The parent component serves as the Layout */}
                                <Route path="dashboard" element={<DashboardLayout />}>
                                    {/* Index prop defines the default child view */}
                                    <Route index element={<DashboardHome />} />
                                    {/* Path prop adds a segment onto the URL path */}
                                    <Route path="settings" element={<DashboardSettings />} />
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    );
                }
                ```


## 52) Route Prefix in React Router
- A `Route Prefix` lets us group routes under a shared URL segment without creating an extra layout component.
- For compenent based routing, we just need to create a parent `<Route>` with the common path and nest child routes inside it.
- Example:
    -   ```jsx
        // In RoutePrefixComponent.jsx
        import { Link, Outlet, Route, Routes } from "react-router";

        function RoutePrefix() {
            return (
                <div>
                    <Link to={"dashboard"} >Go to Dashboard</Link>
                    <Routes>
                        <Route path="dashboard" element={ <DashboardLayout /> }>
                            <Route path="users" element={ <UsersComponent /> } />
                            <Route path="settings" element={ <SettingsComponent /> } />
                        </Route>
                    </Routes>
                </div>
            );
        }

        function DashboardLayout() {
            return (
                <div>
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                            <ul>
                                <li>
                                    <Link to="users">Users</Link>
                                </li>
                                <li>
                                    <Link to="settings">Settings</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            );
        }

        function UsersComponent() {
            return (
                <div>
                    Users Page
                </div>
            );
        }

        function SettingsComponent() {
            return (
                <div>
                    Settings Page
                </div>
            );
        }

        export default RoutePrefix;
        ```


## 53) Dynamic Routes in React Router
- `Dynamic routes` in React Router allow you to handle URLs that contain variable data, such as a user ID or a blog post slug, using a single route definition.
- Instead of hardcoding a separate route for every piece of content, we use placeholders called dynamic segments.
- To mark a path segment as dynamic, prefix it with a colon (`:`) when configuring our routes.
- The string following the colon acts as the `param name`.
- Syntax:
    -   ```jsx
        <Route path="/products/:productId" element={<ProductDetails />} />
        ```
    -   ```jsx
        const router = createBrowserRouter([
            {
                path: "/products/:productId",
                Component: ProductDetails,
            },
        ]);
        ```
- Example:
    -   ```jsx
        // In
        import { Link, Route, Routes, useParams } from "react-router";

        function DynamicRoutes() {
            return (
                <div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        { " | " }
                        <Link to={"/users"}>Users</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={ <HomePageComponent /> }></Route>
                        <Route path="/users" element={ <UsersListPageComponent /> }></Route>
                        <Route path="/users/:id" element={ <UserDetailPageComponent /> }></Route>
                        <Route path="*" element={ null }></Route>
                    </Routes>
                </div>
            );
        }

        function HomePageComponent() {
            return (
                <div>
                    Home Page
                </div>
            );
        }

        function UsersListPageComponent() {
            const usersData = [
                {id: 1, name: "User 1"},
                {id: 2, name: "User 2"},
                {id: 3, name: "User 3"},
            ];
            return (
                <div>
                    Users List Page
                    <br />
                    <ul>
                        {
                            usersData.map((user, index)=>(
                                <li key={index}><Link to={ `/users/${user.id}` }>{ user.name }</Link></li>
                            ))
                        }
                    </ul>
                </div>
            );
        }

        function UserDetailPageComponent() {
            const parameterData = useParams();
            const userId = parameterData.id;
            return (
                <div>
                    <h5>User Detail Page</h5>
                    <br />
                    <h6>The selected user id is { userId }</h6>
                    <br />
                    <Link to={'/users'}>Go Back to Users List Page</Link>
                </div>
            );
        }

        export default DynamicRoutes;
        ```


## 54) Segment and Optional Segment in React Router
- `Segments` are the individual parts of a URL path separated by slashes (`/`), which the router uses to match against defined routes.
- An `Optional Segment` is a URL part configured with a trailing question mark (`?`) that allows a single route to match a URL whether that specific segment is present or not.
- Every time we look at a URL path like `/products/electronics/42`, React Router breaks it down into individual chunks called segments:
    - `products` is the first segment.
    - `electronics` is the second segment.
    - `42` is the third segment.
- In React Router, these segments can be categorized into three main types:
    - `Static Segments`:
        - Exact text matches (e.g., `path="/products"`). It only matches the literal word "products".
    - `Dynamic Segments` (Path Parameters):
        - Placeholders that start with a colon (e.g.,` path="/products/:id"`).
        - The `:id` part can be any value, which we can read inside our component using the `useParams` hook.
    - `Optional Segments`:
        - Segments that might or might not be there.
        - It allows us to make any part of the path definition optional by appending a `?` to the end of it.
        - Syntax: `<Route path="/user/:id/:name?" element={<UserPage />} />`
- Example:
    -   ```jsx
        // In OptionalSegmentComponent.jsx
        import { Link, Route, Routes, useParams } from "react-router";

        function OptionalSegment() {
            return (
                <div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        { " | " }
                        <Link to={"/users"}>Users</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={ <HomePageComponent /> }></Route>
                        <Route path="/users" element={ <UsersListPageComponent /> }></Route>
                        <Route path="/users/:id/:slug?" element={ <UserDetailPageComponent /> }></Route>
                        <Route path="*" element={ null }></Route>
                    </Routes>
                </div>
            );
        }

        function HomePageComponent() {
            return (
                <div>
                    Home Page
                </div>
            );
        }

        function UsersListPageComponent() {
            const usersData = [
                {id: 1, name: "User 1", slug: "user-1"},
                {id: 2, name: "User 2"},
                {id: 3, name: "User 3"},
            ];
            return (
                <div>
                    Users List Page
                    <br />
                    <ul>
                        {
                            usersData.map((user, index)=>(
                                <li key={index}><Link to={ `/users/${user.id}/${user?.slug ?? ""}` }>{ user.name }</Link></li>
                            ))
                        }
                    </ul>
                </div>
            );
        }

        function UserDetailPageComponent() {
            const parameterData = useParams();
            const userId = parameterData.id;
            return (
                <div>
                    <h5>User Detail Page</h5>
                    <br />
                    <h6>The selected user id is { userId }</h6>
                    <br />
                    <Link to={'/users'}>Go Back to Users List Page</Link>
                </div>
            );
        }

        export default OptionalSegment;
        ```


## 55) NavLink and Active Class in React Router
- `<NavLink>` component is specifically designed to handle navigation items that need an `active` state (like navigation bars).
- It automatically detects when its to path matches the current URL route and applies styling states natively.
- By default, whenever a `<NavLink>` is active, React Router automatically appends the active class name to the underlying HTML `<a>` tag.
- If we are using Tailwind CSS or need to conditionally apply custom class names, we must pass a callback function to the `className` prop.
- React Router exposes a `NavLinkRenderProps` object containing boolean states (`isActive`, `isPending`, and `isTransitioning`).
    -   ```jsx
        <NavLink
            to="/profile"
            className={({ isActive }) => isActive ? "font-bold" : "" }
        >
            Profile
        </NavLink>
        ```
- Similarly, if we prefer inline styles instead of CSS classes, the style prop also accepts a function that receives the same `isActive` state.
    -   ```jsx
        <NavLink
            to="/settings"
            style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
                textDecoration: isActive ? "underline" : "none",
            })}
        >
            Settings
        </NavLink>
        ```
- Example:
    -   ```jsx
        // In NavLinkActiveClassComponent.jsx
        import { NavLink, Route, Routes } from "react-router";

        function NavLinkActiveClass() {
            return (
                <div>
                    <nav>
                        <NavLink to={"/"}>Home</NavLink>
                        { " | " }
                        <NavLink
                            to={"/login"}
                            className={({ isActive }) => isActive ? 'custom-active fw-bold' : ''}
                        >
                            Login
                        </NavLink>
                    </nav>
                    <Routes>
                        <Route path="/" element={ <HomePageComponent /> }></Route>
                        <Route path="/login" element={ <LoginPageComponent /> }></Route>
                        <Route path="*" element={ null }></Route>
                    </Routes>
                </div>
            );
        }

        function HomePageComponent() {
            return (
                <div>
                    Home Page
                </div>
            );
        }

        function LoginPageComponent() {
            return (
                <div>
                    Login Page
                </div>
            );
        }

        export default NavLinkActiveClass;
        ```


## 56) Installation and Use of Tailwind CSS in React
- To install `Tailwind CSS v4` in a React.js project built with Vite, follow the streamlined step-by-step guide from the official site i.e. (As of today - https://tailwindcss.com/docs/installation/using-vite). Vite is the modern, industry-standard tool for creating React applications.
- 1) Install `tailwindcss` and `@tailwindcss/vite` via npm:
    - `npm install tailwindcss @tailwindcss/vite`
- 2) Add the `@tailwindcss/vite` plugin to your Vite configuration:
    -   ```jsx
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
            plugins: [
                tailwindcss(),
            ],
        })
        ```
- 3) Add an `@import` to our CSS file that imports Tailwind CSS.
    - `@import "tailwindcss";`
- 4) Run your build process with npm run dev or whatever command is configured in your package.json file.
- 5) Start using Tailwind in your HTML.
    - `<h1 class="text-3xl font-bold underline"> Hello world! </h1>`
- Example:
    -   ```jsx
        // In TailwindCssComponent.jsx
        function TailwindCss() {
            return (
                <div>
                    <h1 class="text-3xl font-bold underline bg-orange-500 border-yellow-500 border-5">
                        Hello Tailwind!
                    </h1>
                </div>
            );
        }

        export default TailwindCss;
        ```


## 57) Setup JSON-Server for demo APIs
- To setup a mock REST API using `json-server`, you can create a fully functional demo backend in under a minute.
- This tool turns a local JSON file into an active server capable of handling GET, POST, PUT, PATCH, and DELETE requests automatically.
- Here is the step-by-step setup guide:
    - Install:
        - Command: `npm install json-server`
        - Ref.: https://www.npmjs.com/package/json-server
    - Create a Demo Database File:
        - Create a file named db.json in your root folder.
        - This file acts as your database. Copy and paste the following sample structure into it:
        -   ```json
            {
                "$schema": "../node_modules/json-server/schema.json",
                "posts": [
                    { "id": "1", "title": "Title 1", "views": 100 },
                    { "id": "2", "title": "Title 2", "views": 200 }
                ],
                "comments": [
                    { "id": "1", "text": "Comment 1 on post 1", "postId": "1" },
                    { "id": "2", "text": "Comment 2 on post 1", "postId": "1" },
                    { "id": "3", "text": "Comment 3 on post 1", "postId": "1" },
                    { "id": "4", "text": "Comment 4 on post 1", "postId": "1" }
                ],
                "profile": {
                    "name": "Ravi Patel",
                    "email": "rjpatel2290@gmail.com",
                    "country": "Bharat"
                }
            }
            ```
    - Start JSON Server:
        - Command: `npx json-server db.json`
    - Access your REST API:
        - `curl http://localhost:3000/posts/1`


## 58) GET API in React JS
- Example:
    -   ```jsx
        // In GetApiComponent.jsx
        import { useEffect, useState } from "react";

        function GetApi() {

            const [postData, setPostData] = useState([]);
            const [isLoading, setIsLoading] = useState(false);

            useEffect(() => {
                setIsLoading(true);
                getPosts(); 
            }, []);

            const getPosts = async () => {
                const api_base_url = "http://localhost:3000";
                let response = await fetch(api_base_url + "/posts");
                response = await response.json();
                setPostData(response);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            }

            return (
                <div>
                    <h5>Posts</h5>
                    {
                        isLoading === false 
                        ?
                        <ul className="list-decimal">
                            {
                                postData.map((post, index) => (
                                    <li key={index}><b>{ post.title }</b> <small><i>(views = { post.views })</i></small></li>
                                ))
                            }
                        </ul>
                        :
                        "Loading..."
                    }
                </div>
            );

        }

        export default GetApi;
        ```


## 59) POST API in React JS
- Example:
    -   ```jsx
        // In PostApiComponent.jsx
        import { useActionState } from "react";
        import { Alert, Button } from "react-bootstrap";

        function PostApi() {
            let initialResponse = {success: false, error: false, message: ""};

            // Define the action function
            const addPost = async (previousState, formData) => {
                let response = {success: false, error: false, message: ""};

                if (!formData.get("title") || formData.get("title") === "") {
                    response.error = true;
                    response.message = "Invalid data. Please enter valid data";
                    return response;
                }

                const api_base_url = "http://localhost:3000";
                const dataObject = Object.fromEntries(formData);
                
                try {
                    const apiResponse = await fetch(api_base_url + "/posts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(dataObject)
                    });
                    
                    if (!apiResponse.ok) {
                        throw new Error(
                            `Failed to add post. Status: ${apiResponse.status}`
                        );
                    }

                    response.success = true;
                    response.message = "Post has been added successfully!";
                } catch (error) {
                    response.error = true;
                    response.message = "Error adding post: " + error.message;
                }
                return response;
            }

            // Tie the action function to state management
            const [state, addPostAction, isPending] = useActionState(addPost, initialResponse);

            return (
                <div>
                    {
                        state.message && (
                            <Alert variant={(state.success === true) ? "success" : "danger" }>
                                { state.message }
                            </Alert>
                        )
                    }
                    <form action={addPostAction} className="mt-2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan={3}>Add Post</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Title:</td>
                                    <td>
                                        <input type="text" className="form-control" name="title" id="title" />
                                    </td>
                                    <td>
                                        <Button type="submit" variant="primary" disabled={isPending}>
                                            {isPending ? "Submitting..." : "Submit"}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            );
        }

        export default PostApi;
        ```


## 60) DELETE API in React JS
- Example:
    -   ```jsx
        // In DeleteApiComponent.jsx
        import { useEffect, useState } from "react";

        function DeleteApi() {
            const api_base_url = "http://localhost:3000";
            
            const [postData, setPostData] = useState([]);
            const [isLoading, setIsLoading] = useState(false);

            useEffect(() => {
                setIsLoading(true);
                getPosts(); 
            }, []);

            const getPosts = async () => {
                let response = await fetch(api_base_url + "/posts");
                response = await response.json();
                setPostData(response);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            }

            const deletePost = async (id) => {
                let response = fetch(api_base_url + "/posts/" + id, {
                    method: "DELETE"
                });
                response = await response.json();
                if (response) {
                    alert("Post deleted successfully.");
                } else {
                    alert("Something went wrong.");
                }
            }

            return (
                <div>
                    <h5>Posts</h5>
                    {
                        isLoading === false 
                        ?
                        <ul className="list-decimal">
                            {
                                postData.map((post, index) => (
                                    <li key={index}>
                                        <b>{ post.title }</b> <small><i>(views = { post.views })</i></small>&nbsp;
                                        - (<button className="bg-red-500 rounded-1" onClick={ () => deletePost(post.id) }>Delete</button>)
                                    </li>
                                ))
                            }
                        </ul>
                        :
                        "Loading..."
                    }
                </div>
            );
        }

        export default DeleteApi;
        ```