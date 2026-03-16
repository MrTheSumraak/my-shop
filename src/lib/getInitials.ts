export const getInitials = (str: string): string => {
    const words = str.trim().split(" ").filter(Boolean);

    if (words.length === 0) return "";

    if (words.length === 1) {
        return words[0][0].toUpperCase();
    }

    if (words.length === 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
    }

    // больше двух слов → берём первое и последнее
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};
