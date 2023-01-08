import {Route, Routes} from "react-router-dom";
import {Login} from "./Login/Login";
import {Home} from "./Home/Home";
import {Register} from "./Login/Register";
import {Introduction} from "./Introduction";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<Introduction/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}