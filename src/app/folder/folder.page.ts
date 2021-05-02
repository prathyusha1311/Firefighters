import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  // public folder: string;
  isSafe = true;
  room = "Room 1";
  // isSafe = false;
  data

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public http:HttpClient) { }

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    
  }
  ionViewWillEnter(){
    this.http.get('https://api.thingspeak.com/channels/1377173/fields/1&2.json?api_key=WJG57RWMVNMTL2XW&results=2').subscribe(res=>{
        this.data = res
        console.log(res)
        console.log("cloud data 1",this.data.feeds[1].field1);
        console.log("cloud data 2",this.data.feeds[1].field2);
    })

    if(this.data.feeds[0].field1 == 0 || this.data.feeds[0].field2 ==0 || this.data.feeds[1].field1==0 || this.data.feeds[1].field2 ==0){
      if(this.data.feeds[0].field1 == 0 || this.data.feeds[0].field2 == 0){
        this.room = "Room 1" 
      }
      if(this.data.feeds[1].field1 == 0 || this.data.feeds[1].field2 == 0){
        this.room = "Room 2" 
      }
      this.isSafe = false
    }

  }

  change(){
    if(this.isSafe==true){
      this.isSafe=false;
    }
    else{
      this.isSafe=true;
    }
  }

  inventory(){
    this.router.navigate(['/inventory']) 
  }
  exit(){
    this.router.navigate(['/exit-plans']) 
  }
  complain(){
    this.router.navigate(['/complain']) 
  }
  precaution(){
    this.router.navigate(['/precaution']) 
  }
  
}
