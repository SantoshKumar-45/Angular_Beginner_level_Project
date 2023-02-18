import { Component,OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ApiSvc';
  Apiuser:any=[];
  Products:any=[];

constructor(private UserSvc : ProductsService ,private Productsvc:ProductsService){}

ngOnInit():void {
  this.GetUser();
  this.Getproduct();
}
GetUser(){
  this.UserSvc.GetUserDetail().subscribe((User)=>{
    // console.log(User);
    this.Apiuser=User;
  });
}
Getproduct(){
this.Productsvc.GetProducts().subscribe((product)=>{
this.Products=product;
console.log(product);
});
}
}
