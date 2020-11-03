import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
messaggio: string[];
// Inject HttpClient into your component or service.
constructor(private http: HttpClient) {}
ngOnInit(): void {
// Make the HTTP request:
this.http.get('https://3000-a1a0cffc-d4b2-49c1-8caa-527272d65ef5.ws-eu01.gitpod.io/api').subscribe(data => {
// Read the result field from the JSON response.
this.messaggio = data['messaggio'];
});
}
}
