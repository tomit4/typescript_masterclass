"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    // enforces Date type above, but ONLY in
    // createPost function below where argument
    // of type Post is expected
    created_at: new Date(),
    author: authorOne,
};
// As Function Argument Types
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
// createPost({ title: 'a new post title' })
createPost(newPost);
// With Arrays
const posts = [];
// post.push({ title: 'some title' })
posts.push(newPost);
console.log('posts :=>', posts);
