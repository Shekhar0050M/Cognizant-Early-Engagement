import { Component } from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  templateUrl: './serverstatus.component.html',
  styleUrls: ['./serverstatus.component.css']
})
export class ServerstatusComponent {
    serverID: number=10;
    status:string='Not Available';
    constructor(){
        this.status=Math.random()>0.5?'Available':'Not Available';
    }
    getServerStatus():string {
        return this.status;
    }
    getColor():string {
        if(this.status==='Available'){
            return 'green';
        }
        else{
            return 'red';
        }
    }
}
