import {AppLink} from "@/ui/AppLink/index.js";
import cls from "./NavBarPagesLink.module.scss"


const NavBarPagesLink = () => {

    return (
        <div className={cls.navPage}>
            <h2 className={cls.navTitle}>Репродукции</h2>
            <div id="pictures">
                <AppLink/>
            </div>
        </div>
    );
};

export  {NavBarPagesLink};