import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    // this.userService.activatedEmitter.emit(true);

    // tslint:disable-next-line:max-line-length
    // We know observables, we can subscribe to them as you learned but they're rather passive. You'll learn how to create your own observable but the core idea always is that you wrap a callback or an event or something like that. A subject is different, a subject also is an object you can subscribe to but it's more active because you can actively call next on it from outside. Remember in the observable, we also called next but that was from inside the observable when we created it. So that is a more active observable that is perfect when we want to use it as an event emitter, so if we don't have a passive event source, like an HTTP request or DOM events but if we have something that actively needs to be triggered by us in our application and that's exactly the use case we have here.
    this.userService.activatedEmitter.next(true);
  }
}
