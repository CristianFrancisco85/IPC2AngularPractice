import { Component, OnInit } from '@angular/core';
import { Report2 } from 'src/app/DataTypes';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-report-two',
  templateUrl: './report-two.component.html',
  styleUrls: ['./report-two.component.css']
})
export class ReportTwoComponent implements OnInit {

  Reports : Report2 [];

  constructor(private dataservice :DataService ) { }

  ngOnInit() {
    this.dataservice.ReportTwo().subscribe( Res => this.Reports = Res);
  }

}
