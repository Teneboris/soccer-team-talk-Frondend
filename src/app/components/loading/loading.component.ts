/*
import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {Observable, tap} from "rxjs";
import {LoadingService} from "../../services/loading.service";
import {RouteConfigLoadStart, Router} from "@angular/router";
import {AsyncPipe, NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  imports: [AsyncPipe, NgIf, NgTemplateOutlet],
})
export class LoadingComponent {

  loading$: Observable<boolean>;

  @Input()
  detectRouteTransitions = false;

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null;

  constructor(
    private loadingService: LoadingService,
    private route:Router) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    if (this.detectRouteTransitions) {
      this.route.events
        .pipe(
          tap((event) => {
            if (event instanceof  RouteConfigLoadStart) {
              this.loadingService.loadingOn();
            }else if (event instanceof RouteConfigLoadStart){
              this.loadingService.loadingOff();
            }
          })
        )
        .subscribe();
    }
  }
}
*/
