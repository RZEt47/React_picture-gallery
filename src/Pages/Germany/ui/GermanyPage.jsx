import {fetchCartItem} from "@/redux/cartItem/services/fetchCartItem.js";
import {Button} from "@/ui/Button/index.js";
import {useDispatch} from "react-redux";
import {priceFormatter} from "@/ui/helpers/priceFormatter.js";
import {useState} from "react";
import cls from "./../../Pages.module.scss"

const GermanyPage = (props) => {

    const dispatch = useDispatch()
    const [note, setNote] = useState(false)

    const {name, author, description, price, img, id, country} = props

    let timeout = null

    const onclick = () => {

        dispatch(fetchCartItem({
            id: id,
            country: country,
        }))

        if(timeout !== null) {
            clearTimeout(timeout)
        }
        setNote(true)

        timeout = setTimeout(() => {
            setNote(false)
        }, 3000)
    }

    return (
        <div className={cls.cardItem}>
            {note && <div className="note">Товар добавлен в корзину!</div>}

            <img className={cls.img} src={img} alt="picture"/>

            <p className={cls.author}>{author}</p>
            <p className={cls.name}>{name}</p>
            <p className={cls.description}>{description}</p>
            <p className={cls.price}>{priceFormatter.format(price)}</p>

            <div onClick={onclick}><Button variant="card">В корзину</Button></div>

        </div>
    );
};

export {GermanyPage};