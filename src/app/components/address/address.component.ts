import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { CorreiosService } from "./../../providers/correios/correios.service";
import { Address } from "app/util/interfaces/address";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input('frmGrp') 
  public formAddress : FormGroup;
  constructor(private correiosService:CorreiosService,) { }

  ngOnInit() {
  }
  findCep(cep:string){
	  this.correiosService.getAddress(cep).then((data:Address) => {
        this.formAddress.get('cidade').patchValue(data.localidade);
        this.formAddress.get('complemento').patchValue(data.complemento);
        this.formAddress.get('uf').patchValue(data.uf);
        this.formAddress.get('rua').patchValue(data.logradouro);
    });
  }

}
