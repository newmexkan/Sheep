import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { MessageComponent, MessageListComponent } from "./messages";
import { MessageFormComponent } from "./message-form";
import { MessageService } from "../shared/services/message/message.service";
import {ThreadService} from "../shared/services/thread/thread.service";
import {ThreadListComponent} from "./threads/thread-list/thread-list.component";
import {ThreadComponent} from "./threads/thread/thread.component";
import {Mypipe} from "../shared/pipes/mypipe.pipe";
import {AIService} from "../shared/services/extern/ai/ai.service";
import {IFramePipe} from "../shared/pipes/IFramePipe";
import {FrameComponent} from "./frame/frame.component";

@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    ThreadComponent,
    ThreadListComponent,
    MessageComponent,
    IFramePipe,
    FrameComponent
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessageService,ThreadService,AIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
