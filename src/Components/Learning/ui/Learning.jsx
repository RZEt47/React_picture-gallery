import LearnLogo from "./../../../assets/img/icons/Star.svg?react"
import {text} from "@/ui/helpers/text.js";
import cls from "./Learning.module.scss"
import {Button} from "@/ui/Button/index.js";

const Learning = () => {

    const {para1, para2} = text

    return (
        <div id="news" className={cls.learn}>

            <div className={cls.learnContainer}>
                <div className={cls.learnContainerInfo}>

                    <div className={cls.learnLogoInfo}>
                        <LearnLogo/>
                        <div className={cls.learnTitle}>Новая коллекция французских авторов</div>
                    </div>

                    <p className={cls.learnPara1}>{para1}</p>
                    <p className={cls.learnPara2}>{para2}</p>

                    <Button variant="yellow">Ознакомиться</Button>
                </div>
            </div>
        </div>
    );
};

export {Learning};