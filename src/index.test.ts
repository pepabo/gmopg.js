import test from 'ava'
import * as gmopg from './index'

test('export GMOPG instance as module', (t) => {
  t.true(gmopg instanceof Object)
})
