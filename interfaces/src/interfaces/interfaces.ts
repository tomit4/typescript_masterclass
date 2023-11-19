interface Post {
    title: string
    body: string
    tags: string[]
    created_at: Date
    author: Author
}

interface Author {
    name: string
    avatar: string
}

export { Post, Author }
