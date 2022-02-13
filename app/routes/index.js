import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  value = true;

  // beforeModel() {
  //     if (this.value) {
  //         return this.transitionTo("lesson")
  //     }
  // }

  model() {
    console.log('testing the index model');
  }
}
