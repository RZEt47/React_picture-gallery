import {Navbar} from "@/Components/Navbar/index.js";
import Logo from "./../../../assets/img/icons/logo.svg?react"
import cls from "./Header.module.scss"

const Header = () => {
    return (
        <div className={cls.header}>
            <a className={cls.headerMain} href="/"><Logo/></a>
            <Navbar/>
        </div>
    );
};

export {Header};