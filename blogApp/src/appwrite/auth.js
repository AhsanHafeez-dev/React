import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


const { appProjectId, appWriteUrl } = conf;



export class AuthService{

    client = new Client();
    account;
    constructor() {
        console.log(appWriteUrl, appProjectId,"constructor called");

            this.client
            .setEndpoint(appWriteUrl)
                .setProject(appProjectId);
        
        this.account = new Account(this.client);
    
        
        
    }


    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create({ userId: ID.unique(), name, email, password });
            
            if (userAccount) {
                const result = await this.login({email,password});
                return result;
              }
            return userAccount;

        } catch (error) {
            throw error;
        }
        
    }


    async login({ email, password }) {
        try {
            const result = await this.account.createEmailPasswordSession({ email, password });
            return result;

        } catch (error) {
            throw error
            
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // throw error;
            // console.log("error :", error);
            return null;
            
            
        }

    
    }

    async logout() {
        try {
            await   this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;