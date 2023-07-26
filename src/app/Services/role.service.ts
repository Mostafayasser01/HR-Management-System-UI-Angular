import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  createRole(name: string) {
    return this.http.post('http://localhost:5241/api/Role', name);
  }

  updateRole(id: number, name: string, permissions: any[]) {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const role = { name, permissions };
    return this.http.put(`/api/roles/${id}`, role, { headers });
  }

  getRoles() {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any[]>('/api/roles', { headers });
  }

  getRole(id: number) {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any>(`/api/roles/${id}`, { headers });
  }

  getPermissions() {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any[]>('http://localhost:5241/api/Role/api/permissions', { headers });
  }
}
