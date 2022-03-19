import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import Ember from 'ember';
import { inject as service } from '@ember/service';
export default class LessonRoute extends Route {
  @service store;
  index;
  async model(params) {
    // let val = await this.store.findAll("lesson");
    // console.log("testing the posts", this.store.findAll("lesson"))
    // return val;
  }
}
