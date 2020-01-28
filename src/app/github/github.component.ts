import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  users: any [] = []
  usersResult: any [] = []
  chaineDeRecherhce : string;
  constructor(private gitService: GitService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    console.log("before");
    this.gitService._getUsers()
          .subscribe((users: any)=>{
            this.usersResult = this.users = users;
            console.log(users);
          })
  }
  getUsersRecherches(data: string){
    this.usersResult = this.users.filter(user=>user.login.toLowerCase().includes(data.toLowerCase()));
    if(!this.usersResult.length){
      this.gitService._getUsersSearched(data)
                      .subscribe(resp=>{
                        let {items}: any = resp;
                        this.usersResult = items;
                        this.users = [...this.users,...items]
                      })
    }
  }

}
