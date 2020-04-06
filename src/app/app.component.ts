import { Component, Input, OnInit } from '@angular/core';
import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-angularHomework1';
  time: number = 0;
  pauseHour: boolean = false;
  pauseMinute: boolean = false;
  pauseSecond: boolean = false;
  pauseAMPM: boolean = false;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  AMPM:string = 'AM';
  
  editHour() {
    this.pauseHour = true;
    console.log(this.pauseHour);
  }
  editMinute() {
    this.pauseMinute = true;
  }
  editSecond() {
    this.pauseSecond = true;
  }
  editAMPM() {
    this.pauseAMPM = true;
  }

  showHour(value1) {
    if (value1>=12) {
      value1 = 11;
    }
    this.time += (value1-this.hour)*3600;
    this.hour = value1;
    this.pauseHour = false;
  }
  showMinute(value2) {
    if (value2>=60) {
      value2 = 59;
    }
    this.time += (value2-this.minute)*60;
    this.minute = value2;
    this.pauseMinute = false;
  }
  showSecond(value3) {
    if (value3>=60) {
      value3 = 59;
    }
    this.time += value3-this.second;
    this.second = value3;
    this.pauseSecond = false;
  }
  showAMPM(value4) {
      this.AMPM = value4;
      this.pauseAMPM = false;
  }



  constructor() {
      setInterval(() =>{
        if ((!this.pauseHour) && (!this.pauseMinute) && (!this.pauseSecond)) {
          this.time += 1;
        this.hour = (this.time-this.time%3600)/3600;
        if (this.hour>11) {
          this.hour = 0;
          if (this.AMPM="AM") {
            this.AMPM = "PM";
          } else {
            this.AMPM = "AM";
          }
          this.time = 0;
        }
        this.minute = (this.time%3600-this.time%60)/60;
        this.second = this.time%60;
      }
      },1000);
  }
  

  values: string = '';
  onKey($event:KeyboardEvent) {
    this.values = (<HTMLInputElement>event.target).value;
  }


}

