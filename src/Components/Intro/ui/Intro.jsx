import Bird from "./../../../assets/img/intro.jpg"
import {IntroText} from "@/Components/IntroText/index.js";
import cls from "./Intro.module.scss"

const Intro = () => {

    return (
        <div className={cls.intro}>
            <img className={cls.birdTitle} src={Bird}/>

            <div>
                <IntroText/>
            </div>
        </div>
    );
};

export {Intro};