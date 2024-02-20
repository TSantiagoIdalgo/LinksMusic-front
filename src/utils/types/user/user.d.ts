type UserId = `${string}-${string}-${string}-${string}-${string}`

export interface IUser {
    id: UserId;
    userName: string;
    email: string;
    passwordHash: string;
    verify: boolean;
    token?: string;
}

export interface IUserLogin {
    userLogin: IUser
}

export interface IUserLoginVariables {
    email: string;
    passwordHash: string;
}

export interface IUserNetworkLogin {
    userNetworkLogin: string
}

export interface IUserNetworkLoginVariables {
    userName: string;
    email: string;
    image: string | null;
}

export interface IUserRegister {
    createUser: IUser
}

export interface IUserRegisterVariables {
    userName: string,
    email: string,
    passwordHash: string,
}