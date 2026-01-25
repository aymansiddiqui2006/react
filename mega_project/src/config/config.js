const config = {
    appwriteurl: import.meta.env.VITE_APPWRITE_URL,
    appwriteprojectid: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwritedatabase: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appwritebucket: import.meta.env.VITE_APPWRITE_BUCKET_ID,
    appwritecollection: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
};

export default config;
