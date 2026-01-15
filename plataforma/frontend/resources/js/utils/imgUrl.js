export const setUrl = (img)=>{
    return new URL(img, import.meta.url)
}