import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteprojectid);

        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImg, status, userId }) {
        try {
            return await this.database.createDocument(
                config.appwritedatabase,
                config.appwritecollection,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.error("Service :: createPost :: error", error);
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImg, status }) {
        try {
            return await this.database.updateDocument(
                config.appwritedatabase,
                config.appwritecollection,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status
                }
            );
        } catch (error) {
            console.error("Service :: updatePost :: error", error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                config.appwritedatabase,
                config.appwritecollection,
                slug
            );
            return true;
        } catch (error) {
            console.error("Service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(
                config.appwritedatabase,
                config.appwritecollection,
                slug
            );
        } catch (error) {
            console.error("Service :: getPost :: error", error);
            return null;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(
                config.appwritedatabase,
                config.appwritecollection,
                queries
            );
        } catch (error) {
            console.error("Service :: getPosts :: error", error);
            return null;
        }
    }
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwritebucket,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Service :: uploadFile :: error", error);
            return null;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwritebucket,
                fileId
            );
            return true;
        } catch (error) {
            console.error("Service :: deleteFile :: error", error);
            return false;
        }
    }
getFilePreview(fileId) {
    return this.bucket.getFilePreview(
        config.appwritebucket,
        fileId
    );
}


}

const service = new Service();
export default service;
