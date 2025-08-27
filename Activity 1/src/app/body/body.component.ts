import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
  //array of colors
  colors: string[] = ['#2c3e50','#e74c3c','#3498db','#9b59b6','#1abc9c','#f39c12']
  currentColorIndex: number = 0;

  //function to change color of name
  changeNameColor(){
    this.currentColorIndex = (this.currentColorIndex+1) % this.colors.length;
  }

  //get current color
  get currentColor(): string{
    return this.colors
    [this.currentColorIndex];
  }

  profile = {
    name: 'Isaac A. Bagsangi',
    title: "Software Developer",
    about: "You're favorite artist's favorite artist",
    skills:
    ['Angular', 'Typescript', 'HTML/CSS', 'Responsive Design'],
    experience: [
      {
        role: 'Web Developer',
        company: 'TechSolutions',
        period: '2022-Present',
        description: 'Developing and maintaining applications using Angular and related technologies',
      },

      {
        role: 'Frontend Intern',
        company: 'Digital Creations',
        period: '2021-2022',
        description: 'Assisted in building responsive user interfaces and implementing new features',
      }
    ],
    education: {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Baguio',
      year: '2027'
    },
    contact: {
        email: 'isaac.bagsangi@kinemberly.com',
        phone: '(+63) 09123456789',
        location: 'Baguio, Philippines'
    }

  }
}
