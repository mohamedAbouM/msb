import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: Post []= [];
  post: Post = {
    title: '',
    body: '',
    vote:{
      like:0,
      dislike:0
    }
  }
  display: boolean = false;
  editable: boolean = false;
  postsresult: Post[] =[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    let post = this.getPosts();
  }

  getPosts(){
    this.postsService._getPosts()
                      .subscribe((posts: any) =>{
                        this.postsresult = this.posts = posts;
                        console.log(posts)
                      });
  }
  persistePost(f){
    console.log(f);
    if(f.invalid){
      alert("Please check you form");
      return;
    }
    this.postsService._persistePost(this.post)
            .subscribe((res:Post) => {
              this.posts = [res, ...this.posts]
              this.post = {title : '' , body : ''}              
              this.display = false;
            });
   
  }
  deletePost(idPost){
    this.postsService._deletePost(idPost)
                .subscribe(
                () =>{
                  this.posts = this.posts.filter(post=>  post.id !== idPost)
                },
                (err)=> console.log(err)
                )
  }
  displayForm(){
    this.display = !this.display;
  }
  updatePoste(){
    this.postsService._updatePost(this.post)
              .subscribe(res=>{
                this.initPost();
              },
              (err)=> console.log(err)
              )
  }
  updateStatus(post){
    let myPost ={
      active : !post.active
    }
    this.postsService._updateStatus(post.id,myPost)
              .subscribe(res=>{
                console.log(res);
                post.active = myPost.active
                this.initPost();
              },
              (err)=> console.log(err)
              )
  }
  like(post:Post){    
    this.postsService._updateStatus(post.id,post)
            .subscribe(res=>{
            })
  }
  dislike(post:Post){
    this.postsService._updateStatus(post.id,post)
            .subscribe(res=>{
            })  
  }
  incVote(data,post){
    if(data.status == 'like'){
      post.vote.like = data.value;
      this.like(post)
    }else{
      post.vote.dislike = data.value;
      this.dislike(post)
    }
  }
  editPost(post:any){
    this.editable = true;
    this.post = post;
    this.display = true;
  }
  initPost(){
    this.post = {
      title : '',
      body : '',
      vote:{
        like:0,
        dislike:0
      }
    }    
    this.display = false;
    this.editable = false;
  }
  info(data){
    console.log(data);
  }

  searchPost(data:string){
    this.postsresult = this.posts.filter(post=>post.title.toLowerCase().includes(data.toLowerCase())
                                                  || post.body.toLowerCase().includes(data.toLowerCase()));
  }
}
