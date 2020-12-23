import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HttpClientModule} from '@angular/common/http';
import { MypipePipe } from './mypipe.pipe';
import { EmpService } from './emp.service';
import { EmpComponent } from './emp/emp.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    MypipePipe,
    EmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BrowserModule,HttpClientModule,EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
