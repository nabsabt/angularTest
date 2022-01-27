import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*template: `
  <app-server></app-server>
  <app-warningalert></app-warningalert>`,*/
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  serverCreationStatus:string = "No server was created yet.";
  serverName ="";
  userName = "";
  servers = ['TestServer'];

  constructor() { 
    //This (constructor) is a method, executed right when the component is created by Angular
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }
  ngOnInit(): void {
  
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  removeServer(){
    this.serverName="";
    this.servers = ['TestServer'];
    this.serverCreated = false;
  }

  onUpdateServerName(event: Event){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  resetUsername(){
    this.userName="";
  }

}
