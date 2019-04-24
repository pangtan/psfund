import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material";
import {$} from "protractor";

const DATA = [
  {username: 't@gmail.com', status: 'Submitted', view: 't@gmail.com/view', rate: 't@gmail.com/rate'},
  {username: 't2@gmail.com', status: 'Pending', view: 't2@gmail.com/view', rate: 't2@gmail.com/rate'},
  {username: 't3@gmail.com', status: 'Pending', view: 't3@gmail.com/view', rate: 't3@gmail.com/rate'},
  {username: 't4@gmail.com', status: 'Submitted', view: 't4@gmail.com/view', rate: 't4@gmail.com/rate'},
  {username: 't5@gmail.com', status: 'Pending', view: 't5@gmail.com/view', rate: 't5@gmail.com/rate'}
];


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['username', 'status', 'view', 'rate'];
  dataSource = DATA;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(url) {
    console.log(url);
    this.router.navigate(['admin/'+url]);
  }

}
