const questions = [
    {
        type: 'radio',
        question: 'What does HTML stand for?',
        options: ['Hyper Text Preprocessor', 'Hyper Text Markup Language', 'Hyper Text Multiple Language', 'Hyper Tool Multi Language'],
        correctAnswer: 'Hyper Text Markup Language'
    },
    {
        type: 'radio',
        question: 'What does CSS stand for?',
        options: ['Common Style Sheet', 'Colorful Style Sheet', 'Computer Style Sheet', 'Cascading Style Sheet'],
        correctAnswer: 'Cascading Style Sheet'
    },
    {
        type: 'radio',
        question: 'What does PHP stand for?',
        options: ['Hypertext Preprocessor', 'Hypertext Programming', 'Hypertext Preprogramming', 'Hometext Preprocessor'],
        correctAnswer: 'Hypertext Preprocessor'
    },
    {
        type: 'radio',
        question: 'What does SQL stand for?',
        options: ['Stylish Question Language', 'Stylesheet Query Language', 'Statement Question Language', 'Structured Query Language'],
        correctAnswer: 'Structured Query Language'
    },
    {
        type: 'radio',
        question: 'What does XML stand for?',
        options: ['eXtensible Markup Language', 'eXecutable Multiple Language', 'eXTra Multi-Program Language', 'eXamine Multiple Language'],
        correctAnswer: 'eXtensible Markup Language'
    },
    {
        type: 'radio',
        question: 'Which HTML tag is used to define an internal style sheet?',
        options: ['<style>', '<script>', '<css>', '<link>'],
        correctAnswer: '<style>'
    },
    {
        type: 'radio',
        question: 'Which property is used to change the background color in CSS?',
        options: ['color', 'bgcolor', 'background-color', 'background'],
        correctAnswer: 'background-color'
    },
    {
        type: 'radio',
        question: 'Which CSS property controls the text size?',
        options: ['font-style', 'text-size', 'font-size', 'text-style'],
        correctAnswer: 'font-size'
    },
    {
        type: 'radio',
        question: 'Which built-in method combines the text of two strings and returns a new string?',
        options: ['append()', 'concat()', 'attach()', 'link()'],
        correctAnswer: 'concat()'
    },
    {
        type: 'radio',
        question: 'Which of the following is a valid JavaScript variable name?',
        options: ['2names', 'first-name', '_first_and_last_names', 'first&last'],
        correctAnswer: '_first_and_last_names'
    },
    {
        type: 'radio',
        question: 'Which tag is used to create a hyperlink in HTML?',
        options: ['<link>', '<a>', '<href>', '<hyperlink>'],
        correctAnswer: '<a>'
    },
    {
        type: 'radio',
        question: 'Which attribute is used to specify the destination of a hyperlink in HTML?',
        options: ['src', 'href', 'link', 'dest'],
        correctAnswer: 'href'
    },
    {
        type: 'radio',
        question: 'Which of the following is the correct way to comment in CSS?',
        options: ['// comment', '/* comment */', '<!-- comment -->', '# comment'],
        correctAnswer: '/* comment */'
    },
    {
        type: 'radio',
        question: 'Which built-in method sorts the elements of an array?',
        options: ['changeOrder(order)', 'order()', 'sort()', 'None of the above.'],
        correctAnswer: 'sort()'
    },
    {
        type: 'radio',
        question: 'Which of the following functions is used to parse a string to an integer in JavaScript?',
        options: ['Integer.parse', 'parseInt()', 'parse()', 'None of the above.'],
        correctAnswer: 'parseInt()'
    },
    {
        type: 'radio',
        question: 'Which HTML tag is used to define an ordered list?',
        options: ['<ul>', '<ol>', '<li>', '<list>'],
        correctAnswer: '<ol>'
    },
    {
        type: 'radio',
        question: 'Which method is used to remove the whitespace at the beginning and end of a string?',
        options: ['strip()', 'trim()', 'cut()', 'None of the above.'],
        correctAnswer: 'trim()'
    },
    {
        type: 'radio',
        question: 'Which property is used to change the font of an element in CSS?',
        options: ['font-family', 'font-style', 'font-weight', 'font-size'],
        correctAnswer: 'font-family'
    },
    {
        type: 'radio',
        question: 'Which tag is used to create a line break in HTML?',
        options: ['<break>', '<lb>', '<br>', '<line>'],
        correctAnswer: '<br>'
    },
    {
        type: 'radio',
        question: 'Which of the following is not a reserved word in JavaScript?',
        options: ['interface', 'throws', 'program', 'short'],
        correctAnswer: 'program'
    }
];

export default questions;
