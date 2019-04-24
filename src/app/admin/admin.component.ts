import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

const DATA = [
  {username: 'ahmad@gmail.com', status: 'Submitted', view: 'ahmad@gmail.com/view', rate: 'ahmad@gmail.com/rate'},
  {username: 'elie@gmail.com', status: 'Pending', view: 'elie@gmail.com/view', rate: 'elie@gmail.com/rate'},
  {username: 'fatima@gmail.com', status: 'Pending', view: 'fatima@gmail.com/view', rate: 'fatima@gmail.com/rate'},
  {username: 'george@gmail.com', status: 'Submitted', view: 'george@gmail.com/view', rate: 'george@gmail.com/rate'},
  {username: 'camilla@gmail.com', status: 'Pending', view: 'camilla@gmail.com/view', rate: 'camilla@gmail.com/rate'}
];


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['username', 'status', 'view', 'rate'];
  dataSource = DATA;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToPage(url) {
    console.log(url);
    this.router.navigate(['admin/' + url]);
  }

}
