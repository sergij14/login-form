export function isValidUser(email:string, password: string) {
    if(email === "frontend@isawesome.com" && password === "cool"){
        return true
    }
    return false
}