import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts'

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {name: 'Helium', weight: 4.0026, symbol: 'He'},
  {name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {name: 'Boron', weight: 10.811, symbol: 'B'},
  {name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  { name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public doughnutChartLabels: string[] = [ 'Success', 'Failure' ];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450 ], 
        backgroundColor: ['green', 'red'],
        hoverBackgroundColor: ['green', 'red'],
        hoverOffset: 3,
        borderColor: ['green', 'red'],
        hoverBorderColor: ['green', 'red']
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    
    scales: {
      x: {},
      y: {
        min: 5
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };


  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
    ]
  };


}
