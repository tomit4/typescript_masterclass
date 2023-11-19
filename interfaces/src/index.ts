// Interfaces
// NOTE: import of .ts files requires
// "allowImportExtensions" and "noEmit" are enabled in tsconfig.json
import { Author, Post } from './interfaces/interfaces.ts'
const authorOne: Author = { name: 'mario', avatar: '/img/mario.png' }

const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    // enforces Date type from interface Post, but ONLY in
    // createPost function below where argument
    // of type Post is expected
    created_at: new Date(),
    author: authorOne,
}

// As Function Argument Types

function createPost(post: Post): void {
    console.log(`created post ${post.title} by ${post.author.name}`)
}

// createPost({ title: 'a new post title' })
createPost(newPost)

// With Arrays

const posts: Post[] = []
// post.push({ title: 'some title' })
posts.push(newPost)
console.log('posts :=>', posts)
