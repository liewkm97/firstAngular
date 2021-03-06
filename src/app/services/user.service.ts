import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../users/list-users/list-users.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //https://jsonplaceholder.typicode.com/
  baseUrl: String = 'https://gorest.co.in/public/v1/';
  TOKEN: String = 'e807a4c5db1d88029d8d4379db80f3ef8783f402cd841f948563381623245720'



  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Basic this.TOKEN`)
  }
  //todos
  constructor(private http: HttpClient) { }

  listUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+ 'users');
  }

  listUsersPage(page:number): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+ 'users?page='+ page);
  }

  listUsersEmail(email:string): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+ 'users?email='+ email);
  }

  viewUser(id : String){
    return this.http.get(this.baseUrl+ 'users/'+ id );
  }

  addUser(userObj: any){
    return this.http.post(this.baseUrl+ 'users' , userObj);
  }

  deleteUser(id: string){
    return this.http.delete(this.baseUrl+'users/'+id);
  }

  editUser(id:any, userObj:any){
    return this.http.put(this.baseUrl+ 'users/'+id , userObj);
  }
}
