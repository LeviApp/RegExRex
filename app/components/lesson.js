import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LessonComponent extends Component {
    
    @tracked index = 1;

    @tracked
    lesson = {
        1: ["Lesson 1: Beginnings", "Welcome to the RegEx Rex lessons. RegEx is a way to search for patterns in text. You can search for letters, words, and digits. You can search for a certain length of words and a lot of other patterns. In normal searches, what is being used are literal characters. Searching for 'code' is searching for the exact pattern of letters that spell out the word. In the first couple of lessons, we will be focusing on literal characters to explore different patterns that RegEx can be used for. The first pattern we will discuss is the beginning. RegEx can be used to search for a pattern at the very start of a text block. Using literal characters, your first challenge is to search for the first word in this paragraph."],
        2: ["Lesson 2: The In-Between", "Another pattern that RegEx accounts for is, obviously, found in the middle. RegEx isn't only for patterns at the start of a text block. At any point in the middle of a text block, RegEx can search for a pattern. Roses are red and violets are blue. Using literal characters, search for the rose's color in this paragraph if you want to continue."],
        3: ["Lesson 3: The Finish", "The next pattern that deals with position is the ending. RegEx can find a pattern at the end of a text block. It doesn't matter what is at the end of a text block. It could be letters, words, numbers, or other characters. The period and other marks are always good to consider when searching strings. This is important for the beginning, middle, or end of a text block. Using a literal pattern, find the last word in this paragraph, including punctuation!"]
    }

    @tracked
    solution = {
        1: ["Welcome"],
        2: ["red"],
        3: ["punctuation!"]
    }

    @tracked
    answer = this.lesson[this.index]

    @tracked lessonpara = this.lesson[this.index]
    @tracked lessonparaSolid = this.lesson[this.index]

    @tracked rInput = '';
    @tracked rVal = '';
    @tracked correct = false;

    @action
    regexFind() {
        this.lessonpara = this.lesson[this.index]
        this.answer = this.solution[this.index]

        this.lessonparaSolid = this.lesson[this.index]
        let val1 = this.lessonpara[0]
        let val2 = this.lessonpara[1]
        let val3 = this.answer[0]

        console.log(val3)
        this.rInput = document.getElementsByClassName('rInput')[0].value;
        this.rVal = new RegExp(this.rInput, 'g');
        this.lessonpara = []
        this.lessonpara.push(val1, val2.replace(this.rVal, `<span>$&</span>`))

        console.log(this.lessonpara, "This is it!")
        console.log(val1, val2)
        if (val2.replace(this.rVal, `<span>$&</span>`) === val2.replace(val3, `<span>$&</span>`)) {
            this.index = this.index+1
            this.correct = true
        }

        else {
        this.correct = false
        console.log("testing false")
        }
    }

    @action
    nextLesson() {
        document.getElementsByClassName('rInput')[0].value = "";
        this.correct = false;
        if (this.index <= Object.keys(this.lesson).length) {
            this.lessonpara = this.lesson[this.index]
            this.lessonparaSolid = this.lesson[this.index]
        }
            else {
                this.lessonpara = ["CONGRATULATIONS! You finished RegEx Rex's course."]
            }
    }
}
