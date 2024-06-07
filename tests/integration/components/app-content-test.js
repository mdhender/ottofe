import { module, test } from 'qunit';
import { setupRenderingTest } from 'ottofe/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | app-content', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AppContent />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AppContent>
        template block text
      </AppContent>
    `);

    assert.dom().hasText('template block text');
  });
});
