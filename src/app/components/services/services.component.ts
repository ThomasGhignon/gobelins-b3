import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicesData: any[];

  @Output() changeFeaturesTitleEvent = new EventEmitter<string>();

  constructor() {
    this.servicesData = [
      {
        img: 'ti-settings',
        title: 'Digital Design',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation\n ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        img: 'ti-palette',
        title: 'Unlimited Colors',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation\n ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        img: 'ti-stats-up',
        title: 'Strategy Solutions',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation\n ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        img: 'ti-package',
        title: 'Awesome Support',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation\n ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        img: 'ti-dashboard',
        title: 'Truly Multipurpose',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation\n ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        img: 'ti-headphone',
        title: 'Easy to customize',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation\n ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ];
  }

  ngOnInit(): void {
  }

  emitChangeFeaturesTitleEvent(event:string){
    this.changeFeaturesTitleEvent.emit(event);
    console.log('emitChangeFeaturesTitleEvent = ' + event )
  }

}
