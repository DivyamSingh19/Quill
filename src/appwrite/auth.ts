import conf from "../conf/conf";
import {Client,Account ,ID ,Databases} from "appwrite"
import {toast} from 'react-toastify'

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
            
        } catch (error) {
          toast.error('User could not be created')
        }
    }






























}