import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts'

@Component({
  selector: 'app-sandbox-report-view',
  templateUrl: './sandbox-report-view.component.html',
  styleUrls: ['./sandbox-report-view.component.css']
})
export class SandboxReportViewComponent implements OnInit {
  public MessagesLabels: string[] = [ 'Match', 'Mismatch' ];
  public RulesLabels: string[] = [ 'Business', 'Default' ];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.MessagesLabels,
    datasets: [
      { data: [ 12, 6 ], 
        backgroundColor: ['green', 'red'],
        hoverBackgroundColor: ['green', 'red'],
        hoverOffset: 4,
        borderColor: ['white', 'white'],
        hoverBorderColor: ['white', 'white']
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  }

  public RulesChartData: ChartData<'doughnut'> = {
    labels: this.RulesLabels,
    datasets: [
      { data: [ 0, 12 ], 
        backgroundColor: ['yellow', 'green'],
        hoverBackgroundColor: ['yellow', 'green'],
        hoverOffset: 4,
        borderColor: ['white', 'white'],
        hoverBorderColor: ['white', 'white']
      },
    ]
  };
  public RulesChartType: ChartType = 'doughnut';
  public RulesChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  }

}
