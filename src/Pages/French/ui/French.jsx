import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchFrench} from "@/redux/french/services/fetchFrench.js";
import {getFrench} from "@/redux/french/selectors/frenchSelectors.js";
import {FrenchPage} from "@/Pages/French/ui/FrenchPage.jsx";
import cls from "./../../Pages.module.scss";

const French = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFrench())
    }, []);

    const french = useSelector(getFrench)

    return (
        <div className={cls.card}>

            {french.map((el) => (

                <div  key={el.id}>
                    <FrenchPage
                             name={el.name}
                             author={el.author}
                             description={el.description}
                             price={el.price}
                             img={el.img}
                             id={el.id}
                             country={el.country}
                    />
                </div>
            ))}
        </div>
    );
};

export default French;