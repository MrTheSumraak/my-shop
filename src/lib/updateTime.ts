export const updateTimer = (
    salesEnd: number,
    setTime: React.Dispatch<React.SetStateAction<string>>,
) => {
    const now = Date.now();
    const diff = salesEnd - now;

    if (diff <= 0) {
        setTime("Скидка закончилась");
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setTime(`${hours}ч ${minutes}м ${seconds}с`);
};
