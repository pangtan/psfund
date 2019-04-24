import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-rate',
  templateUrl: './admin-rate.component.html',
  styleUrls: ['./admin-rate.component.css']
})
export class AdminRateComponent implements OnInit {

  id: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
  }

}
