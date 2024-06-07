import { module, test } from 'qunit';
import { setupRenderingTest } from 'ottofe/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hero-content', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<HeroContent />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <HeroContent>
        template block text
      </HeroContent>
    `);

    assert.dom().hasText('template block text');
  });
});
