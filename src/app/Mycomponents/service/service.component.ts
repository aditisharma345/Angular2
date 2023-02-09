import { Component } from '@angular/core';
import { UserdataService } from '../../Services/userdata.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  title = 'Services';
  memberdata = [
    {
      name: 'Samy',
      email: 'samy@hbgv',
      age: 21,
    },
    {
      name: 'Peter',
      email: 'peter@hbgv',
      age: 21,
    },
    {
      name: 'Amy',
      email: 'amy@hbgv',
      age: 21,
    },
  ];
  users: any;
  constructor(private userdata: UserdataService) {
    console.log('Service-component', userdata.users());
    this.users = userdata.users();
  }
}
