import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HttpClient } from '@angular/common/http';

interface ListOfData {
  name: string;
  age: number;
  password: string;
  email: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  listOfData: ListOfData[] = []; // 定义数组一定要进行初始化，否则ts 编译以后不会对其定义，导致数组函数无法使用

  requireUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.requestData();
  }

  
  requestData() {
    let lists: ListOfData[] = [];
    this.http.get(this.requireUrl).subscribe(data => {
      let ret = Array.prototype.slice.call(data); // 将对象转为数组进行下一步遍历
      ret.forEach(element => {
        let list: ListOfData = {
          name: element.name,
          age: element.age,
          email: element.email,
          password: element.password
        };
        lists.push(list);
      });
      
    this.listOfData = lists;

    });

    this.listOfData = [
      {
        password: '1',
        name: 'John Brown',
        age: 32,
        email: 'New York No. 1 Lake Park'
      },
      {
        password: '2',
        name: 'Jim Green',
        age: 42,
        email: 'London No. 1 Lake Park'
      },
      {
        password: '3',
        name: 'Joe Black',
        age: 32,
        email: 'Sidney No. 1 Lake Park'
      }
    ];


  }

}