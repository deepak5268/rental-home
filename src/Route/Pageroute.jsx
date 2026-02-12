import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

function Pageroute(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </>
    )
}
export default Pageroute;