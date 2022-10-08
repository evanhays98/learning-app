import {Route, Routes} from "react-router-dom";
import {Login} from "./Login/Login";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={null} />
            <Route path='/login' element={<Login />}/>
        </Routes>
    )
}