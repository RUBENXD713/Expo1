import { Component, OnInit } from '@angular/core';
import {Persona} from '../../Modelos/persona';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  p:Persona[];
  constructor( ) { 
    this.p=[{
      name:"Ruben",
      lastName:"Hernandez Barraza",
      sex:"Masculino",
      age:18
    }]
  }
  ngOnInit(): void {
  }

}
