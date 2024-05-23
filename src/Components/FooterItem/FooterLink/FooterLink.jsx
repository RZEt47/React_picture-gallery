
import cls from "./FooterLink.module.scss"

const FooterLink = () => {
    return (
        <div className={cls.footerLink}>
            <div>
                <h4 className={cls.footerLinkTitle}>Репродукции</h4>

                <a href="#"><p className={cls.footerLinkItem}>Франция</p></a>
                <a id="#" href="#"><p className={cls.footerLinkItem}>Германия</p></a>
                <a href="#"><p className={cls.footerLinkItem}>Англия</p></a>
            </div>

            <div>
                <h4 className={cls.footerLinkTitle}>Новинки</h4>

                <a href="#"><p className={cls.footerLinkItem}>2021</p></a>
                <a href="#"><p className={cls.footerLinkItem}>2022</p></a>
            </div>

            <div>
                <h4 className={cls.footerLinkTitle}>О нас</h4>

                <a href="#"><p className={cls.footerLinkItem}>Художники</p></a>
                <a href="#"><p className={cls.footerLinkItem}>Менеджеры</p></a>
            </div>
        </div>
    );
};

export {FooterLink};