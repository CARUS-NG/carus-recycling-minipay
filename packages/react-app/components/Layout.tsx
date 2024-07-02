import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className="mx-auto overflow-hidden flex flex-col min-h-screen font-satoshi">
                <Header />
                <div className="px-[5%] text-sm">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
