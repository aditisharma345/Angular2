import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  url = 'https://api.publicapis.org/entries';
  api = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }
  getuser(data: any) {
    return this.http.post(this.api, data);
  }
  Getuser(id: any) {
    return this.http.delete('${this.api}/${id}');
  }
  /*
  putuser(id: any) {
    return this.http.put(api);
  }
  
   Patchuser(id: any) {
    return this.http.patch({ "op": "replace", "path": "api/email", "value": "new.email@example.org" });
  } */
}
