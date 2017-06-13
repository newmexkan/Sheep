import {Component, Input, OnInit} from "@angular/core";
import {MessageModel} from "../../shared/models/MessageModel";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: "app-frame",
  templateUrl: "./frame.component.html",
  styleUrls: ["./frame.component.css"]
})
export class FrameComponent implements OnInit {

  @Input() message: MessageModel;
  public trustURL: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

  }

  /**
   * Fonction ngOnInit.
   * Cette fonction est appelée après l'execution de tous les constructeurs de toutes les classes typescript.
   * Cette dernière s'avère très utile lorsque l'on souhaite attendre des valeurs venant de d'autres composants.
   * Notre composant qui prend en @Input un message. Les @Input ne sont accessibles uniquement à partir du ngOnInit,
   * pas dans le constructeur. Si vous souhaitez manipuler votre message lors du chargement du composant, vous devez
   * le faire dans le ngOnInit.
   */
  ngOnInit() {
    console.log("content : " + this.message.content);
    console.log("https://www.youtube.com/embed/" + this.message.content.match("v=[^&]*")[0].split("=")[1]);
    this.trustURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.message.content.match("v=[^&]*")[0].split("=")[1]);
  }

}