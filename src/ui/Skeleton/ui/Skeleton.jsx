import cls from "./Skeleton.module.scss"

const Skeleton = () => {

    return (
        <div className={cls.cardSkeleton}>
            <div className={cls.cardSkeleton}>
                {new Array(6).fill(0).map((_, i) => (
                    <div className={cls.skeleton} key={i}>Загрузка</div>
                ))}
            </div>
        </div>
    );
};

export {Skeleton};