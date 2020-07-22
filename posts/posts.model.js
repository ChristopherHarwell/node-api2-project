/**
 * find(): calling find returns a promise that resolves to an array of all the posts contained in the database.
findById(): this method expects an id as it's only parameter and returns a promise that resolves to the post corresponding to the id provided or an empty array if no post with that id is found.
insert(): calling insert passing it a post object will add it to the database and return a promise that resolves to an object with the id of the inserted post. The object looks like this: { id: 123 }.
update(): accepts two arguments, the first is the id of the post to update and the second is an object with the changes to apply. It returns a promise that resolves to the count of updated records. If the count is 1 it means the record was updated correctly.
remove(): the remove method accepts an id as its first parameter and upon successfully deleting the post from the database it returns a promise that resolves to the number of records deleted.
findPostComments(): the findPostComments accepts a postId as its first parameter and returns a promise that resolves to an array of all comments on the post associated with the post id.
findCommentById(): accepts an id and returns a promise that resolves to the comment associated with that id.
insertComment(): calling insertComment while passing it a comment object will add it to the database and return a promise that resolves to an object with the id of the inserted comment. The object looks like this: { id: 123 }. This method will throw an error if the post_id field in the comment object does not match a valid post id in the database.
 * */



