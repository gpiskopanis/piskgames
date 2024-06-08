import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api_service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadingData = Array.from({ length: 40 }, (_, i) => i + 1); // Creating an array with 40 elements for skeleton loader
  showLoading = true;
  showBanner = true;

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

  constructor(private service: ApiService) {
    // Clear data before page launches
    this.clearData();
  }

  ngOnInit(): void {
    this.getValues();
  }

  clearData() {
    this.filterData = [];
    this.resData = [];
    this.showLoading = true;
  }

  getValues() {
    this.showLoading = true; // Ensure loading state is set to true before fetching data
    setTimeout(() => {  // Simulate delay for better user experience
      this.service.getGoogleSheetValue().subscribe(
        (result) => {
          const dataWithoutFirstRow = result.data.slice(1);
          this.filterData = dataWithoutFirstRow;
          this.resData = dataWithoutFirstRow;
          this.showLoading = false; // Update loading state after data is fetched
        },
        (error) => {
          console.error('Error fetching data', error);
          this.showLoading = false; // Ensure loading state is reset in case of an error
        }
      );
    }, 2000); // Artificial delay to simulate loading
  }

  filterDataVal(event: any) {
    const getFilterVal = event.target.value;
    if (getFilterVal === 'all') {
      this.filterData = this.resData;
    } else {
      this.filterData = this.resData.filter((ele: any) => ele.GAME_STATE === getFilterVal);
    }
  }

  toggleBanner() {
    this.showBanner = !this.showBanner;
  }
}
