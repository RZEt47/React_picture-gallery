import {FooterInfo, FooterLink, FooterSocial} from "@/Components/FooterItem/index.js";
import cls from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={cls.footer}>
            <div className={cls.footerContainer}>
                <FooterInfo/>
                <FooterLink/>
                <FooterSocial/>
            </div>
        </div>
    );
};

export {Footer};