import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'no server created';
    serverName = 'Default name';
    serverCreated = false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {

    }

    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = 'server was created. Name is ' + this.serverName;
    }

    onUpdateServerName(event: any) {
        this.serverName = event.target.value;
    }
}
