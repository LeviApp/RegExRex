import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | regex/game', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:regex/game');
    assert.ok(route);
  });
});
