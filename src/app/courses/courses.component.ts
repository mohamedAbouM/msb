import { Component } from '@angular/core';
import Swal from 'sweetalert2' ;
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  myCourse :any = {id : 0 , name :'' , active : false};
  courses :any[] = [
            {id :1 ,name :'Angular' , active : false},
            {id :2 ,name :'Java', active : false},
            {id :3 ,name :'Spring' , active : true},
            {id :3 ,name :'JEE' , active : false}

          ];
  cardview : boolean = false;

  myPicture = "imageLink";
  
  editable :boolean = false;

  constructor() { }

  addCourse(){
    //this.courses.unshift(this.myCourse);
   // spread operator

   this.courses = [...this.courses , this.myCourse];

  }

  deleteCourse(index){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'question',
      showCancelButton: false,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.courses.splice(index,1);
        Swal.fire({
          title :'Deleted!',
          text : 'The Selected Course has been deleted.',
          timer : 5000
        }
        )
      } 
    })
  }

  editCourse(course){
    this.editable = true;
    this.myCourse = course;
  }
  updateCourse(course){
    this.editable = false;
    this.myCourse = {id : 0 , name :'' , active : false};
  }

  changeView(){
    this.cardview = ! this.cardview;
  }

}
