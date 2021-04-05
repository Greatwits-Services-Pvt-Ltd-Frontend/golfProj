import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  commonUrl = 'http://localhost:3000/';
  constructor(
    private _dataService: DataService) { }


    
}
