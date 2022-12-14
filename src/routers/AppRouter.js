import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import AboutPage from '../components/AboutPage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = ()=>(
<BrowserRouter>
    <div>
        <Header />
            <Routes>
            <Route path='/' element={<DashboardPage />} exact={true}/>
            <Route path='/about' element={AboutPage()} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contact' element={ContactPage()} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path= '*' element={NotFoundPage()} />
        </Routes>
    </div>
</BrowserRouter>
);

export default AppRouter;