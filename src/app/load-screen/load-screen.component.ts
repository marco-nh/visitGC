import {ChangeDetectorRef, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadScreenServiceService } from "./load-screen-service.service";

@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.css']
})
export class LoadScreenComponent {

  loading : boolean = true;

  constructor(private loadScreenService : LoadScreenServiceService, private cdRef : ChangeDetectorRef) { }

  ngOnInit(): void{
    this.init();
  }

  init(){
    this.loadScreenService.getLoadingObsarvable().subscribe((status) => {
      this.loading = status === 'start';
      this.cdRef.detectChanges();
    });
  }

}
