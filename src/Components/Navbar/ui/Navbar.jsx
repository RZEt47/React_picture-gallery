import {navLink} from "@/ui/helpers/navLink.js";
import Cart from "./../../../assets/img/icons/cart.svg?react"
import CartFull from "./../../../assets/img/icons/cartFull.svg?react"
import {useSelector} from "react-redux";
import {getCartItem} from "@/redux/cartItem/selectors/cartItemSelectors.js";
import {CartModal} from "@/ui/CartModal/index.js";
import {useState} from "react";
import {ModalLayout} from "@/Layouts/ModalLayout/index.js";
import cls from "./Navbar.module.scss"
import classNames from "classnames";


const Navbar = () => {

    const {reproduction, about, news} = {...navLink}

    const cartTotal = useSelector(getCartItem)

    const [cart, setCart] = useState(false)
    const [close, setClose] = useState(false)

    const open = () => {
        setCart(true)
    }

    const clickBurger = () => {
        document.getElementById("burger").classList.toggle("open")
        setClose((item) => {
            return !item
        })
    }

    return (
        <div>
            <ul className={cls.nav_link}>

                <div onClick={clickBurger} className="icon nav-icon" id="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                    <li className={classNames(cls.linkItem, {
                        [cls["linkItemOpen"]] : close
                    })}><a className={cls.link} href="#pictures">{reproduction}</a></li>

                    <li className={classNames(cls.linkItem, {
                        [cls["linkItemOpen"]] : close
                    })}><a className={cls.link} href="#news">{news}</a></li>

                    <li className={classNames(cls.linkItem, {
                        [cls["linkItemOpen"]] : close
                    })}><a className={cls.link} href="#about">{about}</a></li>

                <li>
                    <button className={classNames(cls.cart, {
                        [cls["close"]]: close,
                    })} onClick={open}>{cartTotal.length > 0 ? <CartFull/> : <Cart/>}</button>
                </li>
                <CartModal setCart={setCart} isOpen={cart} width={500} height={350}
                           border={6}><ModalLayout/></CartModal>
            </ul>

        </div>
    );
};

export {Navbar};