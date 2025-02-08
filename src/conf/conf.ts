const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_BLOGPOST_ID),
    appwriteCollectionAvatarId: String(import.meta.env.VITE_APPWRITE_AVATAR_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_IMAGES_ID),
    appwriteBucketAvatarId: String(import.meta.env.VITE_APPWRITE_BUCKET_AVATAR_ID),
    googleAuthSuccessUrl: String(import.meta.env.VITE_GOOGLE_AUTH_SUCCESS_URL),
    googleAuthFailureUrl: String(import.meta.env.VITE_GOOGLE_AUTH_FAILURE_URL),
    rteAPI:String(import.meta.env.RTE_API)
}


export default conf