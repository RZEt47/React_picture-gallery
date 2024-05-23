import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchEngland} from "@/redux/england/services/fetchEngland.js";
import {getEngland} from "@/redux/england/selectors/englandSelectors.js";
import {EnglandPage} from "@/Pages/England/ui/EnglandPage.jsx";
import cls from "@/Pages/Pages.module.scss";


const England = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEngland())
    }, []);

    const england = useSelector(getEngland)

    return (
            <div className={cls.card}>
                {england.map((el) => (
                    <div  key={el.id}>
                        <EnglandPage
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

export  default  England;