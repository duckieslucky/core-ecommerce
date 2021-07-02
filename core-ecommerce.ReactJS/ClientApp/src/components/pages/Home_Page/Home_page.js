import React from 'react'
import Header from '../../Header/Header';
import Cart from '../../Cart/Cart';
import Slide from '../../Slide/Slide';
import Banner_1 from '../../Banner/Banner_1';
import Banner_2 from '../../Banner/Banner_2';
import Banner_3 from '../../Banner/Banner_3';
import Product from '../../Product/Product';
import Service_area from '../../Service_area/Service_area';
import Product_detail from '../../Product/Product_detail';
import Product_list from '../../Product/Product_list';
import Brand from '../../Brand/Brand';
import Blog from '../../Blog/Blog';
import Footer from '../../Footer/Footer';
import Modal from '../../Modal/Modal';
import Menu_mobile from '../../Menu_mobile/Menu_mobile';

export default function Home_page() {
    return (
        <> {/* header */}
            <Header/> 
            {/* Cart mini */}
            <Cart/> 
            {/* Slide */}
            <Slide/> 
            {/* Banner_1 */}
            <Banner_1/> 
            {/* Product */}
            <Product/> 
            {/* Banner_2 */}
            <Banner_2/> 
            {/* service_area */}
            <Service_area/> 
            {/* product detail */}
            <Product_detail/> 
            {/* banner 3 */}
            <Banner_3/> 
            {/* product list */}
            <Product_list/> 
            {/* brand */}
            <Brand/> 
            {/* blog */}
            <Blog/> 
            {/* footer */}
            <Footer/> 
            {/* modal */}
            <Modal/> 
            {/* menu mobile */}
            <Menu_mobile/>
        </>
    )
}
