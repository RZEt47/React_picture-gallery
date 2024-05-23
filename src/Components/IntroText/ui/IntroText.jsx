import {Button} from "@/ui/Button/index.js";
import cls from "./IntroText.module.scss"

const IntroText = () => {
    return (
        <div>
            <div className={cls.introItem}>
                <h1 className={cls.introTitle}>Реплики картин от <span>Ink. House</span></h1>

                <p className={cls.introText}>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие
                    произведения, доступные цены</p>
            </div>

            <Button variant='normal' >
                Продукция
            </Button>
        </div>
    );
};

export {IntroText};