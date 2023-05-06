import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import{Subscription} from 'rxjs';
import firebase from 'firebase/compat/app'
import {LoadScreenServiceService} from "./load-screen-service.service";
import {User} from "./user.model";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LogInComponent} from "./log-in/log-in.component";
import {DataServices} from "./data.services";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'visitGC';
  emailusuario: string[] = [];
  suscription: Subscription;
  loading : boolean = false;

  constructor(private loadScreenService : LoadScreenServiceService, private cdRef : ChangeDetectorRef, private dataService: DataServices) { }

  async ngOnInit() {
    this.init();
  }


  init(){
    this.loadScreenService.getLoadingObsarvable().subscribe((status) => {
      this.loading = status === 'start';
      this.cdRef.detectChanges();
    });
  }

}
