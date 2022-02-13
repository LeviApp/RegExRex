import RESTAdapter from '@ember-data/adapter/rest';

export default class LessonAdapter extends RESTAdapter {
    host = "https://quotesnodejs.herokuapp.com";
    pathForType() {
        return "quotes";
    }
}
// https://quotesnodejs.herokuapp.com/quotes/
// https://localhost:5001/api/lessons/