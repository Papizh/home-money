import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import {Bill} from '../models/bill.model';
import {Http, Response} from '@angular/http';
import {BaseApi} from '../../../shared/core/base-api';


@Injectable()
export class BillService extends BaseApi {
  constructor(public http: Http) {
    super (http);
  }


  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  getCurrency(): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=0bf3f5aae9ea02ab08c626e23e1dd349`)
      .map((response: Response) => response.json());
  }
}
