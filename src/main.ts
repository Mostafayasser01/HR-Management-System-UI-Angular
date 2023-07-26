import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {registerLicense} from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCeUx0RHxbf1xzZFJMYF9bQXdPIiBoS35RdUVlW35feXRWQ2JeUkJy");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
