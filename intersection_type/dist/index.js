"use strict";
// Intersection Type
// By using the "&" character above, we "inherit" the types form Person,
// and then append additional property types to them.
// type User = {
// firstName: string
// id: number
// email: string
// }
// Example With Generic Function
// Here the Generic Type T is appended to the HasID types.
// Below where addToValue() is called, the <Post> generic
// type is added to indicate the argument to be passed, due
// to the definition here, it expects the output to reflect
// this same <Post> type back along with any times defined
// in the HasID interface.
function addIdToValue(val) {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
}
const post = addIdToValue({ title: 'Marmite Rules', thumbsUp: 250 });
console.log(post.id, post.title, post.thumbsUp);
