import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDataModel } from '../Models/IDataModel';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  GetData(): Observable<IDataModel[]> {
    return this.http.get<IDataModel[]>(this.dataUrl);
  }
}
