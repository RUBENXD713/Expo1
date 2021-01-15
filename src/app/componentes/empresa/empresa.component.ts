import { Component, OnInit } from '@angular/core';
import {Persona} from '../../Modelos/persona';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public name : string | undefined;
  public lastName:string | undefined;
  public sex:string | undefined;
  public age:string | undefined;

  constructor() { 
    
    this.name="Ruben";
    this.lastName="Hernandez Barraza";
    this.sex="Masculino";
    this.age="18";
  }

  ngOnInit(): void {
  }

}
