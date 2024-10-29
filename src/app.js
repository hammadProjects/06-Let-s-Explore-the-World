import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header"
import Body from "./Components/Body"
import About from "./Components/About"

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            <RouterProvider router={appRoute} />
        </>
    )
};

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <Body />
    },
    {
        path: "/about",
        element: <About />
    }
]);

ReactDOM.createRoot(document.querySelector("#app")).render(<App />)