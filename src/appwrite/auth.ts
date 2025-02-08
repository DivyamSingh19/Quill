import { toast } from 'react-toastify';
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                toast.dark("Account Created Successfully")
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            toast.error("Account Creation Failed")
            throw error;
        }
    }

    async login({email, password}) {
        try {
            
             const session =  await this.account.createEmailPasswordSession(email, password);
             toast.dark("Login Successful !")
             return session
            
        } catch (error) {
            toast.error("Login Failed")
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            
            await this.account.deleteSessions();
            toast.dark("Logout Successful")
        } catch (error) {
            toast.error("Couldn't Logout")
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService