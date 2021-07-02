import React from 'react'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import Login_register_page from './Login_register_page/Login_register_page'
import Breadcrum_page from './Breadcrum_page/Breadcrum_page';

export default function Index_page_login() {
    return (
        <>
            <Header />
            {/* bread crum */}
            <Breadcrum_page />
            {/* login register page */}
            <Login_register_page />
            {/* footer */}
            <Footer />
        </>
    )
}
