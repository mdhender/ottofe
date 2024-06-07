import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppShellNavBarComponent extends Component {
  @tracked isHamburgerMenuOpen = false;
  @tracked isProfileMenuOpen = false;

  isMapsPage = this.args.page === 'maps';
  isReportsPage = this.args.page === 'reports';
  isTurnsPage = this.args.page == 'turns';

  @action
  toggleHamburgerMenu() {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
  }

  @action
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
