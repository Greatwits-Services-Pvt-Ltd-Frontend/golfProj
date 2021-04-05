import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hide:any;
  classFlag = new Array(4).fill(false);
  constructor() { }
  
  ngOnInit(): void {
  }

  handleClass(index: number){
    let temp = this.classFlag[index];
    this.classFlag = new Array(4).fill(false);
    this.classFlag[index] = temp;
    this.classFlag[index] = !this.classFlag[index];
  }

  changeClass(className:string){
    console.log("doing")
    let body = document.getElementsByClassName(className)[0];
    // body.classList.remove(className);   //remove the class
    // body.classList.add("show");   //add the class
    body.removeAttribute("display:none;");
    body.setAttribute("style", "display:block;");
    console.log("done");
    console.log(className);
  }
}
