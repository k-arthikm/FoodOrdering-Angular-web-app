import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class CommonService {
public apiUrl:string="http://localhost/food-ordering-system-master/api/";
  /**
   * name
   */
  constructor(private httpObj: HttpClient){

  }
  public cs() {
    console.log("in cs");

  }
  public calculateTotal(order) {
    //console.log("order::", order);

    let total = 0;
    if ("itemDetails" in order) {
      let obj = order.itemDetails.map(value => {
        total = parseInt(value.price) + total;


      });
      return total;
    }
  }

   httpPost(url,param){
    let common_url=this.apiUrl;
    return this.httpObj.post<any>(common_url+url,param)

  }


}