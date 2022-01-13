import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class LessonController extends Controller {
  lessonNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  lessonTitle = [
    'ONE',
    'TWO',
    'THREE',
    'FOUR',
    'FIVE',
    'SIX',
    'SEVEN',
    'EIGHT',
    'NINE',
    'TEN',
  ];
  @tracked routeVal = false;
}
