const myPost = [
    {post:"Merhaba"},
    {post:"Günaydın"},
    {post:"İyi Günler"},
];

function listPost() {
    myPost.map((post)=>{
        console.log(post.post);
    });
};

function addPost(newPost) {
    const promise1= new Promise((resolve,reject)=>{
        myPost.push(newPost);
        resolve(myPost);
        reject('Bir hata oluştu');
    });

    return promise1;
};

async function showPosts() {
    try{
        await addPost({post:"İyi Akşamlar"});
        listPost();
        console.log("İşlem başarılı");
    } catch (error) {
        console.log(error);
    }

}
listPost();
showPosts();
