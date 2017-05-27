import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cep',
  template: `
  <div class="form-group" [formGroup]="fmGroup">
      <label>Cep</label>
      <input class="form-control" [textMask]="{mask: mask}" (blur)="isValid(fmGroup.controls['cep'].value)" type="text" formControlName="cep"/>
  </div>
  `,
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  @Input() fmGroup: FormGroup;
  @Output() findCep = new EventEmitter<string>();
  public mask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit() {
  }

  isValid(cep: string){
    cep = cep.replace(/\D/g,'');
    if(cep != ""){
        let validacep= new RegExp(/[0-9]{8}$/);
        if(validacep.test(cep)){
            this.findCep.emit(cep);
        }
    }
  }
}
