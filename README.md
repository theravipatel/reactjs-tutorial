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