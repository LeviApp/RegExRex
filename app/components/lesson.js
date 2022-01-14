import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LessonComponent extends Component {
    
    @tracked index = 1;

    @tracked
    lesson = {
        1: ["Lesson 1: Beginnings -- Welcome to the RegEx Rex course. RegEx is a way to search for patterns in text. You can search for letters, words, and digits. You can search for a certain length of words and a lot of other patterns. In normal searches, what is being used are literal characters. Searching for 'code' is searching for the exact pattern of letters that spell out the word. In the first couple of lessons, we will be focusing on literal characters to explore different patterns that RegEx can be used for. The first pattern we will discuss is the beginning. RegEx can be used to search for a pattern at the very start of a text block. Use the search bar above to solve the lesson's challenge. Ignore the second text box for now. Using literal characters, search for the first word in the following paragraph.", "Websites are built using three main languages: HTML, CSS, and JavaScript. These three languages are usually explained by comparing them to a house. HTML is the physical brick of the house. It is the physical content which makes up the website. CSS is the paint you apply to the brick or door. It makes the content on the webpage look better. JavaScript is the doorbell of the house. Its responsibility is to produce some kind of functionality to the house. JavaScript does the same with the website.", "Websites"],
        2: ["Lesson 2: The In-Between -- Another pattern that RegEx accounts for is, obviously, found in the middle. RegEx isn't only for patterns at the start of a text block. At any point in the middle of a text block, RegEx can search for a pattern. Roses are red and violets are blue. Using literal characters, search for the word in the following paragraph that best describes a jpeg if you want to continue.", "There are two main aspects to websites. The Front End is the visual side of the webpage. It includes elements such as the paragraph, image, and color. The Front End is very important to get right. It must be laid out correctly and visually appealing. It must be user-friendly. The Back End involves all of the data that a user might need. When a user needs to see an email, the Back End works behind the scenes to get that information. It includes apis, servers, routes, and automation.", "image"],
        3: ["Lesson 3: The Finish -- The next pattern that deals with position is the ending. RegEx can find a pattern at the end of a text block. It doesn't matter what is at the end of a text block. It could be letters, words, numbers, or other characters. Punctuation is always good to consider when searching strings. This is important for the beginning, middle, or end of a text block. Using a literal pattern, find the last word in the following paragraph, including punctuation.", "While all websites will ultimately be using HTML, CSS, and JavaScript, this does not mean developers have not implemented technologies, called frameworks, to help them build websites. Frameworks can be used to build the Front End. Every framework has foundational code it implements under the hood. The three most popular frameworks for the Front End are React, Angular, and Vue. All three of these frameworks are based in the JavaScript programming language!", "language!"],
        4: ["Lesson 4: Flags -- Flags are characters you add at the end of a RegEx expression. The two main flags we will discuss are the global ('g') and case-insensitive ('i') flags. A proper RegEx expression looks like this. Example 1: /example/g"]
    }

    // @tracked
    // solution = {
    //     1: ["Welcome"],
    //     2: ["red"],
    //     3: ["punctuation!"]
    // }

    @tracked
    answer = this.lesson[this.index]

    @tracked lessonexplain = this.lesson[this.index][0]
    @tracked lessonpara = this.lesson[this.index][1]
    @tracked lessonparaSolid = this.lesson[this.index][1]
    @tracked solution = this.lesson[this.index][2]
    @tracked rInput = '';
    @tracked flagInput = '';

    @tracked rVal = '';
    @tracked correct = false;

    @action
    regexFind() {
        this.lessonexplain = this.lesson[this.index][0]
        this.lessonpara = this.lesson[this.index][1]
        this.lessonparaSolid = this.lesson[this.index][1]
        this.solution = this.lesson[this.index][2]

        this.rInput = document.getElementsByClassName('rInput')[0].value;
        this.flagInput = document.getElementsByClassName('flags')[0].value;
        this.rVal = new RegExp(this.rInput, this.flagInput);
        this.lessonpara = this.lessonpara.replace(this.rVal, `<span>$&</span>`)

        if (this.lessonparaSolid.replace(this.rVal, `<span>$&</span>`) === this.lessonparaSolid.replace(this.solution, `<span>$&</span>`)) {
            this.index = this.index+1
            this.correct = true
        }

        else {
        this.correct = false
        }
    }

    @action
    nextLesson() {
        document.getElementsByClassName('rInput')[0].value = "";
        this.correct = false;
        if (this.index <= Object.keys(this.lesson).length) {
            this.lessonexplain = this.lesson[this.index][0]
            this.lessonpara = this.lesson[this.index][1]
            this.lessonparaSolid = this.lesson[this.index][1]
            this.solution = this.lesson[this.index][2]    
        }
            else {
                this.lessonexplain = ""
                this.lessonpara = "CONGRATULATIONS! You finished RegEx Rex's course."
            }
    }
}
