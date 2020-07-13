import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-table-interaction',
  templateUrl: './table-interaction.component.html',
  styleUrls: ['./table-interaction.component.scss']
})
export class TableInteractionComponent implements OnInit {

  otabledatfromparent=[];

  constructor() { }

  ngOnInit(): void {

    this.otabledatfromparent.push({name:"Hemanth",companyName:"Newage",location:"Bangalore",gender:"Male"});
    this.otabledatfromparent.push({name:"Sankar",companyName:"Newage",location:"Bangalore",gender:"Male"});
    this.otabledatfromparent.push({name:"Thanga",companyName:"Newage",location:"Chennai",gender:"Male"});
    this.otabledatfromparent.push({name:"Anusha",companyName:"Newage",location:"Bangalore",gender:"Female"});
    this.otabledatfromparent.push({name:"Vikram",companyName:"Newage",location:"Bangalore",gender:"Male"})
  }

}
