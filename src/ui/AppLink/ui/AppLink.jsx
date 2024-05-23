import {NavLink} from "react-router-dom";
import {dataCountry} from "@/ui/helpers/countries.js";
import cls from "./AppLink.module.scss"

const AppLink = () => {

    return (
        <div className={cls.linkPages}>
            {dataCountry.map((item) => {
                return <NavLink key={item.name} to={item.path}  className={({ isActive }) =>
                    isActive ? "active" : "gallery"
                    }>
                        {item.name}
                       </NavLink>
            })}
        </div>
    );
};

export {AppLink};