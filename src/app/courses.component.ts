import { Component } from '@angular/core';
@Component({
  selector:"courses",
  template:`
  <h2>{{title}}</h2>
  <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
  </ul>
  `
})
export class CoursesComponent{
title="Course List";
courses=["Course1","Course2","Course3","Course4"];
}