import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eim';
  headerKeys: any = [];
  headers: any = [];
  component: any;
  data: any;
  isLoading: boolean = true;
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.getData().subscribe((res) => {
      this.component = res.Components[0].tableColumns;
      this.data = res.Components[0].data;
      this.headerKeys = Object.keys(res.Components[0].tableColumns);
      this.headerKeys.forEach((element) => {
        this.headers.push(this.component[element].description);
      });
      this.isLoading = false;
    });
  }
}
