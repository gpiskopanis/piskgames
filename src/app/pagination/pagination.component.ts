import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  pages: number[] = [1, 2, 3, 4, 5, 6];  // Adjust this based on your actual number of pages

  changePage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }
}
