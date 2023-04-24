import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.css']
})
export class LoadScreenComponent {

  loading : boolean;

  /*
  constructor(private http:HttpClient) { }
  umpires = [];
  ngOnInit(): void {
    this.http.get('../../assets/data.json').subscribe(
      result => {
        setTimeout(() => {
          for (let key in result) {
            if (result[key]) {
              this.umpires.push(key);
            }
          }
        }, 2000);

      }
    )
  }*/
}
