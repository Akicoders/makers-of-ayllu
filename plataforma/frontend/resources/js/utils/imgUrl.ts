export const setUrl = (img: string): URL => {
    return new URL(img, import.meta.url);
};
