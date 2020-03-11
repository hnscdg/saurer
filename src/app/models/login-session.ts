/**
 * after authentication, return the data regulation
 */
export interface LoginSession {
    userName: string,
    password: string;
    remember: boolean;
}

