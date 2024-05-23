import EmptyCart from "../../../../assets/img/icons/cartEmpty.svg?react"
import EmptySad from "../../../../assets/img/icons/emptySad.svg?react"
import cls from "../../ModalLayout.module.scss"

const ModalLayoutEmpty = () => {
    return (
        <div>
            <div className={cls.emptyCartInfo}>
                <h1>Ваша корзина пуста</h1>
                <div className={cls.emptySadImg}><EmptySad/></div>
            </div>

            <div className={cls.emptyCart}><EmptyCart/></div>
        </div>
    );
};

export {ModalLayoutEmpty};