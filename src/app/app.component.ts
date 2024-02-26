import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesComponent } from './Components/features/features.component';
import { FlashSaleSectionComponent } from './Components/flash-sale-section/flash-sale-section.component';
import { ProductsSectionComponent } from './Components/products-section/products-section.component';
import { NewArrivalSectionComponent } from './Components/new-arrival-section/new-arrival-section.component';
import { BestSellerSectionComponent } from './Components/best-seller-section/best-seller-section.component';
import { FooterComponent } from './Components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet ,
    FontAwesomeModule,
    HeaderComponent,
  FeaturesComponent,
  FlashSaleSectionComponent,
  ProductsSectionComponent,
  NewArrivalSectionComponent,
  BestSellerSectionComponent,
  FooterComponent
 ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user';
}
