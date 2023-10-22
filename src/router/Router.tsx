import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./path.route.ts";


const Router = () => {
    return (
        <Routes>
            {
                publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />}/>
                )
            }
            <Route />
        </Routes>
    );
};

export default Router;