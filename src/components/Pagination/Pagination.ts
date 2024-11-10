import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'Pagination',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, NgClass],
  templateUrl: './Pagination.html',
  styleUrls: ['./Pagination.scss']
})
export class Pagination implements OnChanges {
  @Input() $total: number = 180;
  @Input() $page: number = 1;
  @Input() $max: number = 18;
  @Output() pageChange = new EventEmitter<number>();

  totalPages: number = Math.ceil(this.$total / this.$max);

  pages: Array<string | number> = Array.from({length: this.totalPages}, (_, i) => i + 1);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['$total'] || changes['$max'] || changes['$page']) {
      this.updatePagination();
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.$total / this.$max);

    const pages: (number | string)[] = [];

    if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (this.$page > 3) {
        pages.push('...');
      }

      const startPage = Math.max(2, this.$page - 1);
      const endPage = Math.min(this.totalPages - 1, this.$page + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (this.$page < this.totalPages - 2) {
        pages.push('...');
      }

      pages.push(this.totalPages);
    }

    this.pages = pages;
  }

  nextPage() {
    if (this.$page < this.totalPages) {
      this.$page++;
      this.pageChange.emit(this.$page);
    }
  }

  prevPage() {
    if (this.$page > 1) {
      this.$page--;
      this.pageChange.emit(this.$page);
    }
  }

  goToPage(page: number | string) {
    if (page === '...') {
      return;
    }
    this.$page = page as number;
    this.pageChange.emit(this.$page);
  }
}
