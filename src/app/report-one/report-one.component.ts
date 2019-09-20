import { Component, OnInit } from '@angular/core';
import { Report1 } from 'src/app/DataTypes';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-report-one',
  templateUrl: './report-one.component.html',
  styleUrls: ['./report-one.component.css']
})
export class ReportOneComponent implements OnInit {

  Reports : Report1 [];

  constructor(private dataservice :DataService ) { }

  ngOnInit() {
    this.dataservice.ReportOne().subscribe( Res => this.Reports = Res);
  }

}
