const conf={
    appwriteurl:string(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectid: string(import.meta.env.VITE_APPWRITE_PROJECT-ID),
    appwritedatabase: string(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritebucket: string(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwritecollection: string(import.meta.env.ITE_APPWRITE_COLLECTION_ID),
}

export default conf;