import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: 
    `
    <h1>Hello World</h1>
    <courses></courses>
    <authors></authors>
    
	<input type="text" [(ngModel)]="title" />
	<input type="button" (click)="title = ''" value="Clear" />
	Preview:{{ " " + title }}
    
    <i
    class="glyphicon" [class.glyphicon-star-empty]="star" [class.glyphicon-star]="!star" (click)="onClick()">
    </i>
	
	

    `,

    directives: [CoursesComponent, AuthorsComponent]

})
export class AppComponent {

	title = "Hello World";
	star = true;
	onClick(){
		this.star = !this.star;		
	}
}

