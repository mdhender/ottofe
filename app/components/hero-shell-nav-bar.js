import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HeroShellNavBarComponent extends Component {
    @tracked isHamburgerMenuOpen = false;

    @action
    toggleHamburgerMenu() {
      this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
    }
}
