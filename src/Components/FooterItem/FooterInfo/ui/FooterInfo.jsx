import footerLogo from "@/assets/img/icons/footerLogo.svg";
import cls from "./FooterInfo.module.scss"

const FooterInfo = () => {
    return (
        <div className={cls.footerInfo}>
            <a className={cls.footerLogoImg} href="#"><img src={footerLogo} alt="footerLogo"/></a>

            <a href="tel:+7(999)543-54-54"><p className={cls.footerTel}>+7 (999) 543-54-54</p></a>

            <a href="#"><p className={cls.footerMaster}>Мастерская</p></a>
        </div>
    );
};

export {FooterInfo};