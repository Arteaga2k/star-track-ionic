import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FavoritePage } from '../pages/favorite/favorite';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { TrackDetailPage } from '../pages/track-detail/track-detail';
import { Moment } from '../pipes/moment';
import { NativeMedia } from '../providers/native-media/native-media';
import { SpotifyService } from '../providers/spotify-service/spotify-service';
import { Storage } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    MenuPage,
    SearchPage,
    TrackDetailPage,
    Moment
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    MenuPage,
    SearchPage,
    TrackDetailPage
  ],
  providers: [SpotifyService, NativeMedia, Storage]
})
export class AppModule { }
