import ButtonUI from "@/shared/ui/button/buttonUI";
import { headerClasses } from "./header.styles";

const HeaderUI = () => {
    return (
        <div className={headerClasses.header}>
            {/* Главная страница магазина
            <ButtonUI size="xl" text="Перейти в каталог" /> */}
            <div></div>
            <div className={headerClasses.headerContent}>
                <div>
                    <h1 className={headerClasses.headerTitle}>
                        Лучшие товары с мгновенным обновлением
                    </h1>
                    <p className={headerClasses.headerSubTitle}>
                        умный поиск, персональные рекомендации, низкие цены
                    </p>
                    <ButtonUI size="md" text="Перейти в каталог" />
                </div>
                <div className={headerClasses.headerImg}>
                    <img src="/headerImg.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderUI;
