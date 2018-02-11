import { Component } from '@angular/core';

import { PostPage } from '../post/post';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PostPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
