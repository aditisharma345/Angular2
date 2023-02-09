import { Component } from '@angular/core';
import { UsersDataService } from '../api/services/users-data.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent {
  users: any;
  constructor(private userdata: UsersDataService) {
    this.userdata.users().subscribe((data) => {
      this.users = data;
      console.log('sdsdsds', this.users.entries);
    });
  }

  getuser(data: any) {
    console.log('app-api', data);
    this.userdata
      .getuser(data)
      .subscribe((result) => console.log('post', result));
  }
  remove(res: any) {
    console.log('res-api', res);
    this.userdata.Getuser(res.id).subscribe((result) => {
      console.log('remove', result);
    });
  }
}
