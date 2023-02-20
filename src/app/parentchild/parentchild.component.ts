import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.css']
})
export class ParentchildComponent implements OnInit {
  title = 'angApp';
  @Input() myinputMsg: string = "";
  constructor() { }
  myInputMessage: string ="I am parent component";

  ngOnInit(): void {
    console.log(this.myinputMsg);

  }
}
