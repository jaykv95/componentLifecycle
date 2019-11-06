import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllComponent } from './all/all.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { DoCheckComponent ,DoCheckParentComponent

} from './do-check/do-check.component';
import { FormsModule } from '@angular/forms';
import { AfterContentComponent ,ChildComponent,AfterContentParentComponent} from './after-content/after-content.component';
import { AfterViewComponent ,AfterViewParentComponent,ChildViewComponent} from './after-view/after-view.component';
import { LoggerService } from './logger.service';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,DoCheckParentComponent,
    AllComponent,AfterContentParentComponent,
    AllUsersComponent,ChildComponent,
    DoCheckComponent,
    AfterContentComponent,AfterViewParentComponent,ChildViewComponent,
    AfterViewComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
