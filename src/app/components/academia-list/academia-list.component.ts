import { Component, OnInit, Input } from '@angular/core';
import {ILocation, IUnidade} from "../../models/IUnidade";

@Component({
  selector: 'app-academia-list',
  templateUrl: './academia-list.component.html',
  styleUrls: ['./academia-list.component.scss']
})
export class AcademiaListComponent implements OnInit {
  @Input() locations!: ILocation[];

  constructor() { }

  ngOnInit(): void {
  }
}
