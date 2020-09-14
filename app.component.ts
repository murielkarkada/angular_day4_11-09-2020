import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:
  `
  <h1 >Examples for attribute directives </h1>
  <div style='color:red' > Class Binding.... </div>
  <table>
  <tr><td>
  <button class= 'classUnderline'> button 1 </button>
  </td></tr>
  <tr><td>
  <button [class.boldClass]= 'boldClass'> button 2 </button>
  </td></tr>
  <tr><td>
  <button class= 'classUnderline classColor'> button 3 </button>
  </td></tr>
  <tr><td>
  <button [ngClass]= 'addClasses()'> button 4 </button>
  </td></tr>
  </table>

<table border=2>
  <tr><td>
  <div [ngClass]="'boldClass'" > {{name1}} {{id1}} </div>
  </td></tr>
  <tr><td>
  <div [ngClass]="'boldClass'" > {{name2}} {{id2}} </div>
  </td></tr>
  </table>


<div style='color:red' > Style Binding....</div>
  <button style='color:aqua'
          [style.font-weight]="isBold? 'bold':'normal'"> new button </button>

  
   <button style='color: crimson' 
           [ngStyle]="addStyles()"> My Button </button>

    <div style='color:purple' [style.font-weight]="isBold? 'bold':'normal'" > 
         this is a div block 
    </div>  
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  boldClass: boolean = true;
  applyItalicsClass : boolean=true;
  isBold:boolean = true;
  fontSize=30;

  addClasses()
  {
    let classes={
      boldClass : this.boldClass,
      italicsClass : this.applyItalicsClass
    };
    return classes;
  }
  
  addStyles()
  {
    let styles = {   
      'font-weight' : this.boldClass ? 'Bold': 'normal',
      'font-size.px': this.fontSize
  };
   return styles;
} 
 
  name1:string="Amit"
  id1:number=7

  name2:string="Jhon"
  id2:number=8

  name3:string="Laura"
  id3:number=9

  name4:string="Daniel"
  id4:number=10

  // students : any[]=[
  //   {
  //     name  ="Amit",
  //     id =7
  //   },
  //   {
  //     name="Jhon",
  //     id=8
  //   },
  //   {
  //     name="Laura",
  //     id=9
  //   }
  // ];
  
}

