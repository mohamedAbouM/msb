import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http:HttpClient) { }

  _getUsers(){
    return this.http.get("https://api.github.com/users");
  }
  _getUsersSearched(user){
    return this.http.get(`https://api.github.com/search/users?q=${user}`);
  }

}
