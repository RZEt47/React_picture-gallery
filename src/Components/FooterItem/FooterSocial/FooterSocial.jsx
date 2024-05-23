import Facebook from "./../../../assets/img/icons/footerFacebook.svg?react"
import Instagram from "./../../../assets/img/icons/footerInsta.svg?react"
import YouTube from "./../../../assets/img/icons/footerYouTube.svg?react"
import cls from "./FooterSocial.module.scss"

const FooterSocial = () => {
    return (
        <div className={cls.footerSocial}>

            <div className={cls.footerSocialIcon}>
                <a href="#"><Facebook/></a>
                <a href="#"><Instagram/></a>
                <a href="#"><YouTube/></a>
            </div>

            <p className={cls.footerSocialItem1}>Ink. House ®</p>
            <p className={cls.footerSocialItem2}>All rights reserved</p>
        </div>
    );
};

export {FooterSocial};