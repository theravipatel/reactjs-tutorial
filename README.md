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
    - Because React treats lowercase tags like HTML elements (e.g., <div>, <h1>), and uppercase tags as custom React components.
- Return Must Have a Single Parent Tag means All JSX returned by a component must be wrapped inside a single parent element like a `<div>` or a fragment `<> </>`.
- ReactJS is a library and not a framework so the main difference between library and framwork is a below:
    - **Library**: You control the flow (e.g., React).
    - **Framework**: The framework controls the flow; you just follow its structure (e.g., Angular).