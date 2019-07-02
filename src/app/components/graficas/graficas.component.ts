import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {
  
  @Input('titleChart') public doughnutChartLabels: any[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('dataChart') public doughnutChartData: any = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  @Input('typeChart') public doughnutChartType: any = 'doughnut';
  @Input() leyenda:string;

  constructor() { }

  ngOnInit() {
  }

}
