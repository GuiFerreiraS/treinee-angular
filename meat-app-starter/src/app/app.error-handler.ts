import { Observable } from 'rxjs/Observable'
import {HttpErrorResponse} from '@angular/common/http'

export class ErrorHandle {
    static handleError(error: Response | any){
        let errorMessage: string
        if(error instanceof Response){
            errorMessage =`Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        }else{
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage);
    }
}