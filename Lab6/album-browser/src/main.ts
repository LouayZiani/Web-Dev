import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), // tis to turn on the routing
    provideHttpClient() // dis to turn on HttpClient injection in services
  ]
})
  .catch((err) => console.error(err));
