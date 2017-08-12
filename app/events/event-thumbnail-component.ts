import{Component,Input, Output , EventEmitter} from '@angular/core'
@Component({
    templateUrl:'app/events/eventThumbnail.html',
    selector:'event-thumbnail'
})
export class EventThumbnail{
   @Input() event:any; 
   @Output() eventEmitted = new EventEmitter();

    handleClick():void{
        this.eventEmitted.emit(this.event.name);
   }
   someProperty:any="This name from child"
}