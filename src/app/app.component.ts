import {
  Component /*  ComponentFactory, ViewContainerRef */,
} from '@angular/core';
import { UserdataService } from './Services/userdata.service';
/* 
abstract class ComponentFactoryResolver {
  static NULL: ComponentFactoryResolver;
  abstract resolveComponentFactory<T>(component: any): ComponentFactoryResolver;
} */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-second-project';
  users: any; /*
  /* constructor(private userdata:UserdataService){
    console.log(userdata.users())
    this.users=userdata.users;
  } 
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {} */
}

/* put, patch, update, delete */
/* ________      _________ */
/*  diff.            diff. */
