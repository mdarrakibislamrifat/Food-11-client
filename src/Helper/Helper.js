export const getToken=()=>{
    const cookie=document.cookie;
    return cookie.split('=')[1]
}
