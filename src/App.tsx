import './App.css'
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router.tsx";
import LeftComponents from "./components/menu/LeftComponents.tsx";
import RightComponents from "./components/menu/RightComponents.tsx";

function App() {

    return (
        <BrowserRouter>
            <div className='flex justify-between'>
                <LeftComponents/>
                <Router/>
                <RightComponents/>
            </div>
        </BrowserRouter>
    )
}

export default App
