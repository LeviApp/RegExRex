import Component from '@glimmer/component';
import {
  tracked
} from '@glimmer/tracking';
import {
  action
} from '@ember/object';

import { computed, set } from '@ember/object';
export default class LessonComponent extends Component {

  
  @tracked index =  Number(localStorage.getItem('index')) || 1;
  @tracked unfinished = true;


  @tracked helpOpen = false;

  @tracked
  lessons = [
    {
      "lesson_id": 1,
      "lesson_number": 1,
      "lesson_title": "Beginnings",
      "lesson_main": "Welcome to the RegEx Rex course. RegEx is a way to search for patterns in text. You can search for letters, words, and digits. You can search for a certain length of words and a lot of other patterns. In normal searches, what is being used are literal characters. Searching for 'code' is searching for the exact pattern of letters that spell out the word. In the first couple of lessons, we will be focusing on literal characters to explore different patterns that RegEx can be used for. The first pattern we will discuss is the beginning. RegEx can be used to search for a pattern at the very start of a text block. Use the search bar above to solve the lesson's challenge. Ignore the second text box for now. Using literal characters, search for the first word in the following paragraph.",
      "lesson_challenge": "Websites are built using three main languages: HTML, CSS, and JavaScript. These three languages are usually explained by comparing them to a house. HTML is the physical brick of the house. It is the physical content which makes up the website. CSS is the paint you apply to the brick or door. It makes the content on the webpage look better. JavaScript is the doorbell of the house. Its responsibility is to produce some kind of functionality to the house. JavaScript does the same with the website.",
      "lesson_solution": "/Websites/",
    },
    {
      "lesson_id": 2,
      "lesson_number": 2,
      "lesson_title": "The In-Between",
      "lesson_main": "Another pattern that RegEx accounts for is, obviously, found in the middle. RegEx isn't only for patterns at the start of a text block. At any point in the middle of a text block, RegEx can search for a pattern. Roses are red and violets are blue. Using literal characters, search for the word in the following paragraph that best describes a jpeg if you want to continue.",
      "lesson_challenge": "There are two main aspects to websites. The Front End is the visual side of the webpage. It includes elements such as the paragraph, image, and color. The Front End is very important to get right. It must be laid out correctly and visually appealing. It must be user-friendly. The Back End involves all of the data that a user might need. When a user needs to see an email, the Back End works behind the scenes to get that information. It includes apis, servers, routes, and automation.",
      "lesson_solution": "/image/",
    },
    {
      "lesson_id": 3,
      "lesson_number": 3,
      "lesson_title": "The Finish",
      "lesson_main": "The next pattern that deals with position is the ending. RegEx can find a pattern at the end of a text block. It doesn't matter what is at the end of a text block. It could be letters, words, numbers, or other characters. Punctuation is always good to consider when searching strings. This is important for the beginning, middle, or end of a text block. Using a literal pattern, find the last word in the following paragraph, including punctuation.",
      "lesson_challenge": "While all websites will ultimately be using HTML, CSS, and JavaScript, this does not mean developers have not implemented technologies, called frameworks, to help them build websites. Frameworks can be used to build the Front End. Every framework has foundational code it implements under the hood. The three most popular frameworks for the Front End are React, Angular, and Vue. All three of these frameworks are based in the JavaScript programming language!",
      "lesson_solution": "/language!/",
    },
    {
      "lesson_id": 4,
      "lesson_number": 4,
      "lesson_title": "The Great Escape",
      "lesson_main": "RegEx allows you to use literal characters, but many times you will use special characters. However, there will be times you want to find these special characters literally. In order to do so, you must escape them. First, here are a list of special characters that RegEx recognizes.&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;?&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;What if you want to use a literal question mark or a literal dollar sign? You will have to escape these characters. In order to search for characters like this, you will most always have to add a backslash (\\) before the symbol.&nbsp;&nbsp;&nbsp;&nbsp;\\[&nbsp;&nbsp;&nbsp;&nbsp; will search for a literal left square bracket.&nbsp;&nbsp;&nbsp;&nbsp;\\.&nbsp;&nbsp;&nbsp;&nbsp; will find a literal dot.&nbsp;&nbsp;&nbsp;&nbsp;\\$ will find a literal dollar sign. Your task will be to grab this RegEx expression using escaped characters.",
      "lesson_challenge": "/^[0-9]{4}\\s\\w+$/",
      "lesson_solution": "/\^\[0-9\]\{4\}\\s\\w\+\$/",
    },
    {
      "lesson_id": 5,
      "lesson_number": 5,
      "lesson_title": "Global Flag",
      "lesson_main": "Flags are characters you add at the end of a RegEx expression that provide extra functionality. The first flag we will discuss is the global ('g') flag. A proper RegEx expression looks like this. Example 1: /website/. This example will only find the first item that matches the exact pattern. In this case, the first time the word 'website' is found in the text block. To find all items that match a given RegEx pattern, you must add the global flag at the end. Example 2: /website/g. This example will find all the items that match 'website' in the text block. In the following paragraph, find all the words that match 'framework'.",
      "lesson_challenge": "Frameworks can also be used for the Back End. A popular Back End framework is Node.js. It implements JavaScript behind the scenes. A framework that uses Python as its base computer language is Django. This framework includes a lot of out-of-the-box functionality. It even has a user-interface for admins dealing with server data. Other options developers use include Laravel (PHP framework), Spring Boot (Java framework), and .NET (C# framework).",
      "lesson_solution": "/framework/g",
    },
    {
      "lesson_id": 6,
      "lesson_number": 6,
      "lesson_title": "Case-Insensitive Flag",
      "lesson_main": "Flags are characters you add at the end of a RegEx expression that provide extra functionality. The second flag we will discuss is the case-insensitive ('i') flag. A proper RegEx expression looks like this. Example 1: /library/. This example will only find the first item that matches the exact pattern. In this case, the first time the word 'library' is found in the text block. To find any form of the word 'library' in a given RegEx pattern, you must add the case-insensitive flag at the end. Example 2: /library/i. This example will find the first item that match the word 'library', regardless of the case. In the following paragraph, help Anastasia find her name in the list of names. She accidentally typed her name wrong.",
      "lesson_challenge": "Steve, John, Mary, Lisa, Caleb, Joseph, Joshua, Karla, Alyssa, Madison, Herald, Jesse, Sarah, Greg, Jane, Bob, aNAsTasIa, Anthony, Jill, Janet, Ned, Isaiah, Twyla, Betsy, Zachariah, Karen, Wesley",
      "lesson_solution": "/Anastasia/i",
    },
    {
      "lesson_id": 7,
      "lesson_number": 7,
      "lesson_title": "Combined Flags",
      "lesson_main": "Flags are characters you add at the end of a RegEx expression that provide extra functionality. There are other flags in RegEx. For the sake of simplicity though, we will only be using the global and case-insensitive flags. You can combine flags in a RegEx expression to allow for more functionality. Example 1: /SCIENCE/. This will only find the first item that matches the exact pattern of 'SCIENCE'. Example 2: /SCIENCE/gi. This example will find all items matching the pattern 'SCIENCE', regardless of the case of the letters. You are editting a Computer Science article and realize the original writer wrote the word 'JavaScript' in many different ways. In order to standardize the form of the word, find them all in the following paragraph.",
      "lesson_challenge": "JAVASCRIPT, The Last Stand: Javascript is the only computer language you will ever need to know. It can do so much by itself. JavaScript can be used alone. This is called vanilla javascript. It is one of only three computer languages that browsers recognize. Every Front-End framework has to convert code to these three foundations. Therefore, why not use a framework that is implemented using that base programming language of Javascript? Many frameworks use it. React, Angular, Vue, Ember, and others all use JavaScript. Not only is javascript used as a Front-End framework, it can also be used in the Back End. Node.js is the Back-End framework. Furthermore, JAVASCRIPT has been used by programmers to build out libraries for the convenience of others to use. You need resources? Javascript is one of the most well-documented computer languages. Three cheers for JAVASCRIPT!",
      "lesson_solution": "/JavaScript/gi",
    },
    {
      "lesson_id": 8,
      "lesson_number": 8,
      "lesson_title": "The Star Player",
      "lesson_main": "We have been using literal characters up to this point. Now, we will start to introduce RegEx symbols that match certain text qualities. The first symbol we will discuss is the star (*). The * value will match zero or more of the previous character or group. Example 1: /ab/. This will match the first instance of the letter sequence, 'ab'. Example 2: /a*b*/. This RegEx expression will grab the first instance of a string that has zero (0) or more a's followed by zero (0) or more b's. Here are some items that would match this pattern: a, b, ab, aab, aabb, aaaaaaaaaaa, bbbb, abbbbbbbbb, aaaabbb. Keep order in mind when creating a RegEx pattern. Also, remember the flags that were just learned. Information is stored in bits on a computer. It is a series of 0's and 1's. Help this computer detect all of the 0's and 1's in the number of PI, starting with the number 1.",
      "lesson_challenge": "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860",
      "lesson_solution": "/1*0*/g",
    },
    {
      "lesson_id": 9,
      "lesson_number": 9,
      "lesson_title": "Plus!",
      "lesson_main": "We have been using literal characters up to this point. Now, we will start to introduce RegEx symbols that match certain text qualities. The second symbol we will discuss is the plus symbol (+). The + value will match one or more of the previous character or group. Example 1: /XY/g. This will match all values that match 'XY' in the string. Example 2: /X+Y+/g. This RegEx expression will grab all values that have one (1) or more X's followed by one (1) or more Y's. Here are some items that would match this pattern: XY, XXY, XYY, XXYY, XXXY, XYYYYYYYY. Keep order in mind when creating a RegEx pattern. The example RegEx pattern will not match YYXX. Also, remember the flags that were just learned. You need to remove all the minus signs in the following Math paragraph because the formulas are incorrect. First you must find them.",
      "lesson_challenge": "---- --- -- - 7 - 3 = 10, prove me wrong. 8 -- 9 = 89. I have never understood math. Why does 4 - 1 = -3 and --7 ---- 9 = 16? How does --x + --y = x + y? You really need to have a PhD to comprehend that -- sin x -- cos x -- tan x = -- csc x. Why math, oh why math! Why do you have to be so hard. 1 - 1 should be -1 and 2 - 2 should be -2. I will continue to fail tests until numbers 0 ----- 10 and 11 --------- 20 work correctly. Therefore, you win math! I will move on to better things. I don't need you anymore. - -- --- ----",
      "lesson_solution": "/-+/g",
    },
    {
      "lesson_id": 10,
      "lesson_number": 10,
      "lesson_title": "This Is Optional",
      "lesson_main": "We have discussed the * symbol (0 or more characters) and + symbol (1 or more characters). There is also a symbol for 0 or 1. This is the question mark (?). Example 1: /1234/g. This will match all the numbers '1234' in a string. Example 2: /123?4/g. This RegEx expression will match the number '1234', but it will also match '124', the number 3 was made optional because of the '?'. English can be confusing sometimes. Britain and America may use the same words, but sometimes the words can be spelled differently. For instance, the word 'dialog' in England is spelled 'dialogue', You are tasked to edit a scene in a play discussing the differences in American and British English. Using the ?, find all the times 'dialog' is found, both the American and British forms. Remember the flags.",
      "lesson_challenge": "Dialog 1 -- Bill: 'Why does it matter how I spell 'dialogue'? Nobody cares!' Mom: 'How you spell 'dialog' determines whether you are from Britain or America. Let me show you!' Bill: 'Ok' Mom: 'DIALOG', this is how you spell the word in America. 'DIALOGUE', This is how you spell it in England.' Bill: 'Now I get it! I know how to spell 'dialog' the American way and 'dialogue' the British way. I am finally bilingual! I can speak American English and British English.'",
      "lesson_solution": "/dialogu?e?/gi",
    },
    {
      "lesson_id": 11,
      "lesson_number": 11,
      "lesson_title": "The Count",
      "lesson_main": "We have discussed the * symbol (0 or more characters), + symbol (1 or more characters), and ? symbol (0 or 1 character). What if you want to find a certain number of characters? Example 1: /M/g. This RegEx expression will find all the single values of 'M' in the string. Example 2: /Mm{4}/g. This pattern will match all values that equal Mmmmm. M followed by 4 m's. You are sleeping on the job! Select all the separate Z sleep cycles using the concept of the count.",
      "lesson_challenge": "ZZZZZZZZ Zzzzzzzz zzzzzzzz",
      "lesson_solution": "/z{8}/gi",
    },
    {
      "lesson_id": 12,
      "lesson_number": 12,
      "lesson_title": "The Range",
      "lesson_main": "We have discussed the * symbol (0 or more characters), + symbol (1 or more characters), and ? symbol (0 or 1 character). What if you want to find a certain range of characters? Example 1: /M/g. This RegEx expression will find all the single values of 'M' in the string. Example 2: /Mm{3,7}/g. This will match strings like Mmmm, M followed by 3 m's. 'Mmmmmm' with five m's will also be matched. Strings all the way up to M followed by 7 m's will be matched. You wrote a list of all batteries you counted in your store. Unfortunately, you did not write down the amount you had of each type of battery. Find all the double A, triple A, and quadruple A batteries using the new RegEx concept. Remember not to put a space in the brackets.",
      "lesson_challenge": "C, D, D, C, CR123A, AA, 9V, 23A, AA, C, AAA, AA, 12V, 12V, AAAA, CR2032, D, 22V, C, AAA, AA, CR2032, 22V, 44V, CR123A, CR2032, 23A, CR2032, AA, C, AAA, CR2032, AAAA, D, 44V, AAAA, 22V, AAA, 23A, AA, 9V, 9V, 9V",
      "lesson_solution": "/A{2,4}/g",
    },
    {
      "lesson_id": 13,
      "lesson_number": 13,
      "lesson_title": "The More",
      "lesson_main": "There is one more way to determine how many characters you want. If you want to grab items of a certain length or more, it is quite similar to the range discussed in the previous lesson. /\\b\\w{5,}\\b/g will grab all words at least 5 characters long. You simply type in the lower boundary number and put a comma (,) after it. You are tallying up all the points for the ping-pong playoffs. You need to count up points from all the teams that qualify for the finals. The teams need to have made at least ten points.",
      "lesson_challenge": "Aces: |||||||||, Candlesticks: ||||||||||||||||||||, Porcupines: ||||||||||||, Knives: |||||, Pillows: ||||||||||, Flares: |||||||||, Thunderbolts: |||||||, Sharks: |||||||||||||||||, Butterflies: ||||||||||||||, Muscles: ||||||||||, Warheads: |||||||||, Vultures: ||||||||, Aliens: |||||||, Grenades: |||||||||||||||||, Pelicans: |||||, Ghosts: |||||||||||||||||",
      "lesson_solution": "/\\|{10,}/g",
    },
    {
      "lesson_id": 14,
      "lesson_number": 14,
      "lesson_title": "Space: The Final Frontier!",
      "lesson_main": "RegEx was designed to match patterns. We have discussed patterns that match amounts of letters, like + and *. Now, we will discuss another type of pattern you can match letters with. These are considered general patterns. The first one I will mention is the space. Certainly you can type in a literal space and match spaces, but you can also grab all spaces using a general pattern. In most cases, a general pattern will be preceded by a backslash (\\). To find a space, a RegEx general pattern would look like this. /\\s/. This will grab the first single space. Like any literal character, you can use multiple general characters. /\\s\\s/ will match the first double space. Any other special pattern, like the * and +, discussed already will also work for general patterns. You are editting a paragraph, and realize that the writer added two or more consecutive spaces within the paragraph. Your job is to find these places using the space general pattern.",
      "lesson_challenge": "MVC is a structure used  for web development.   'M' stands for Models. It deals with  data and   allows a web application to communicate with a  database server.    'V' refers to View. This  is  the  physical  items  a user  will  see  on the  webpage  . 'C' is for Controller.  It deals  with all of the logic and  functionality  of  the data being  used.",
      "lesson_solution": "/\\s\\s+/g",
    },
    {
      "lesson_id": 15,
      "lesson_number": 15,
      "lesson_title": "Attract the Opposite",
      "lesson_main": "Always make sure the general pattern is lowercase. If you capitalize in a general pattern, the RegEx will grab the opposite of the lowercase pattern. For example, /\\S/ will grab the first character that is NOT a space. Given the following paragraph, your task is to grab every word group without spaces using \\S.",
      "lesson_challenge": "Ember.js is a Front-End framework that uses the MVC structure. It includes ways to save data in models. It allows you to control the data with serializers and adapters. It provides a way to visualize all of this data using Handlebars templates.",
      "lesson_solution": "/\\S+/g",
    },
    {
      "lesson_id": 16,
      "lesson_number": 16,
      "lesson_title": "Wildcard!",
      "lesson_main": "Did you ever ask if there was a symbol that can grab ANY character? Gratefully, you are in luck! The dot (.) is a special character that will grab anything. /..../g will find any sequence of four characters. It would find '1234'. it would find 'ROCK'. This would also find these sequences,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,,)(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12AB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;./\\.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-^_=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.eDu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Even though we are discussing special characters now, don't let that stop you from using literal characters. You can use both. Numbers are so large that it would be impossible to count all numbers from negative infinity to positive infinity. However, you can grab every character between these two extremes using the wildcard. Grab every character between the two infinities, including the infinities.",
      "lesson_challenge": "If only I could count the items in the universe. I would start with negative infinity! Where is the start of it though? Is it a number like 1? Is it an animal like a frog? I wonder if it could be a feeling like love or hate! I could then start at the beginning and move on to planets like Jupiter, Saturn, or Mars. Then on to plants. I could count the cactus, the poison oak, and Redwood. I could count symbols like $, ^, &, @, and #. I would go through every category until I reached positive infinity. It would take eternity to count everything. However, if I live for that long I could.",
      "lesson_solution": "/negative infinity.+positive infinity/",
    },
    {
      "lesson_id": 17,
      "lesson_number": 17,
      "lesson_title": "Greedy RegEx!",
      "lesson_main": "An important aspect to consider is the greedy RegEx expression. /.*/ Dot plus star (.*), will give you everything in a text block. This may be useful in many cases to use .* in combination to other patterns. However, you should be aware of the greedy nature of using it. /A.*Z/ will grab the first A and last Z, and include EVERYTHING in between, even if it is another Z. It would find text like 'AbcE47.@#Z'. It would also find a string like this. 'ABMH$%Z123VSMAXzSZ<>Z'  How would you make this expression not greedy? How would you make it so the expression grabs the first A and first Z and everything in between? Simply add a question mark (?) at the end of the star. /A.*?Z/ When using this expression to search for 'ABMH$%Z123VSMAXzSZ<>Z', it will only grab the first A and first Z and everything in between. 'ABMH$%Z'. The concept of greed doesn't just apply to the .*, it can be used if you want to find the first of a character that may be included multiple times. Like the star, just add a question mark at the end to make it not greedy. For example /[A-Z]\\w+?[A-Z]/g will grab every example where there is a capital letter and another one, with one or more lower-case letters between. Your task will be to grab every consecutive string in PI that starts with 0 and ends with 9.",
      "lesson_challenge": "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860",
      "lesson_solution": "/0.*?9/g",
    },
    {
      "lesson_id": 18,
      "lesson_number": 18,
      "lesson_title": "Give Me A Break!",
      "lesson_main": "RegEx matches consecutive patterns of characters. Without a special break pattern, this does not guarantee the pattern will match whole words. /mat/g This pattern will definitely match the word 'mat'. However, this will also match parts of these words. math, mate, match, matter, tomato, mature, diplomat, normative, and traumatic. All of these words contain the consecutive pattern of letters 'mat'. How then, can we make sure to create a pattern that grabs the word 'mat' only? This is why the break expression exists. To grab only the word 'mat', use \\b before and after the letters you are trying to match. /\\bmat\\b/g This will ensure you only get the word 'mat'. Your challenge this time will be to write a pattern that matches and finds only the whole word 'type', regardless of the case.",
      "lesson_challenge": "According to https://www.typescriptlang.org/, 'TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.' Do developers who use TypeScript have a stereotype? We will never know. However, there are many types of people who use it! TypeScript is a superset of JavaScript. There are many different types of supersets though in many other languages. Groovy is a type of superset for Java. Another type of superset is for C. It is called C++. Type three is Fo. It is an experimental superset of the language Go. Type four is Hack. It is a superset of the PHP language. There are many other types of supersets across many computer languages. There are even multiple supersets in one type of language. For example, Pizza is another type of superset for Java.",
      "lesson_solution": "/\\btype\\b/gi",
    },
    {
      "lesson_id": 19,
      "lesson_number": 19,
      "lesson_title": "Digitize",
      "lesson_main": "Another important pattern to grab is the digit. What do we use when we want to grab a number or a group of numbers? The pattern we use is \\d. /\\d{2}/g will find all consecutive two digit numbers. It would find '12', '00', '94', '35', and any other combined two-digit number.  Your challenge will be to search for all zipcodes in this list of information. Don't forget all that has been learned previously.",
      "lesson_challenge": "List of addresses: 98 Hudson St., Dekalb, IL 60115, 8172 Glenridge Circle, Mount Vernon, NY 10550, 420 Branch Street, Macon, GA 31204, 420 Branch Street, Macon, GA 31204, 9713 Edgefield Lane, Stillwater, MN 55082, 71 Water Ave. Patchogue, NY 11772, 103 Hilltop Drive, Bloomfield, NJ 07003, 758 Union St., Erie, PA 16506, 55 W. Creek Drive, Baldwin, NY 11510, 947 Brandywine Lane, Lincoln Park, MI 48146, 81 East Madison Drive, Rosedale, NY 11422, 94 Brown St., Banning, CA 92220",
      "lesson_solution": "/\\d{5}/g",
    },
    {
      "lesson_id": 20,
      "lesson_number": 20,
      "lesson_title": "W is for What?",
      "lesson_main": "Another useful pattern to use is the \\w pattern. This will grab any letter, digit, or underscore (Don't blame me! I didn't write the rules for RegEx.). /\\w{4,6}/g, This pattern will grab any string of letters, regardless of case that are 4, 5, or 6 letters in length. This pattern will also match any 4, 5, or 6 digit number too. Furthermore, it would grab a string of 4, 5, or 6 in length combination of letters, numbers, or underscores. Here are some text items the pattern will match: 1234, 500279, RegEx, yellow, 123ABC, Bi115, 9Z8y, 76_E, _____. Do you remember what capitizing a general pattern does? A hacker hacked into your system and entered in random symbols in this critical email. You must clean it up. The best way would be to grab all of the information that is neither a letter nor number. It is guaranteed that there are no underscores.",
      "lesson_challenge": "TH!@#$%$#%$^&E*&***RE H()*&^^&%^;&;A[}[\\\\}{{S<< B^&<><><)&^%EE&;&;;&&;N A SE%%,.,)CU&;RIT#####-%-%-%Y BR`~`~`~&;&;EA'\???!CH******;::;\}|}{} A#*(T TH@@&*&&*=+=E CO&;$$*!MPAN><><>Y!<>^-%-%---%%% PL&E!@#ASE N&&^%$#^&*^$#OTI()()*&^%%&*?>:FY A()[]{}<>LL M...AN*=@$*!~~~~AGE,,^&;%#!$$$+++&(**)-RS.The(((}]---++re h@@@#%^as bee&&%&;%%%%n s!!!<<<&<<ome sus>>>&;&;pic&^%%^^^^iou%^*s acit**!@#~```ivi+++----ty goi????<{}\\\\&;||||ng||| o##n. D&(o n!^@ot cli**^%$#@()ck o--+@#n A&&;N|||{%%Y li!@%&*nks. Do n$%^%$#;o&***$#@@t &*&%%;!!!????;`~`;an$$$#@!#&sw~~~~```/?/?/?er an&-+-;&#~%;y em^^^||ai@#$ls o){|\\r ta%^&l-|-|--||--||k t&(**&^%);o an#####yo!#(ne o=+===+++)n t&!@@~```;&~~=---||;he p%%%<>.,;;'';;';';'hon&;e. W/?/?\\\\//e ha!!!@@#@ve al%(;\"\"\">>re$$$%ad`!|y cal@##!@%;&&&&\"\"**led 91^^``1. Ho%%%%%{}{}{}wev#**&&&!)(er, i|\\/^$f yo><>^<>)&u nee#&()$$$%%%;d s###+om%$#@e ex;{}[\";;\"''''::tra he$$!!!~````~~--[]<lp\\\\\||||;, pl^&[}(eas)#^!`e c->-)>%-al&^^^^;l**+-(4@@!44^&(())) 444&[][][]];-%%$#&%$%$$%%%44-+-===44.",
      "lesson_solution": "/\\W+/g",
    },
    {
      "lesson_id": 21,
      "lesson_number": 21,
      "lesson_title": "The Character Class",
      "lesson_main": "One of the important elements in a RegEx Expression is what can be called the Character Class. You can do many things with it. We will break the topic into several exercises. First, what is it? Here is an expression that includes a character class. /[aim]/g The character class is represented by square brackets. You can put any character in the character class. What does it mean? The example expression will grab either an 'a' OR 'i' OR 'm'. This is the first way of using the character class. /p[aeiou]t/g will find these words pat, pet, pit, pot, put. This RegEx pattern matches any sequence of letters that has a p followed by any vowel, followed by a t. /[<>(){}]{2}/g will grab two characters that are within the square brackets. Strings that this pattern would match include (), <>, {}, <), <<, ((, and }{. Keep in mind that the general patterns that have been previously discussed still work inside of the square brackets. The character class will also recognize literal characters. Your challenge will be select all strings of even numbers in the number PI using the concept of the character class.",
      "lesson_challenge": "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860",
      "lesson_solution": "/[02468]+/g",
    },
    {
      "lesson_id": 22,
      "lesson_number": 22,
      "lesson_title": "Sections in the Box",
      "lesson_main": "A very useful feature of RegEx in the character class is the idea of sections. You can provide the box with groupings of items. /[0-5]+/g will grab a string of numbers that only contain numbers 0-5. It would match 12345, 5555555555, 0143, and any number of combinations  /\\b[a-d]{2}\\b/g will grab two letters that are both within the range a-d. It will grab ab, bc, ad, aa, cc, ac, and other combinations. /[N-Z]/g will grab all capital letters within the range of N and Z. /\\b[a-z0-9]{4}\\b/ will grab the first item that is either a four-letter word, a four-digit number, or a four-item combination of letters and numbers. Your challenge will be to grab all of the capital words in the paragraph below.",
      "lesson_challenge": "Angular is a nice framework for the Front End. It is based on JavaScript. Organization is one of its best features. Folders are created every time you build a Component. Included in the folder is an HTML file, a TypeScript file, and a CSS file. Furthermore, it provides testing files. Other functionalities that Angular includes are Services, Dependencies, and Routing. So much is included in Angular without having to bring in outside code. Security is built-in. HTTP functionality is also available. A popular framework for the Front End, Angular is not going away anytime soon.",
      "lesson_solution": "/\\b[A-Z][a-zA-Z]*\\b/g",
    },
    {
      "lesson_id": 23,
      "lesson_number": 23,
      "lesson_title": "ASCII for the Range",
      "lesson_main": "Using a range in a character class is important. You can use a range of numbers /[2-4]+/ or a range of letters /[R-Z]*/g. However, the range functionality Javascript uses for RegEx is more powerful. Under the hood, the computer will assign a number called the ASCII value to every character. The letter A has an ASCII value of 65. The pipe symbol \| has an ASCII value of 124. Using the range functionality of a character class, behind the scenes, grabs the first character's ASCII value and the last character's ASCII value, and finds every other character whose ASCII value falls between those values. /[A-|]/g will grab A's value of 65 and |'s value of 124, and every character in between. Characters between these two values include B, C, G, Z, [, _, ^, d, o, x, y, z. Hexadecimal is another type of number system. We mostly use decimal, which is base 10. Hexadecimal is base 16. It uses 16 digits to represent a number. It uses the standard 0-9, but it also will use letters A-F. The Hexadecimal system is very important to understand some computer science topics. As a teacher, you cut out individual letters and numbers on pieces of paper to teach the concept of the hexadecimal system. Unfortunately, you dropped your bag and the non-hexadecimal values mixed in with the hexadecimal values. Using the concept of ASCII ranges, your job is to scoop all of the hexadecimal values into groups, regardless of case.",
      "lesson_challenge": "MHDFHDRFTDRTITHDRTHSRTUDRJSRTHaartrjtrirt6urthfgbgnmhhkipljrtubs121323534tdgerg576797806745453434geegretdrgrerhererhGMFGYJFGTJFGULFGDFGBDFTHSRETQRTHSTRYABCYJDTYKEFGKDTH164545867967564FBFGJYUzfgfgfmykgyotATNTYISTYJ1243264856aaaa7a77a7434234DFGMGKTYERTYtgyjyulyuisftntyarybsatusrj6567356645345676790005675645345fgbfgjdtyaerrtjuQSHTYHFTYISRTFTHTJDRTYAFGHDYUdyyusrtthHDFTHRUSRTHaSTYJsAmJyUnXDFHDTUarthsyjru254y45hsrtgr5645e3q146dtrjtu25675jdgynsfthNGYKTYISRFTHjgtyjsryu7564585hr6h6756yhe45h42tbrtye67rsgsdrgterhrtusrtgqrtbftjdyudtyicdmaNSYTIMTYSTHFRMTZTHDXT267rtfxSTYJDYUSRTYSRBGRTJETYULRYUONFGYUPTYNDFTSRTYTYUPDRTYNDFJsrtdtudrthrdtyr4yDRhyjftyudfmadOY",
      "lesson_solution": "/[0-F]+/gi",
    },
    {
      "lesson_id": 24,
      "lesson_number": 24,
      "lesson_title": "Not Again!",
      "lesson_main": "We are still discussing the character class. This lesson is regarding the NOT operator in the character class. What if you want to grab every character except the letters g, o, l, d in a text string? You could use the character class to list every character OR you can use the not operator. /[^gold]/g will grab every character except for g, o, l, and d. Indicated by a carrot at the beginning (it must be at the beginning or it will grab the literal carrot symbol), this symbol will allow the pattern to find everything except what is in the character class. (Recall the idea of escaped characters, you have to escape the square brackets within the main brackets using a backslash.&nbsp;&nbsp;&nbsp;&nbsp;\\\[&nbsp;&nbsp;&nbsp;&nbsp;\\\]&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp; /[^(){}<>\\[\\]]+/g will grab every character that is not a bracket of any kind. Here is a bonus tip for using the character class. It works with the case-insensitive flag. /\\b[g-p]{3,4}\\b/gi pattern will find all 3 or 4 letter words that contain only letters from g to p, regardless of case. It will match pig, HOOP, Oil, and any other combination of these letters.  Mr. Right only will work with letters and numbers that are on the right side of things. He will not work with the first half of numbers starting with 0 or the first half of the alphabet starting with a. Make sure to consider Capital letters. Also, make sure to grab strings of acceptable characters and not single characters. You need to exclude those numbers and letters in the paragraph below.",
      "lesson_challenge": "Math is a lot of fun. It is like a puzzle. Starting even with just basic addition, subtraction, multiplication, and division, you can do so much! Algebra is where you can solve many real-world problems. You want to find the area of a circle? Use PI, 3.14159265358979323846264338327950288419. You want to know what e is? Here you go! 2.71828182845904523536028747135266249. Then, there is Trigonometry. You can use angles. Common ones are 30°, 45°, 60°, 90°, 180°, and 360°. If you are brave, tackle Calculus. Here you will solve problems using limits, derivatives, and integrals. Math really is integral to solving many of our problems.",
      "lesson_solution": "/[^0-4a-m]+/gi",
    },
    {
      "lesson_id": 25,
      "lesson_number": 25,
      "lesson_title": "So It Begins!",
      "lesson_main": "The very first lesson brought the idea of position to RegEx expressions. There is a way to search for items at the beginning of a text block. While you can search for literal characters in this way, you will not always have access to the literal string. However, it is important to be able to search for patterns at the start of some text. In order to search for a pattern at the beginning, use the carrot symbol ^. In this case, the carrot symbol must be first and outside the character class. Outside the character class and the start of a pattern, the carrot symbol represents the beginning of the text.  /^[a-z]+/i will grab the first word of the text block if it exists. /^\\s{2,10}/ will grab any extra spaces, from two spaces up to ten, at the beginning of a block of text if it exists. Your task will be to grab the first four numbers of the string, including the spaces between the numbers.",
      "lesson_challenge": "1  11  21  1211  1231  131221  132231  232221  134211  14131231  ????????",
      "lesson_solution": "/^\\d+\\s+\\d+\\s+\\d+\\s+\\d+/"
    },
    {
      "lesson_id": 26,
      "lesson_number": 26,
      "lesson_title": "The End!",
      "lesson_main": "The third lesson brought the idea of position to RegEx expressions. There is a way to search for items at the end of a text block. While you can search for literal characters in this way, you will not always have access to the literal string. However, it is important to be able to search for patterns at the end of some text. In order to search for a pattern at the end, use the dollar sign symbol $. In this case, the dollar sign must be at the very end and outside the character class. Outside the character class and the end of a pattern, the dollar sign represents the end of a text block.  /[a-z]+[.!?]$/i will grab the last word of the text block with the punctuation at the end if it exists. /\\w{3}$/ will grab any three letter, number, or underscore combination at the end of a text block. Your task will be to grab the last word of the expression, including the quotes and punctuation.",
      "lesson_challenge": "\"FIRE!\", John yelled, \"FIRE!\"",
      "lesson_solution": "/\"\\w+!\"$/"
    },
    {
      "lesson_id": 27,
      "lesson_number": 27,
      "lesson_title": "The Whole Picture",
      "lesson_main": "You may want to use both the carrot (^) and the dollar sign ($) together. This will check a pattern for the entire string block. This is useful to find if a particular string matches the RegEx pattern or not. /^\w+[-_]?\w+\.jpe?g$/i will check if a given string is formatted to match a jpeg file name. Here are a list of strings that would match the given RegEx Pattern:    friend.jpg    ENEMY.JPEG    friend_ENEMY.jpeg    1234-friends.JPG    Remember that using both the ^ and the $ together checks an entire string. Using this concept match the entire string below. Colors often use Hexadecimal codes. Hexadecimal is another type of number system. We mostly use decimal, which is base 10. Hexadecimal is base 16. It uses 16 digits to represent a number. It uses the standard 0-9, but it also will use letters A-F. A Hexadecimal color code will start with a hash, followed by a string of 6 numbers that will be in the range 0-9 or A-F. Highlight this entire hexadecimal color code, which matches this background color, using the concept of ^ and $.",
      "lesson_challenge": "#00FF80",
      "lesson_solution": "/^#[0-9a-f]{6}$/i"
    },
    {
      "lesson_id": 28,
      "lesson_number": 28,
      "lesson_title": "Alternatively",
      "lesson_main": "Parentheses () will be the next main topic of RegEx. They are very important when finding different patterns. We will first discuss what is called alternation. Alternation is a way to find groups of patterns. It deals with the idea of 'OR'. It will find one pattern OR another OR yet another, etc. The OR symbol is a pipe (|). One scenario that it can be used with is to find email patterns. /@\\w+\.(com|net|edu|org|gov)/g will grab all domain extensions including the @ symbol. This pattern will match          @google.com          @w3schools.com          @nasa.gov          @slideshare.net          @wikipedia.org          @mit.edu          Using alternation will grab ''com' OR 'net' OR 'edu' OR 'org' OR 'gov' at the end of the pattern. Using alternation, can you help me out? I am trying to search for all of the main sections of street names to compile and count in my new city. I want to count how many times the names end in Circle, Drive, Place, and Way. Searching in 'N. Greene Way' should yield 'Greene Way'.",
      "lesson_challenge": "List of Addresses: 1652 S. Orange Drive, 8888 N. Treehouse Way, 9327 E. Bighorn Circle, 1111 One Way, 5223 Credit Place, 4000 Round Circle, 7831 W. Safe Place, 2577 E. Fiery Drive, 2220 S. Mount Place, 6654 Sweet Way, 3030 E. Jingle Circle, 4444 N. Bullet Drive, 9009  W. Forward Circle, 5336 No Way, 1000 E. Empty Place, 3859 S. Crazy Drive, 2417 Golden Circle, 7777 Perfect Place, 9125 W. Square Circle, 1298 Chain Way",
      "lesson_solution": "/\\w+\\s(Circle|Drive|Place|Way)/g"
    },
    {
      "lesson_id": 29,
      "lesson_number": 29,
      "lesson_title": "Regroup!",
      "lesson_main": "The next important idea parentheses are used for is groupings. What if you want to apply RegEx to a group? This is where you would use parentheses. /([a-z]+\\s){10}/i will grab the first 10 words of a text block, along with its space after. RegEx first grabs the expression in the parentheses making it a group, in this case, it is grabbing a word and a space after. Then, RegEx will find that pattern repeated 10 times. Using groups, your challenge will be to grab groups of three or four numbers that are four numbers in length or less. Include the spaces.",
      "lesson_challenge": "1 22 333 4444 55555 17 298 12345 927132 1822 9 32 18 666666 21 85 902 8500 19 56789 2020 2222 65310 88 1 98 2 78 3 68 122333 77 392 500 909675 24 100000 2 23 235 2357 235711 109 98 87 76 65 54 43210 002 0003 00004 911 835 456 10 123789 1210 7744 8 313028 1 2224444 925 81 73111 55 276 4222 405123 40 5 12 3 321504",
      "lesson_solution": "/(\\b\\d{1,4}\\s){3,4}/g"
    },
    {
      "lesson_id": 30,
      "lesson_number": 30,
      "lesson_title": "Back Reference",
      "lesson_main": "Parentheses used as groups give you an important ability when searching. Every group that you make in a RegEx expression gives you access to it later. How does this work? Starting with 0, which indicates the entire RegEx expression, every new group created increases the reference number by 1. Note that groups are named from left to right. This is very useful for finding repeated patterns. In order to reference a captured group, use a backslash (\\) with the appropriate reference number. /([a-zA-Z])\\1/g will capture any letter. Then, the RegEx expression will expect that same letter to be repeated in the searched string. This pattern will find all repeated letters. It would find 'll', 'tt', 'oo', or 'AA'. This technique can be very powerful if you are needing to reference any pattern and find combinations of those patterns. /(\\d)(\\d)\\2\\1/g  will capture one number and then another. Then, using the back reference, the RegEx pattern expects the two numbers to be followed by the second captured number followed by the first. It will match these numbers. '1991', '7337', '5005', and '4664'. It will even match numbers like '2222' and '8888'. You are editting an article discussing the important programming concept of DRY. Unfortunately, the writer's autocomplete went wrong and repeated several sentences. Using back references, find all of the repeated sentences, including the punctuation mark at the end. What technique and pattern can you use to select a sentence?",
      "lesson_challenge": "DRY is a very important concept in programming, Don't Repeat Yourself! DRY is a very important concept in programming, Don't Repeat Yourself! As a programmer, one must do their best to write clean code. This helps the others who are on the team. Why make it more difficult for your coworkers? Why make it more difficult for your coworkers? Sometimes, this means a developer must rewrite code to make it more effecient. Sometimes, this means a developer must rewrite code to make it more effecient. DRY code makes it more readable for everyone. There are no extra lines of unneeded code. There is no extra functionality included that a computer program does not really need. The deletion of all this extra Spaghetti code means your coworkers can work faster. The deletion of all this extra Spaghetti code means your coworkers can work faster. People working at your company can understand the code quicker is why. A better understanding means more work can be done. More efficiency, in turn, leads to more money for the company. Therefore, WRITE DRY CODE! Therefore, WRITE DRY CODE!",
      "lesson_solution": "/([A-Z][^.?!]+)([.?!])\\s\\1\\2/g"
    },
    {
      "lesson_id": 31,
      "lesson_number": 31,
      "lesson_title": "Positive Look Behind",
      "lesson_main": "Parentheses used as groups give you an important ability when searching. What happens if you want to search for a pattern, but only include part of it? This is where the concept of look behind and look ahead is important. First, we will discuss positive look behind. /(\\w+[.-]?\\w+)(@\\w+\.\\w+)/g will grab an entire email address. It would grab the email curious-elephant@denverzoo.org. The RegEx also includes two captured groups. The first group will capture everything up to and including the @ symbol. It would grab curious-elephant@ from the example. The second captured group gets the domain name. In this case, denverzoo.org. This is wonderful if you want the entire address. However, what if you just want the domain name? The only extra RegEx you add is, on the group you want to exclude, add ?<= to the beginning, inside the parentheses. /(?<=\\w+[.-]?\\w+@)(\\w+\.\\w+)/g This is called positive look behind. RegEx looks for a pattern that matches an email and excludes the first captured group. Keep in mind that this syntax only applies to groups before and behind the pattern you want to search for. You are putting a list together and want to group everyone based on their titles. You need to find all the names of the doctors, excluding their title.",
      "lesson_challenge": "Mr. Smith, Mrs. Johnson, Dr. Watson, Miss Scarlet, Professor Plum, Doctor Keys, Doctor Einstein, Judge Thomas, Mr. Green, Mrs. White, Dr. Davis, Judge Anderson, Mister Taylor, Colonel Sanders, Col. Mustard, Mister Magoo, Missus Nelson, Dr. Sanchez, Col. Walker, Miss Torres, Judge Campbell, Judge Rivera, Colonel Carter, Mr. Clark, Mrs. Jackson, Missus Moore, Dr. Brown, Doctor Wilson, Judge Jones, Col. Wright, Doctor King, Colonel Scott, Mr. Lewis",
      "lesson_solution": "/(?<=(Dr\\.|Doctor)\\s)\\w+/g"
    },
    {
      "lesson_id": 32,
      "lesson_number": 32,
      "lesson_title": "Negative Look Behind",
      "lesson_main": "Parentheses used as groups give you an important ability when searching. What happens if you want to search for a pattern, but only include part of it? This is where the concept of look behind and look ahead is important. We will discuss negative look behind. /(\\b)ship(\\b)/g will grab every instance of the word ship. This may be what you want to do. However, what if you want to see all the times it is being used as a suffix? Add a ?&#60;! to the group you want to exclude /(?&#60;!\\b)ship(\\b)/g will grab all of the values where ship is being used as a suffix. RegEx will look inside the captured group. In this case, it contains a break statement \\b. Then, it will make sure all found values of ship is not preceded by that break statement. It excludes every whole word ship, and finds every other time it is used as a suffix. You are creating a dummy design for a book and need to grab all numbers except for Volume numbers.",
      "lesson_challenge": "Rex's Guide to Hacking: Volume 1 | The Basics | Chapter 1 | What is a Computer? | Page 1 | Page 2 | Page 3 | Page 4 |Page 5 | Page 6 | Page 7 | Page 8 | Page 9 | Page 10 | Page 11 | Chapter 2 | How do you talk to a computer?| Page 12 | Page 13 | Page 14 | Page 15 | Page 16 | Page 17 | Page 18 | Page 19 | Page 20 | Page 21 | Page 22 | Page 23 | Page 24 | Page 25 | Volume 2 | Intermediate | Chapter 1 | JavaScript | Page 1 | Page 2 | Page 3 | Page 4 | Chapter 2 | Python | Page 5 | Page 6 | Page 7 | Page 8 | Page 9 | Page 10 | Page 11 | Page 12 | Volume 3 | Expert | Chapter 1 | Angular | Page 1 | Page 2 | Page 3 | Page 4 | Page 5 | Chapter 2 | React | Page 6 | Page 7 | Page 8 | Page 9 | Page 10 | Page 11 | Page 12 | Page 13 | Page 14",
      "lesson_solution": "/(?<!Volume\\s)\\d+/g"
    },
    {
      "lesson_id": 33,
      "lesson_number": 33,
      "lesson_title": "Positive Look Ahead",
      "lesson_main": "Parentheses used as groups give you an important ability when searching. What happens if you want to search for a pattern, but only include part of it? This is where the concept of look behind and look ahead is important. We will discuss positive look ahead. What if you want to grab the first part of a pattern and not the second part? This is what look ahead does.  /\\bextra(\\w{4,})/g will grab every word that has extra- as its prefix and at least 4 letters after the prefix. To grab only the prefix 'extra', you can use positive look ahead. Use ?= for the captured group you want to exclude, which is located after another group you want to select. /\\bextra(?=\\w{4,})/g will grab every prefix 'extra' that may be found in the text block. You are given a list of files and their extensions. Using positive look ahead, grab every name of the file excluding the extension.",
      "lesson_challenge": "Here are a list of file names and their extensions. Web: index.js, Program.cs, lesson.hbs, home.html, About.css, Pi.py, Contact.html, Nav.sass, Modal.TS, robotClass.java, Common: WebDev.doc, POLAR.JPG, Sweet.mp3, bridge.png, anatomy.psd, Rome.txt, ourFuture.pdf, summer2020.mp4, Poster.ai",
      "lesson_solution": "/\\w+(?=\\.\\w+)/g"
    },
    {
      "lesson_id": 34,
      "lesson_number": 34,
      "lesson_title": "Negative Look Ahead",
      "lesson_main": "Parentheses used as groups give you an important ability when searching. What happens if you want to search for a pattern, but only include part of it? This is where the concept of look behind and look ahead is important. We will discuss negative look ahead. What if you want to grab the first part of a pattern and not the second part? This is what look ahead does.  /\\d{1,3}(?!,)\\b/g will find all strings of numbers that are not followed by a comma. This may be useful if you want to select all numbers that are not in a place higher than the hundreds place. The break statement ensures the selected numbers have a break statement following, but not a comma. Your task is to find all the team names that are disqualified from the RegEx competition. To be safe from disqualification, a team must make at least ten points.",
      "lesson_challenge": "Bullfrogs: ||||||||||||, Pawns: ||||||||||||||||||, Quarks: |||||||||, Shields: |||||||, Tardigrades: |||||||||||, Xylophones: |||||||||, Prisms: |||||||, Weeds: |||||||||||||||, Snowmen: ||||||, Spiders: ||||||||||, Hammers: |||||||||, Spades: |||||||||||||, Locks: |||||||, Sheep: |||||||||||||, Owls: |||||||, Hail: |||||",
      "lesson_solution": "/\\w+\\b(?!:\\s\\|{10,})/g"
    },
    {
      "lesson_id": 35,
      "lesson_number": 35,
      "lesson_title": "Look Around You",
      "lesson_main": "Parentheses used as groups give you an important ability when searching. What happens if you want to search for a pattern, but only include part of it? This is where the concept of look behind and look ahead is important. You can combine both look behind and look ahead in complex RegEx expressions. /(con)\\w+(ous)/g will grab the entire words that have the prefix con- and the suffix -ous. /(?<=con)\\w+(?=ous)/g will only grab the letters in the middle of the prefix con- and the suffix -ous. The RegEx would ignore words with neither a prefix nor suffix, but also words like 'conflict', 'condition', 'nervous', and 'fabulous' because they are either missing a prefix or suffix. Words like 'contagious', 'contentious', 'contiguous, and 'continuous' would be considered. Then, RegEx will find the look ahead and look behind patterns and only grab the letters in between the suffix and prefix. 'tagi', 'tenti', 'tigu', and 'tinu' respectively. You are teaching a math lesson about Order of Operations. Using a combination of look behind and look ahead, you need to grab all of the innermost math expressions within the parentheses.",
      "lesson_challenge": "(Example 1) | 7 * (6 + (-10)) = (5 + 9) * (4 - 6) | (Example 2) | (3 * (20 - 14) + 2) * 5 = (12 ÷ ((-11) + 15) * 25 + ((-7) * (-3) + 4) | (Example 3) | (10 ÷ (2 + 3)) - (-8) = (-(6 * 4) ÷ 12 + (60 ÷ 5) | (Example 4) | 9 ÷ (-1) - (7 * 5) + (30 ÷ 6) * 2 = 0 - (8 + 8) + ((-14) ÷ (17 - 15)) - ((2 * 4) + 3)",
      "lesson_solution": "/(?<=\\()[^()a-z]+(?=\\))/g"
    },
  ];

