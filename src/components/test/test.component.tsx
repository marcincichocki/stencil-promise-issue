import { Component, ComponentInterface, Prop } from '@stencil/core';
import { test, wait } from '../../utils/wait';

@Component({
  tag: 'my-test',
  styleUrl: './test.component.scss',
  shadow: true,
})
export class TestComponent implements ComponentInterface {
  @Prop() active = false;

  async componentWillLoad() {
    // test() is a NATIVE promise, even though window.Promise is patched by zone.js
    // Promise is a ZoneAwarePromise
    console.log(test() instanceof Promise); // false, this is default behavior now in stencil.js
    console.log(new Promise(() => {}) instanceof Promise); // true

    console.log(1);

    await wait(1000);

    console.log(2);
  }

  render() {
    console.log(3);
  }
}
