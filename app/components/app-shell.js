import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AppShellComponent extends Component {
  @service router;

  @tracked isMobileMenuOpen = false;
  @tracked isProfileMenuOpen = false;

  activeRoute = this.router.currentRouteName;

  @action
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @action
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
