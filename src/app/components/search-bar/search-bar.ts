import { Component,EventEmitter,Input, Output,OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interface/auto';
@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnInit  {
  faMagnifyingGlass=faMagnifyingGlass 

@Input() autos:Auto[] = []
@Output() onSelectCar= new EventEmitter<Auto>()
selectedAutos:Auto[] = []
ngOnInit() {
  this.selectedAutos = this.autos;
}

selectAutos(selectedBrand: string){
if(selectedBrand) {
  this.selectedAutos=this.autos.filter(x=>x.brand.toLowerCase().startsWith(selectedBrand.toLowerCase()))
}
  else
    this.selectedAutos=this.autos
}
selectCar(auto: Auto){
 this.onSelectCar.emit(auto)
}
}
