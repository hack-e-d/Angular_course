import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UppercaseConverterService {

  constructor(private  _httpClient: HttpClient) { }

  public convertToUpper(obj): any{
    return this._httpClient.post('http://test-routes.herokuapp.com/test/uppercase', obj);

  }
}
