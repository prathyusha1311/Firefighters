import { Component, OnInit } from '@angular/core';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-complain',
  templateUrl: './complain.page.html',
  styleUrls: ['./complain.page.scss'],
})
export class ComplainPage implements OnInit {
  // private sup: FormGroup;
  // unpattern="^(?=.*[A-Z])(?=.*[a-z]).{3,15}$";
  against
  name
  title
  desc

  constructor() { 
    // this.sup = this.formBuilder.group({
    //   username: ['',[Validators.required,Validators.pattern(this.unpattern)]],
    //   course: ['',[Validators.required,Validators.pattern(this.unpattern)]],
    // }, {});
   }

  ngOnInit() {
    // if(this.authority=true)
  }

  submit(){
    console.log("against", this.against)
    console.log("Name", this.name)
    console.log("Title", this.title)
    console.log("Description", this.desc)
  }

}
