import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LessonComponent extends Component {
    
    @tracked index = 1;

    @tracked
    lesson = {
        1: ["Lesson 1:", "Lesson"],
        2: ["Lesson 2:", "2"],
        3: ["Lesson 3:", ""]

    }

    @tracked lessonpara = this.lesson[this.index]
    @tracked lessonparaSolid = this.lesson[this.index]

    @tracked rInput = '';
    @tracked rVal = '';
    @tracked correct = false;

    @action
    regexFind() {
        this.lessonpara = this.lesson[this.index]
        this.lessonparaSolid = this.lesson[this.index]
      let val1 = this.lessonpara[0]
      let val2 = this.lessonpara[1]

      console.log(val1)
      this.rInput = document.getElementsByClassName('rInput')[0].value;
      this.rVal = new RegExp(this.rInput, 'g');
      this.lessonpara = []
      this.lessonpara.push(val1.replace(this.rVal, `<span>$&</span>`), val2)

      console.log(this.lessonpara, "This is it!")
      console.log(val1, val2)
      if (val1.replace(this.rVal, `<span>$&</span>`) === val1.replace(val2, `<span>$&</span>`)) {
          this.index = this.index+1
          this.correct = true
      }

      else {
        this.correct = false
      }
    }

    @action
    nextLesson() {

        this.correct = false
        this.lessonpara = this.lesson[this.index]
        this.lessonparaSolid = this.lesson[this.index]
    }
}
