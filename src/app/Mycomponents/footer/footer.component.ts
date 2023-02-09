import { Component,OnInit } from '@angular/core';
import { UserdataService } from '../../Services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  users:any;
  constructor(private userdata:UserdataService){
    console.log(userdata.users())
    this.users=userdata.users();
  }
  ngOnInit():void{}
}
