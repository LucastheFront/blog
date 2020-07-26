export interface Post {
    success: string;
    message: string;
    posts: Array<{
        object: {
            id: string;
            title: string;
            description: string;
            author: string;
            createdAt: string;
            updatedAt: string;
            v: number;
        }
    }>;
    title: string;
    description: string;
    author: string;
}
