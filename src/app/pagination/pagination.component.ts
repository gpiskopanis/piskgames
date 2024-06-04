import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../src/app/services/api_service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.getValues();
  }

  loadingData=[1,2,3,4,5,6];
  showLoading=true;

  categoriesData = [
    { id: 1, name: 'all' },
    { id: 2, name: 'To play' },
    { id: 3, name: 'Finished' },
    { id: 4, name: 'To Continue' },
    { id: 5, name: 'Abandoned' },
    { id: 6, name: 'IN PROGRESS' },
  ];

  filterData:any = [];
  resData:any;
  pageNo= 1;
  

  getValues()
  {
      this.service.getGoogleSheetValue().subscribe((result)=>{
         // console.log(result,'result###');
          result.data.shift();
          this.filterData = result.data;
          this.resData = result.data;
         // console.log(this.filterData,'filterDAta###');
          this.showLoading=false;

          
      });
  }



  filterDataVal(data:any)
  {
    let  getFilterVal = data.target.value;
    //console.log(getFilterVal,'getFilterVal##');
    
    if(getFilterVal === 'all')
    {
        this.filterData = this.resData;
    }else 
    {
      this.filterData = [];
        this.resData.filter((ele:any)=>{

          if(ele.GAME_STATE == getFilterVal)
          {
                this.filterData.push(ele);
          }

        });
    }
}


}
