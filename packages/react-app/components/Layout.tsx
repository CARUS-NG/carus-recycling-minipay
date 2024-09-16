import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import React from 'react';

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className="mx-auto overflow-hidden items-center w-full flex flex-col min-h-screen bg-[#FCFCFC]">
                <Header />
                <div className="w-full px-[5%]">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
