import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  // Check the console to see these in action

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('Text input: ' + this.text);
  }
  
  // ngOnChanges fires whenever the input/inputs change (in this case the "text" input)
  // Angular then automatically produces a "changes" object that provides information
  // on the changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // Invoked by Angular whenever it thinks a UI update may be needed. This occurs
  // whenever it detects any event that could lead to data changes in the entire
  // application, not just in this component. Whataevr code you execute in here will
  // run A LOT
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // Content is anything that is projected into a view
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // A view is a template in Angular
  ngAfterViewInit() {
    console.log('ngAfterViewInit');

  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // Used for cleanup, executed right before the component instance is about to be
  // destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
