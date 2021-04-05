import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { DataService } from 'src/app/shared/data.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myproducts:any;
  constructor(public _commonService: CommonService, public _homeService:HomeService) { }

  ngOnInit(): void {
    this.getproductData()
  }

  getproductData(){
    this._homeService.getCategoryProducts().subscribe((res)=>{
      this.myproducts = res;
      console.log(this.myproducts);
    })
  }


}
