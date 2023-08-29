import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from '../users';
import Posts from '../posts';
import Products from '../products';

const AppRouter = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Users/>}/>
                <Route path='/posts' element={<Posts/>}/>
                <Route path='/products' element={<Products/>}/>
            </Routes>
        </Router>
        </>
    )
}
export default AppRouter;