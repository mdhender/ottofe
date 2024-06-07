import { module, test } from 'qunit';
import { setupRenderingTest } from 'ottofe/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | app-shell-nav-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AppShellNavBar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AppShellNavBar>
        template block text
      </AppShellNavBar>
    `);

    assert.dom().hasText('template block text');
  });
});
