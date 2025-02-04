import conf from "../conf/conf";
import { Client, Account, ID ,Databases } from "appwrite";
import { toast } from "react-toastify";

interface User {
    email: string;
    password: string;
    name?: string;
}

class AuthService {
    private client: Client;
    private account: Account;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }: User) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            
            if (userAccount) {
                toast.success("Account Created Successfully");
                return await this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            console.log("Create account error:", error);
            toast.error("User already exists");
            throw error;
        }
    }

    async login({ email, password }: User) {
        try {
            const session = await this.account.createEmailSession(email, password);
            toast.success("Login successful");
            return session;
        } catch (error) {
            console.log("Login error:", error);
            toast.error("Couldn't login now. Try Again Later");
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Get current user error:", error);
            toast.error("Could not get user");
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            toast.success("Logout successful");
        } catch (error) {
            console.log("Logout error:", error);
            toast.error("Unable to Logout");
            throw error;
        }
    }
}

// Create a single instance and export it
const authService = new AuthService();

// Export the type and the instance
export type { AuthService };
export default authService;