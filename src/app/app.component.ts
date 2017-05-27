import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CorreiosService } from './providers/correios/correios.service';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public formAddress: FormGroup;
  constructor(
	private correiosService:CorreiosService,
	private fb: FormBuilder
  ){ }

  ngOnInit(){
	  this.formAddress = this.fb.group({
		  cep: ['', [Validators.required]]
	  });
  }

  findCep(cep:string){
	  this.correiosService.getAddress(cep).then(data => console.log(data));
  }
}
