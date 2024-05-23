import {Outlet} from "react-router-dom";
import {Header} from "@/Components/Header/index.js";
import {Intro} from "@/Components/Intro/index.js";
import {NavBarPagesLink} from "@/Components/NavBarPagesLink/index.js";
import {Learning} from "@/Components/Learning/index.js";
import {Team} from "@/Components/Team/index.js";
import {Footer} from "@/Components/Footer/index.js";
import cls from "./MainLayout.module.scss"

const MainLayout = () => {


    return (
        <div>
            <div className={cls.headerMain}>
                <div className={cls.container}>
                    <Header/>
                </div>
            </div>

            <div className={cls.container}>
                <Intro/>
                <NavBarPagesLink/>

                <Outlet/>
            </div>

                <Learning/>

            <div className={cls.container}>
                <Team/>
            </div>
                <Footer/>
        </div>
    );
};

export default MainLayout;