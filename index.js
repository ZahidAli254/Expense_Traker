// function updateLastUserActivityTime () {
//     return new Promise( (resolve, reject) => {
//        resolve();
//     }) 
// }

// function create1stBlog() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             blogs.push({title: 'POST'});
//             resolve();
//         }, 1000)
//     }) 
// }


    function createPost(){
        return new Promise();
    }

    const user={
        lastActivityTime:'21 march'
    }
    function updateLastActivityTime(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                user.lastActivityTime=new Date().getTime();
                resolve(user.lastActivityTime)
            },1000)
        })
    }

    function userUpdatePost(){
        Promise.all([createPost,updateLastActivityTime]).then(([createPost ,updateLastUserActivityTime])=>{
            console.log(updateLastActivityTime.resolve)
        })
        .catch(err=>console.log(err));
    }