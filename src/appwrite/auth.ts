import conf from "../conf/conf";
import {Client,Account ,ID ,Databases} from "appwrite"
import {toast} from 'react-toastify'

interface User{
    email:string,
    password : string,
    name:string,
    
}

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}:User){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                return await this.login({email,password})
                 
            }
            else{
                return userAccount;
            }
            toast.success("Account Created Successfully") 
            
        } catch (error) {
        
            console.log(error);
            toast.error('User could not be created')
        }
    }
    async login({email,password}:User){
        try {
            toast.success("Login successful")
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log(error);
            toast.error("Couldn't login now .Try Again Later")
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.createEmailPasswordSession(email,password);
            
        } catch (error) {
          console.log(error)
          toast.error('Couldnot get user')   
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
            toast.success("Logout successful")
        } catch (error) {
            console.log(error)
            toast.error('Unable to Logout')
        }
    }

const authService = new AuthService()

export default authService;



























}