import Model, { attr } from '@ember-data/model';

export default class LessonModel extends Model {
  @attr("string") title;
  @attr("string") text_body;
  @attr("string") img_url;

  @attr("date") created_at;
  @attr("date") updated_at;
}
