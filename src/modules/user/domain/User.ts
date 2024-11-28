export interface User {
    id: string; 
    name: string; 
    email: string; 
    isConfirmed: boolean; 
    lastName?: string; 
    token?: string;
}

export function isValidEmail(email: string) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
}

export function isValidPassword(password: string) {
    return password.length >= 5;
}