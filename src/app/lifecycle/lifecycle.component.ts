import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() color: 'red' | 'yellow' | 'green' = 'red';


  constructor() {
    console.log('constructor');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('changes', simpleChanges)
    console.log('ngOnChanges');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  ngOnViewInit() {
    console.log('ngOnViewInit');
  }
  ngOnViewChanges() {
    console.log('ngOnViewChanges');
  }
  ngOnContentInit() {
    console.log('ngOnContentInit');
  }
  ngOnContentChanges() {
    console.log('ngOnContentChanges');
  }

}
