import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US, NZ_ICONS } from 'ng-zorro-antd';
// 引入Icon
import { IconDefinition } from "@ant-design/icons-angular";
import * as AllIcons from '@ant-design/icons-angular/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BasicFormModule } from './pages/basic-form/basic-form.module';
import { MonitorModule } from './pages/monitor/monitor.module';
import { WorkplaceModule } from './pages/workplace/workplace.module';

registerLocaleData(en);
// 定义ICON
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
}
const icons: IconDefinition[] = Object.keys(antDesignIcons)
            .map(key => antDesignIcons[key]);

@NgModule({
  // declarations 需要定义本模块的组件，管道等，注意要把本模块下的所有组件添加到该处
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IconsProviderModule,
    // FormsModule,
    // ReactiveFormsModule,
    // NgZorroAntdModule,
    AppRoutingModule,
    HttpClientModule,
    BasicFormModule,
    BrowserAnimationsModule,
    // 以下三个模块需要导入到主模块下，否则该模块下的form无法使用
    MonitorModule, 
    WorkplaceModule,
    BasicFormModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    // 把图标服务注入到主模块中
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
