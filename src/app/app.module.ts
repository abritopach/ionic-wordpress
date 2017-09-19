import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WordPressProvider } from '../providers/word-press/word-press';
import { WpApiModule, WpApiLoader, WpApiStaticLoader} from 'wp-api-angular'

export function WpApiLoaderFactory(http) {
    return new WpApiStaticLoader(http, 'https://devdactic.com//wp-json/');
}

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        WpApiModule.forRoot({
            provide: WpApiLoader,
            useFactory: (WpApiLoaderFactory),
            deps: [Http]
        }),
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        WordPressProvider
    ]
})
export class AppModule {}
