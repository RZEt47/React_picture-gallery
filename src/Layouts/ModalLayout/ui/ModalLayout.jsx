import {ModalLayoutFull} from "@/Layouts/ModalLayout/ui/ModalItemLayout/ModalLayoutFull.jsx";
import {getCartItem} from "@/redux/cartItem/selectors/cartItemSelectors.js";
import {useSelector} from "react-redux";
import {ModalLayoutEmpty} from "@/Layouts/ModalLayout/ui/ModalItemLayout/ModalLayoutEmpty.jsx";


const ModalLayout = () => {

    const cartItem = useSelector(getCartItem)

    return (
        <div>
            {cartItem.length > 0 ? <ModalLayoutFull/> : <ModalLayoutEmpty/>}
        </div>
    );
};

export {ModalLayout};