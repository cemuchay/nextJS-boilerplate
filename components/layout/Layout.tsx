import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <main>
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    );
}

export default Layout;

