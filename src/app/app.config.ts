import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule para usar ngModel
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Ajuste conforme o caminho correto
import { AddDogComponent } from './pages/add-dog/add-dog.component'; // Ajuste conforme o caminho correto

@NgModule({
  declarations: [
    AppComponent,
    AddDogComponent, // Declare o componente AddDogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicione FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ]
};

bootstrapApplication(AppComponent, appConfig);