import { Component, OnInit } from '@angular/core';
import { NotatkaService } from '../notatka.service';

@Component({
  selector: 'notatka-lista',
  templateUrl: './notatka-lista.component.html',
  styleUrls: ['./notatka-lista.component.scss']
})
export class NotatkaListaComponent implements OnInit {
  public notatki = [];
  public count: number;

  constructor(
    private notatkaService: NotatkaService,
  ) { }

  ngOnInit(): void {
    this.notatkaService.getList().subscribe((response:{count:number, next:string, results:any[], prev:string}) => {
      this.count = response.count;
      this.notatki = response.results;
      console.log(this.notatki);
    })
  }

}