  @computed('index')
  get lesson() {
    return this.lessons.filter((l) => l.lesson_number === this.index)
  }

  @computed('index')
  get lessonnumber() {
    return this.lesson[0]["lesson_number"];
  }

  set lessonnumber(val) {
    return val;
  }


  @computed('index')
  get lessontitle() {
    return this.lesson[0]["lesson_title"];
  }

  set lessontitle(val) {
    return val;
  }


  @computed('index')
  get lessonexplain() {
    return this.lesson[0]["lesson_main"];
  }

  set lessonexplain(val) {
    return val;
  }

  @computed('index')
  get lessonpara() {
    return this.lesson[0]["lesson_challenge"];
  }

  set lessonpara(val) {
    return val;
  }

  @computed('index')
  get lessonparaSolid() {
    return this.lesson[0]["lesson_challenge"];
  }

  @computed('index')
  get solution() {
    return this.lesson[0]["lesson_solution"];
  }

  set solution(val) {
    return val;
  }
  
  // @tracked lessonexplain = this.lesson[0]["lesson_main"];
  @tracked rInput = '';
  @tracked flagInput = '';

  @tracked rVal = '';
  @tracked correct = false;


  @action
  regexFind() {
    console.log(localStorage.getItem('index'), "poster")
    this.lessonpara = this.lesson[0]["lesson_challenge"];
    this.solution = this.lesson[0]["lesson_solution"];

    this.rInput = document.getElementsByClassName('rInput')[0].value;
    this.flagInput = document.getElementsByClassName('flags')[0].value;

    if (this.index !== 4) {
      this.solution = new RegExp(
        this.solution.split('/')[1],
        this.solution.split('/')[2]
      );
    } else {
      this.solution = "/\^\[0-9\]\{4\}\\s\\w\+\$/"
    }
    this.rVal = new RegExp(this.rInput, this.flagInput);
    this.lessonpara = this.lessonpara.replace(this.rVal, `<span>$&</span>`);
    if (
      this.lessonparaSolid.replace(this.rVal, `<span>$&</span>`) ===
      this.lessonparaSolid.replace(this.solution, `<span>$&</span>`) || this.solution === String(this.rVal)
    ) {
      this.correct = true;
    } else {
      this.correct = false;
    }
    console.log(this.lesson, this.index, "poster2", this.solution)

  }

  @action
  nextLesson() {
    console.log(this.index, 'this is index')
    document.getElementsByClassName('rInput')[0].value = '';
    document.getElementsByClassName('flags')[0].value = '';
    // this.index = localStorage.getItem('lessonI');
    this.correct = false;
    this.index = this.index + 1;
    localStorage.setItem('index', this.index);
    console.log(Number(localStorage.getItem('index')))
    if (this.index > 35) {
      localStorage.clear();
      this.lessonnumber = "∞"
      this.lessontitle = "Mission Accomplished!"
      this.lessonexplain = 'CONGRATULATIONS!';
      this.lessonpara = "You finished RegEx Rex's course.";
      this.unfinished = false;
    }
  }

  @action
  helpToggle() {
    this.helpOpen = !this.helpOpen;
  }
}
