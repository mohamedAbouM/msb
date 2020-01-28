import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  _getPosts(){
    return this.http.get("http://localhost:5000/posts");
  }

  _persistePost(post:any){
    return this.http.post("http://localhost:5000/posts",post);
  }
 
 _deletePost(idPost){
   return this.http.delete(`http://localhost:5000/posts/${idPost}`);
 }
 _updatePost(post:any){
  return this.http.put(`http://localhost:5000/posts/${post.id}`,post);
 }
 _updateStatus(id,data){
  return this.http.patch(`http://localhost:5000/posts/${id}`,data);
 }

 _getPostSearched(post){
  return this.http.get(`http://localhost:5000/posts/post?q=${post}`);
}

}
