import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LessonComponent extends Component {
    
    
    @tracked index = 9;

    @tracked
    lesson = {
        1: ["Lesson 1: Beginnings -- Welcome to the RegEx Rex course. RegEx is a way to search for patterns in text. You can search for letters, words, and digits. You can search for a certain length of words and a lot of other patterns. In normal searches, what is being used are literal characters. Searching for 'code' is searching for the exact pattern of letters that spell out the word. In the first couple of lessons, we will be focusing on literal characters to explore different patterns that RegEx can be used for. The first pattern we will discuss is the beginning. RegEx can be used to search for a pattern at the very start of a text block. Use the search bar above to solve the lesson's challenge. Ignore the second text box for now. Using literal characters, search for the first word in the following paragraph.", "Websites are built using three main languages: HTML, CSS, and JavaScript. These three languages are usually explained by comparing them to a house. HTML is the physical brick of the house. It is the physical content which makes up the website. CSS is the paint you apply to the brick or door. It makes the content on the webpage look better. JavaScript is the doorbell of the house. Its responsibility is to produce some kind of functionality to the house. JavaScript does the same with the website.", "Websites"],
        2: ["Lesson 2: The In-Between -- Another pattern that RegEx accounts for is, obviously, found in the middle. RegEx isn't only for patterns at the start of a text block. At any point in the middle of a text block, RegEx can search for a pattern. Roses are red and violets are blue. Using literal characters, search for the word in the following paragraph that best describes a jpeg if you want to continue.", "There are two main aspects to websites. The Front End is the visual side of the webpage. It includes elements such as the paragraph, image, and color. The Front End is very important to get right. It must be laid out correctly and visually appealing. It must be user-friendly. The Back End involves all of the data that a user might need. When a user needs to see an email, the Back End works behind the scenes to get that information. It includes apis, servers, routes, and automation.", "image"],
        3: ["Lesson 3: The Finish -- The next pattern that deals with position is the ending. RegEx can find a pattern at the end of a text block. It doesn't matter what is at the end of a text block. It could be letters, words, numbers, or other characters. Punctuation is always good to consider when searching strings. This is important for the beginning, middle, or end of a text block. Using a literal pattern, find the last word in the following paragraph, including punctuation.", "While all websites will ultimately be using HTML, CSS, and JavaScript, this does not mean developers have not implemented technologies, called frameworks, to help them build websites. Frameworks can be used to build the Front End. Every framework has foundational code it implements under the hood. The three most popular frameworks for the Front End are React, Angular, and Vue. All three of these frameworks are based in the JavaScript programming language!", "language!"],
        4: ["Lesson 4: Global Flag -- Flags are characters you add at the end of a RegEx expression that provide extra functionality. The first flag we will discuss is the global ('g') flag. A proper RegEx expression looks like this. Example 1: /website/. This example will only find the first item that matches the exact pattern. In this case, the first time the word 'website' is found in the text block. To find all items that match a given RegEx pattern, you must add the global flag at the end. Example 2: /website/g. This example will find all the items that match 'website' in the text block. In the following paragraph, find all the words that match 'framework'.", "Frameworks can also be used for the Back End. A popular Back End framework is Node.js. It implements JavaScript behind the scenes. A framework that uses Python as its base computer language is Django. This framework includes a lot of out-of-th-box functionality. It even has a user-interface for admins dealing with server data. Other frameworks developers use include Laravel (PHP framework), Spring Boot (Java framework), and .NET (C# framework).", "framework/g"],
        5: ["Lesson 5: Case-Insensitive Flag -- Flags are characters you add at the end of a RegEx expression that provide extra functionality. The second flag we will discuss is the case-insensitive ('i') flag. A proper RegEx expression looks like this. Example 1: /library/. This example will only find the first item that matches the exact pattern. In this case, the first time the word 'library' is found in the text block. To find any form of the word 'library' in a given RegEx pattern, you must add the case-insensitive flag at the end. Example 2: /library/i. This example will find the first item that match the word 'library', regardless of the case. In the following paragraph, help Anastasia find her name in the list of names. She accidentally typed her name wrong.", "Steve, John, Mary, Lisa, Caleb, Joseph, Joshua, Karla, Alyssa, Madison, Herald, Jesse, Sarah, Greg, Jane, Bob, aNAsTasIa, Anthony, Jill, Janet, Ned, Isaiah, Twyla, Betsy, Zachariah, Karen, Wesley", "Anastasia/i"],
        6: ["Lesson 6: Combined Flags -- Flags are characters you add at the end of a RegEx expression that provide extra functionality. There are other flags in RegEx. For the sake of simplicity though, we will only be using the global and case-insensitive flags. You can combine flags in a RegEx expression to allow for more functionality. Example 1: /SCIENCE/. This will only find the first item that matches the exact pattern of 'SCIENCE'. Example 2: /SCIENCE/gi. This example will find all items matching the pattern 'SCIENCE', regardless of the case of the letters. You are editting a Computer Science article and realize the original writer wrote the word 'JavaScript' in many different ways. In order to standardize the form of the word, find them all in the following paragraph.", "JAVASCRIPT, The Last Stand: Javascript is the only computer language you will ever need to know. It can do so much by itself. JavaScript can be used alone. This is called vanilla javascript. It is one of only three computer languages that browsers recognize. Every Front End framework has to convert code to these three foundations. Therefore, why not use a framework that is implemented using that base programming language of Javascript? framework. Many frameworks use it. React, Angular, Vue, Ember, and others all use JavaScript. Not only is javascript used as a Front-End framework, it can also be used in the Back End. Node.js is the Back-End framework. Furthermore, JAVASCRIPT has been used by programmers to build out libraries for the convenience of others to use. You need resources? Javascript is one of the most well-documented computer languages. Three cheers for JAVASCRIPT!", "JavaScript/gi"],
        7: ["Lesson 7: The Star Player -- We have been using literal characters up to this point. Now, we will start to introduce RegEx symbols that match certain text qualities. The first symbol we will discuss is the star (*). The * value will match zero or more of the previous character or group. Example 1: /ab/. This will match the first instance of the letter sequence, 'ab'. Example 2: /a*b*/. This RegEx expression will grab the first instance of a string that has zero (0) or more a's followed by zero (0) or more b's. Here are some items that would match this pattern: a, b, ab, aab, aabb, aaaaaaaaaaa, bbbb, abbbbbbbbb, aaaabbb. Keep order in mind when creating a RegEx pattern. Also, remember the flags that were just learned. Information is stored in bits on a computer. It is a series of 0's and 1's. Help this computer detect all of the 0's and 1's in the number of PI.", "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860", "1*0*/g"],
        8: ["Lesson 8: Plus! -- We have been using literal characters up to this point. Now, we will start to introduce RegEx symbols that match certain text qualities. The second symbol we will discuss is the plus symbol (+). The + value will match one or more of the previous character or group. Example 1: /XY/g. This will match all values that match 'XY' in the string. Example 2: /X+Y+/g. This RegEx expression will grab all values that have one (1) or more X's followed by one (1) or more Y's. Here are some items that would match this pattern: XY, XXY, XYY, XXYY, XXXY, XYYYYYYYY. Keep order in mind when creating a RegEx pattern. The example RegEx pattern will not match YYXX. Also, remember the flags that were just learned. You need to remove all the minus signs in the following Math paragraph because the formulas are incorrect. First you must find them.", "---- --- -- - 7 - 3 = 10, prove me wrong. 8 -- 9 = 89. I have never understood math. Why does 4 - 1 = -3 and --7 ---- 9 = 16? How does --x + --y = x + y? You really need to have a PhD to comprehend that -- sin x -- cos x -- tan x = -- csc x. Why math, oh why math! Why do you have to be so hard. 1 - 1 should be -1 and 2 - 2 should be -2. I will continue to fail tests until numbers 0 ----- 10 and 11 --------- 20 work correctly. Therefore, you win math! I will move on to better things. I don't need you anymore. - -- --- ----", "-+/g"],
        9: ["Lesson 9: This Is Optional -- We have discussed the * symbol (0 or more characters) and + symbol (1 or more characters). There is also a symbol for 0 or 1. This is the question mark (?). Example 1: /1234/g. This will match all the numbers '1234' in a string. Example 2: /123?4/g. This RegEx expression will match the number '1234', but it will also match '124', the number 3 was made optional because of the '?'. English can be confusing sometimes. Britain and America may use the same words, but sometimes the words can be spelled differently. For instance, the word 'dialog' in England is spelled 'dialogue', You are tasked to edit a scene in a play discussing the differences in American and British English. Using the ?, find all the times 'dialog' is found, both the American and British forms. Remember the flags.", "Dialog 1 -- Bill: 'Why does it matter how I spell 'dialogue'? Nobody cares!' Mom: 'How you spell 'dialog' determines whether you are from Britain or America. Let me show you!' Bill: 'Ok' Mom: 'DIALOG', this is how you spell the word in America. 'DIALOGUE', This is how you spell it in England.' Bill: 'Now I get it! I know how to spell 'dialog' the American way and 'dialogue' the British way. I am finally bilingual! I can speak American English and British English.'", "dialogu?e?/gi"],
        10: ["Lesson 10: How Many Do You Want? -- We have discussed the * symbol (0 or more characters), + symbol (1 or more characters), and ? symbol (0 or 1 character). What if you want to find a certain number of characters or a certain range of characters? Example 1: /M/g. This RegEx expression will find all the single values of 'M' in the string. Example 2: /Mm{4}/g. This pattern will match all values that equal Mmmmm. M followed by 4 m's. Example 3: /Mm{3,7}/g. This will match strings like Mmmm, M followed by 3 m's. 'Mmmmmm' with five m's will also be matched. Strings all the way up to M followed by 7 m's will be matched. You wrote a list of all batteries you counted in your store. Unfortunately, you did not write down the amount you had of each type of battery. Find all the double A, triple A, and quadruple A batteries using the new RegEx concept. Remember not to put a space in the brackets.", "C, D, D, C, CR123A, AA, 9V, 23A, AA, C, AAA, AA, 12V, 12V, AAAA, CR2032, D, 22V, C, AAA, AA, CR2032, 22V, 44V, CR123A, CR2032, 23A, CR2032, AA, C, AAA, CR2032, AAAA, D, 44V, AAAA, 22V, AAA, 23A, AA, 9V, 9V, 9V", "A{2,4}/g"]

    }

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

        if (this.solution.split('/').length === 2) {
            this.solution =  new RegExp(this.solution.split('/')[0], this.solution.split('/')[1]);
        }
        
        this.rVal = new RegExp(this.rInput, this.flagInput);
        this.lessonpara = this.lessonpara.replace(this.rVal, `<span>$&</span>`)
        console.log("testing", this.lessonparaSolid.replace(this.rVal, `<span>$&</span>`) === this.lessonparaSolid.replace(this.solution, `<span>$&</span>`))
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
        document.getElementsByClassName('flags')[0].value = "";
        localStorage.setItem('lessonI', this.index);
        // this.index = localStorage.getItem('lessonI');
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
