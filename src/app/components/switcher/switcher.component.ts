import {Component} from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})

export class SwitcherComponent {

  panel_isVisible = false;
  themeList = ['default','pink','yellow','green','purple','light-blue'];

  public windowScroll() :void {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      // @ts-ignore
      document.getElementById("back-to-top").style.display = "inline";
    } else {
      // @ts-ignore
      document.getElementById("back-to-top").style.display = "none";
    }
  }

  public colorParamPanel() :void{
    this.panel_isVisible = !this.panel_isVisible;
  }

  public setTheme(theme : string): void{
    // @ts-ignore
    document
      .getElementById('color-opt')
      .setAttribute('href', 'assets/css/colors/' + theme + '.css');
  }


}
