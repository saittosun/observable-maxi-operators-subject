import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  // tslint:disable-next-line:max-line-length
  // One important note, just as with your own observables, you should unsubscribe to your subjects though whenever you don't need them. So add onDestroy here to the app component
  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }

}
