import{Component,Input, Output , EventEmitter} from '@angular/core'
@Component({
    templateUrl:'app/events/eventThumbnail.html',
    selector:'event-thumbnail',
    styles:[`
        .thumbnail{
            min-height:230px;
        }
        .green{color:green;}.bold:{font-weight:bold !important;}
       `
    ]
})
export class EventThumbnail{
   @Input() event:any; 
   @Output() eventEmitted = new EventEmitter();

    handleClick():void{
        this.eventEmitted.emit(this.event.name);
   }
   someProperty:any="This name from child"

   applyClass(){
       if(this.event.time=="8:00 am")
        return ['green','bold']
       return[]
   }
}