import conf from "../conf/conf"
const { appBucketId, appCollectionId, appDatabaseId, appWriteUrl, appProjectId } = conf;
import { Client, ID,  Storage, Query, Account,TablesDB } from "appwrite";



export class Service {
  client = new Client();
  account;
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(appWriteUrl).setProject(appProjectId);
    this.account = new Account(this.client);
    this.databases = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createRow({
        databaseId: appDatabaseId,
        tableId: appCollectionId,
        rowId: slug,
        data: {
          title,
          
          content,
          featuredImage,
          userId,
          status,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(
    rowId,
    { title, slug, content, featuredImage, status, userId }
  ) {
    try {
      return await this.databases.updateRow(
        appDatabaseId,
        appCollectionId,
        rowId,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost({ slug }) {
    try {
      await this.databases.deleteRow(appDatabaseId, appCollectionId, slug);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getPost({ slug }) {
    try {
      return await this.databases.getRow({databaseId:appDatabaseId,tableId:appCollectionId,rowId:slug});
      
    } catch (error) {
      console.log("errpr in get post ",error);
      return false;
    }
  }
  
    
async getPosts(queries = [Query.equal("status", ["active"])]) {
    try {
      return await this.databases.listRows(appDatabaseId, appCollectionId,queries);
    } catch (error) {}
}
    
    
    // file uploads
    async fileUpload(file) {
        try {
            return await this.bucket.createFile({
                bucketId:appBucketId,
                fileId: ID.unique(),
                file
                
            })
        } catch (error) {
          console.log("error in fie upload",error);
          
          return null;
            
        }
        
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId:appBucketId,
                fileId
            })
            return true;
        } catch (error) {
            console.log(error);
            
            return false;
        }
    }
    

  getFilePreview(fileId) {
       console.log("getting file preview for ",fileId);
       
        try {
            return this.bucket.getFileView({
                bucketId: appBucketId,
                fileId:fileId
                
            })
        } catch (error) {
            console.log(error);
            
            return false
        }
    }
}

const appWriteService = new Service();
export default appWriteService;
