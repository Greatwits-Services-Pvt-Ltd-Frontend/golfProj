import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { DataService } from 'src/app/shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    public _commonService: CommonService,
    private _dataService: DataService) { }

    getCategoryProducts() {
      return this._dataService.get(
        this._commonService.commonUrl + 'products'
      );
    }


}
