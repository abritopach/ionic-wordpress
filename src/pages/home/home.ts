import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { WordPressProvider, Post } from '../../providers/word-press/word-press';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    loader: Loading;
    posts: Observable<Post[]>;

    constructor(public navCtrl: NavController, public wpProvider: WordPressProvider,
                public loadingCtrl: LoadingController) {

        /*
         Added a loading controller to indicate that we are loading stuff at the start of the app, and we dismiss this
         loading after we got data from our provider using .dismiss().
         */
        this.presentLoading();
        this.posts = this.wpProvider.getPosts();
        this.posts.subscribe(data => {
                console.log(data);
                this.loader.dismiss()
            }
        );
    }

    getUserImage(id: number) {
        return this.wpProvider.getUserImage(id);
    }

    getUserName(id: number) {
        return this.wpProvider.getUserName(id);
    }

    openPost(post: Post) {
        this.navCtrl.push('PostPage', {post: post});
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
    }

}
