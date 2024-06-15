import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api_service.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent implements OnInit, OnDestroy {
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

  private subscription: Subscription | undefined;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private service: ApiService) {
    // Clear data before page launches
    this.clearData();
  }

  ngOnInit(): void {
    this.getValues();
  }

  ngOnDestroy(): void {
    this.destroy$.next(); 
    this.destroy$.complete(); 
  }

  clearData() {
    this.filterData = [];
    this.resData = [];
    this.showLoading = true;
  }

  getValues() {
    this.showLoading = true; 
      this.subscription = this.service.getGoogleSheetValue().pipe(
        takeUntil(this.destroy$) 
      ).subscribe(
        (result) => {
          const dataWithoutFirstRow = result.data.slice(1);
          this.filterData = dataWithoutFirstRow;
          this.resData = dataWithoutFirstRow;
          this.showLoading = false; 
        },
        (error) => {
          console.error('Error fetching data', error);
          this.showLoading = false; 
        }
      );
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

