import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ItemData {
  gender: string;
  name: Name;
  email: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

@Injectable()

export class RandomUserService {
  randomUserUrl = 'https://api.randomuser.me';

  getUsers ( 
    pageIndex: number = 1,
    pageSize: number = 10,
    sortField: string,
    sortOrder: string,
    genders: string[]
  ): Observable<{results: ItemData[] }> {
    let params = new HttpParams()
    .append('page', `${pageIndex}`)
    .append('results', `${pageSize}`)
    .append('sortField', sortField)
    .append('sortOrder', sortOrder);
    genders.forEach(gender => {
      params = params.append('gender', gender);
    });
    return this.http.get<{ results: ItemData[] }>(`${this.randomUserUrl}`, {
      params
    });
    }

    constructor(private http: HttpClient) {}

}

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.less'],
  providers: [RandomUserService]
})
export class BasicFormComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData: ItemData[] = [];
  loading = true;
  sortValue: string | null = null;
  sortKey: string | null = null;
  filterGender = [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }];
  searchGenderList: string[] = [];

  sort(sort: { key: string; value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.randomUserService
      .getUsers(this.pageIndex, this.pageSize, this.sortKey!, this.sortValue!, this.searchGenderList)
      .subscribe(data => {
        this.loading = false;
        this.total = 200;
        this.listOfData = data.results;
      });
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.searchData();
  }

}