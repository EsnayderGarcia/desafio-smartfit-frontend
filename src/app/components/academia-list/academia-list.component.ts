import { Component, OnInit, Input } from '@angular/core';
import {ILocation, IUnidade} from "../../models/IUnidade";

@Component({
  selector: 'app-academia-list',
  templateUrl: './academia-list.component.html',
  styleUrls: ['./academia-list.component.scss']
})
export class AcademiaListComponent implements OnInit {
  @Input() unidade!: IUnidade | null;
  locations: ILocation[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.locations = this.unidade?.locations;
  }
}
