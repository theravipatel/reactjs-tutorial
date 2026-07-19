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
    - The <script> tag loads main.jsx.
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