import { Component } from "@angular/core";  //To use Component as decorator, we first need to import it.
//This is a decorator below. From this, Angular will know, that "ServerComponent" is not just a class, BUT a component, as well
@Component({
    selector: 'app-server', //This is a unique selector. Here we tag the html, so we can use that later as a template, in other components as well.
    templateUrl: './server.component.html', //we need to give the relative (to the .ts file) way to the html here. 
    //By typing "template: `<app-server></app-server>`, we can add the same template, as inline.". Only 1 template can be added!
    styleUrls: ['./server.component.css']  //we can add the style with relative path like this, or internal, with "style: [``] syntax". 
    //As style expects array, multiple style files can be added.
}) 
export class ServerComponent {
    //this is a normal TS class. The name "ServerComponent" comes by convention. 
    serverID: number = 10;
    serverStatus: string = "offline";
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";  //here we say: If Math.random() value is greater than 0.5, then set serverStatus to online, 
        //other wise set it to offline
    }
    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}