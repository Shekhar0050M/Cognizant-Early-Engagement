import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    courses: {title:string, level:string}[] = [
    {title:"Introduction to .NET Core",level:"Intermediate"},
    {title:"Understanding APIs",level:"Intermediate"},
    {title:"Introduction to HTML5",level:"Beginner"},
    {title:"Basics of TypeScript",level:"Beginner"},
    {title:"Introduction to Docker Containers",level:"Advanced"},
    {title:"Algorithms and Data Structures",level:"Advanced"},
];
}
