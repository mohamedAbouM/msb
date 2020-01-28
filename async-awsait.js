
run();
async function run(){
    console.log("before");

let user = await getUser(12);
let repos = await getRepos(user.id);

console.log(repos)

console.log("after");
}

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           //console.log("retreive user");
           let check = true;
           if(check){
               return resolve({id:id,name:"Mohamed"});
           }else{
               return reject("user is not found");
           }
        }, 2000);
    })
}

function getRepos(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           //console.log("retreive repos");
           let check = false;
           if(check){
               return resolve(['repos','repos1']);
           }else{
               return reject("repos is not found");
           }
        }, 2000);
    })
}