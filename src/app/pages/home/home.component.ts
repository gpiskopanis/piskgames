import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../src/app/services/api_service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: ApiService) {  }

  ngOnInit(): void {
    //console.log('initialized home');
    this.getValues();
  }

  loadingData = [1, 2, 3, 4, 5, 6];
  showLoading = true;
  showBanner = true; // Add this property to control the visibility of the banner

  categoriesData = [
    { id: 1, name: 'all' },
    { id: 2, name: 'To play' },
    { id: 3, name: 'Finished' },
    { id: 4, name: 'To Continue' },
    { id: 5, name: 'Abandoned' },
    { id: 6, name: 'IN PROGRESS' },
  ];

  filterData: any[] = [];
  resData: any[] = [];
  pageNo = 1;

  getValues() {
    this.service.getGoogleSheetValue().subscribe((result) => {
      //console.log(result, 'result###');
      const dataWithoutFirstRow = result.data.slice(1);
      this.filterData = dataWithoutFirstRow;
      this.resData = dataWithoutFirstRow;
      //console.log(this.filterData, 'filterData###');
      this.showLoading = false;
    });
  }

  filterDataVal(data: any) {
    let getFilterVal = data.target.value;
    //console.log(getFilterVal, 'getFilterVal##');
    if (getFilterVal === 'all') {
      this.filterData = this.resData;
    } else {
      this.filterData = [];
      this.resData.filter((ele: any) => {
        if (ele.GAME_STATE == getFilterVal) {
          this.filterData.push(ele);
        }
      });
    }
  }

  // Function to hide the banner
  toggleBanner() {
    this.showBanner = !this.showBanner; // Toggle the value of showBanner
  }





}
