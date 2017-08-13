import{Injectable} from '@angular/core'
declare let toastr:any

@Injectable()

export class ToastrService{
    DisplaySuccess(message:string,title?:string){
        toastr.success(message);
    }

}