import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ContainerModule } from '../container/container.module';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, DropdownComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContainerModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class HeaderFooterModule { }
