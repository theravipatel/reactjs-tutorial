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