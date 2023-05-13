
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acerca } from 'src/app/model/acerca-model';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  URL = environment.URL + 'acerca/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Acerca[]>{
    return this.httpClient.get<Acerca[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Acerca>{
    return this.httpClient.get<Acerca>(this.URL + `detail/${id}`);
  }

  public save(about: Acerca): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Acerca);
  }

  public update(id: number, about: Acerca): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Acerca);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
