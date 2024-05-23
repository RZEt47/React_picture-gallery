import cls from "./MainLoading.module.scss"

const MainLoading = () => {
    return (
        <div className={cls.pageLoader}>
            <span className={cls.loader}></span>
        </div>
    );
};

export {MainLoading};