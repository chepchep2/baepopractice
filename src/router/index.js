import { 
    Route, 
    createBrowserRouter, 
    createRoutesFromElements
} from "react-router-dom";
import { HomePage } from "../pages";
import {
    LoginPage,
    RegisterPage,
    SocialPage,
    SocialRegisterPage,
} from "../pages/Auth";

const route = (
    <Route path="/">
        <Route index element={<HomePage/>}/>
        <Route path="auth">
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
        </Route>
        <Route path="social">
            <Route index element={<SocialPage/>} />
            <Route path="register" element={<SocialRegisterPage/>} />
        </Route>
    </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(route));

export default rootRouter;