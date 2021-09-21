import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

// import { HttpSpinSerService } from '../services/http-spinner-ser.service';
// import { TokenSerService } from '../modules/admin/services/token-ser.service';
// import { NotifyService } from '../GlobalServices/notify.service';
// import { LoginService } from '../modules/admin/services/login.service';
@Injectable()
export class HttpAppInterceptor implements HttpInterceptor {

  constructor(
    // private auth:AuthService,
    // private notify:NotifyService
     ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // this.auth.isLoading.next(true);

    const token="123"
    // const newToken=token.replace(/^"(.*)"$/, '$1');
     const newRequest=request.clone({
      headers: request.headers.set("Authorization",
      "Bearer " +token)
     });

     return next.handle(newRequest).pipe(
  tap((event: HttpEvent<any>) => {

    if (event instanceof HttpResponse && event.status === 200) {
      // this.auth.isLoading.next(false);
    }
  },(err:any)=>{
    // this.auth.isLoading.next(false);
    if (err.status=="401")
    {
      // this.auth.loggedoutSuccessfully();
    }
    else if (err.status=="409")
    {

      // this.notify.showModal(ErrorComponent,{error:err.message,statusText:err.statusText,message:err.error.message});  
    }
    else
    {
  
      // this.notify.showModal(ErrorComponent,{error:err.message,statusText:err.statusText})   
   
    }
  })
);

  }
}
