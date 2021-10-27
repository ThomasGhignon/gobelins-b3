import {ChangeDetectorRef, Component, Inject, Input, OnInit, SimpleChanges} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  @Input() changeFeaturesTitle : string;

  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges){
    this.changeDetectorRef.detectChanges();
    console.log(changes);
  }

}
