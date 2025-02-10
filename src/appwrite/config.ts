import { toast } from 'react-toastify';
import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

enum TestingEnum {
    OPTION_ONE = "Science",
    OPTION_TWO = "Nature",
    OPTION_THREE = "History",
    OPTION_FOUR = "ComputerScience",
    OPTION_FIVE = "Art",
    OPTION_SIX = "Personal-Development",
    OPTION_SEVEN = "Social-Issues",
    OPTION_EIGHT="Business&Finance"
}
interface Blog {
    title:string,
    slug : string,
    content : string,
    featuredImage : string,
    status : boolean,
    userId : string,
    theme: string,
    testing: TestingEnum
}
export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId,theme,testing}:Blog){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    theme,
                    testing
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug : string, {title, content, featuredImage, status}:Blog){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug:string){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug:string){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

     

    async uploadFile(file: File){
        try {
            const upload = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
                
            )
            toast.success("Upload SuccessFul")
            return upload
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId:string){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId:string){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service

