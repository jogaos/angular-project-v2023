import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {

  ngOnInit(){
    this.setCurrentDate();
  }

  fullName: String = "";
  currentDate: String = "";
  innerClass: String = 'menu';
  header: String = "Programación web - 2023";

  menuList = ['Menu # 1', 'Menu # 2', 'Menu # 3', 'Menu # 4'];

  textList = [
    { id: 1, text: " Programación web mi primer proyecto en Anagular JS" },
    { id: 2, text: " Programación web mi primer proyecto en Anagular JS" },
    { id: 3, text: " Programación web mi primer proyecto en Anagular JS" }];

    setCurrentDate(){
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth() + 1; //January is 0!
      var year = today.getFullYear();
      var hour = today.getHours();
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();
  
      var dd,mm;
  
      if (day < 10) {
        dd = '0' + day;
      } else {
        dd = day;
      }
  
      if (month < 10) {
        mm = '0' + month;
      }else {
        mm = month;
      }
  
      this.currentDate = dd + '/' + mm + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
    }
}
