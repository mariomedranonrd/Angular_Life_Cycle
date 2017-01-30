import {
  Component,
  Input,
  ViewChild,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div #viewEl> Single Property {{name}}</div>
    <div> Object Property {{account.id}}</div>
    <ng-content></ng-content>
  `,
  styles: []
})
export class TestComponent {
  @Input() name: string;
  @Input() account: Object;

  @ViewChild('viewEl') viewEl: HTMLElement; 
  @ContentChild('contentEl') contentEl: HTMLElement; 
    
  constructor() { }  
  ngOnChanges(changeRecord) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    this.log('ngOnChanges');
    console.log(this.viewEl);
    console.log(this.contentEl);    
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.log('ngOnInit');
    console.log(this.viewEl);
    console.log(this.contentEl);
  } 
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.log('ngDoCheck');
    console.log(this.viewEl);
    console.log(this.contentEl);
  }
  ngAfterContentInit() {    
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.log('ngAfterContentInit');
    console.log(this.viewEl);
    console.log(this.contentEl);
  }
  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.log('ngAfterContentChecked');
    console.log(this.viewEl);
    console.log(this.contentEl);
  }
  ngAfterViewInit() {    
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.log('ngAfterViewInit');
    console.log(this.viewEl);
    console.log(this.contentEl);
  }
  ngAfterViewChecked() {    
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.log('ngAfterViewChecked');
    console.log(this.viewEl);
    console.log(this.contentEl);
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.log('ngOnDestroy');
    console.log(this.viewEl);
    console.log(this.contentEl);
  }

  private log(state: string) {
    console.log(state);
  }
}