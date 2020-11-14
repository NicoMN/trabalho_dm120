import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DweetService } from 'src/app/services/dweet.service';
import Dweet from 'src/models/Dweet';

@Component({
  selector: 'app-buzzcolor',
  templateUrl: './buzzcolor.page.html',
  styleUrls: ['./buzzcolor.page.scss'],
})
export class BuzzcolorPage implements OnInit {
  private dweet: Dweet
  private isLoading: boolean = true;
  private time: any;
  private dataPlot: Array<any>
  options: Object;


  constructor(private dweetService: DweetService, public router: Router) {
    this.time = setInterval(() => { this.getLastDweets() }, 3000)
  }


  private getLastDweets() {
    this.dataPlot = []
    this.dweetService.loadLastDweets().subscribe(
      data => {
        this.preencherDweet(data)
      },
      err => {
        console.log("Erro: ", err)
      },
      () => this.isLoading = false
    )
  }

  private preencherDweet(data: any) {
    this.dweet = this.dweetService.preencherDweet(data);
  }


  goBack() {
    this.router.navigate(['home'])
  }

  ngOnInit() {
    this.getLastDweets();
  }

  ngOnDestroy() {
    clearInterval(this.time)
  }

}

