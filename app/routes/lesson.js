import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export default class LessonRoute extends Route {
  @tracked routeVal = false;
}
