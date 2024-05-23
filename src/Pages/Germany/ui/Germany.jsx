import {useDispatch, useSelector} from "react-redux";
import {getGermany} from "@/redux/germany/selectors/germanySelectors.js";
import {useEffect} from "react";
import {fetchGermany} from "@/redux/germany/services/fetchGermany.js";
import {GermanyPage} from "@/Pages/Germany/ui/GermanyPage.jsx";
import cls from "@/Pages/Pages.module.scss";


const Germany = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGermany())
    }, []);

    const germany = useSelector(getGermany)

    return (
            <div className={cls.card}>
                {germany.map((el) => (
                    <div key={el.id}>
                        <GermanyPage
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

export default Germany;