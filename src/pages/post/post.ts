import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../providers/word-press/word-press';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-post',
    templateUrl: 'post.html',
})
export class PostPage {

    post: Post;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.post = this.navParams.get('post');
    }

    ionViewDidLoad() {
    }

}
