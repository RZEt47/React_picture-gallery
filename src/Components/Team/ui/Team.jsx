import {text} from "@/ui/helpers/text.js";
import Logo from "./../../../assets/img/team.jpg"
import Team1 from "./../../../assets/img/icons/team1.svg?react"
import Team2 from "./../../../assets/img/icons/team2.svg?react"
import Team3 from "./../../../assets/img/icons/team3.svg?react"
import cls from "./Team.module.scss"

const Team = () => {
    return (
        <div id="about" className={cls.team}>
            <img className={cls.teamImg} src={Logo} alt="logo"/>

            <div className={cls.teamInfo}>
                <h1 className={cls.teamTitle}>Наша команда</h1>

                <p className={cls.teamText}>{text.para3}</p>

                <div className={cls.teamIcon}>
                    <Team1/>
                    <Team2/>
                    <Team3/>
                </div>
            </div>
        </div>
    );
};

export {Team};