import {useDispatch, useSelector} from "react-redux";
import {getCartItem} from "@/redux/cartItem/selectors/cartItemSelectors.js";
import {cartItemActions} from "@/redux/cartItem/slice/cartItemSlice.js";
import {priceFormatter} from "@/ui/helpers/priceFormatter.js";
import {totalCost} from "@/ui/helpers/totalCost.js";
import cls from "@/Layouts/ModalLayout/ModalLayout.module.scss";

const ModalLayoutFull = () => {

    const dispatch = useDispatch()

    const cartItem = useSelector(getCartItem)

    const onClickInc = (id) => {
        dispatch(cartItemActions.addItem(id))
    }

    const onClickDec = (id) => {
        dispatch(cartItemActions.decItem(id))
    }


    const item = cartItem.map((el) => {

        return <div className={cls.cart} key={el.id}>
            <div className={cls.cartText}>
                <div>
                    <span>Название:</span> {el.name}
                </div>
                <div>
                    <span>Автор:</span> {el.author}
                </div>
                <div>
                    <span>Цена:</span> {el.price}
                </div>
                <div className={cls.count}>
                    <button className={cls.btns} onClick={() => {
                        onClickDec(el.id)
                    }}>&lt;</button>
                    <div>{el.count}</div>
                    <button onClick={() => {
                        onClickInc(el.id)
                    }}>&gt;</button>
                </div>
            </div>
            <img className={cls.img} src={el.img} alt="picture"/>
        </div>

    })
    return (
        <div className={cls.mainCart}>
            {item}
            <div className={cls.total}>Итого: <span>{priceFormatter.format(totalCost(cartItem))}</span></div>
            <button className={cls.btn}>Заказать</button>
        </div>
    );
};

export {ModalLayoutFull};