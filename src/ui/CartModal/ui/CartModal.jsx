import classNames from "classnames";
import ReactModal from "react-modal";
import {useLayoutEffect, useState} from "react";
import cls from "./CartModal.module.scss";

ReactModal.setAppElement("#root");

const variantClasses = {
    rightModal: "rightModal",
    normal: "modal",
};

const CartModal = (props) => {
    const {
        isOpen,
        setCart,
        children,
        variant,
        width,
        height,
        border,
        scroll,
    } = props;

    const variantClass = variantClasses[variant] || variantClasses.normal;

    const [closing, setIsClosing] = useState(false);

    useLayoutEffect(() => {
        if (!isOpen) {
            setIsClosing(true);
        } else {
            setIsClosing(false);
        }
    }, [isOpen]);


    const closeModal = () => {
        setCart(false)
    }

    return (
        <ReactModal
            style={{
                content: {
                    maxWidth: width,
                    maxHeight: height,
                    borderRadius: border,
                    overflowY: scroll,
                },
            }}
            className={classNames(cls.animate, cls[variantClass], {
                [cls.closing]: closing,
            })}
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            htmlOpenClassName={cls.modalOpen}
            overlayClassName={cls.overlay}
            closeTimeoutMS={300}
            onRequestClose={closeModal}
            parentSelector={() => document.querySelector("#root")}
        >
            {children}
            <button className={cls.close} onClick={closeModal}></button>
        </ReactModal>
    );
};

export {CartModal};
