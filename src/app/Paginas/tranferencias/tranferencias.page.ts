import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tranferencias',
  templateUrl: './tranferencias.page.html',
  styleUrls: ['./tranferencias.page.scss'],
})
export class TranferenciasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCp(){
    this.router.navigate(['/tranferencia-p'])
  }

  onCt(){
    this.router.navigate(['/tranferencia-t'])
  }  
}
