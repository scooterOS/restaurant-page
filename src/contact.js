import Tab from "./tab.js";

class Contact extends Tab {
    init() {
        const $section = document.createElement('section');

        this.recursiveAdd($section, [
            { 'type': 'div', 'classList': ['row', 'block', 'narrow'], 'innerElem': [
                { 'type': 'h1', 'text': 'Contact' },
                { 'type': 'br' },
                { 'type': 'hr' },
                { 'type': 'h2', 'text': 'Poseidon' },
                { 'type': 'div', 'classList': ['tabbed'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Executive Chef' },
                    { 'type': 'h7', 'text': '555-555-5554' },
                    { 'type': 'h7', 'text': 'example1@gmail.com' },
                ]},
                { 'type': 'hr' },
                { 'type': 'h2', 'text': 'Neptune' },
                { 'type': 'div', 'classList': ['tabbed'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Host' },
                    { 'type': 'h7', 'text': '555-555-5555' },
                    { 'type': 'h7', 'text': 'example2@gmail.com' },
                ]},
                { 'type': 'hr' },
                { 'type': 'h2', 'text': 'David Hasselhoff' },
                { 'type': 'div', 'classList': ['tabbed'], 'innerElem': [
                    { 'type': 'h5', 'text': 'General Manager' },
                    { 'type': 'h7', 'text': '555-555-5556' },
                    { 'type': 'h7', 'text': 'example3@gmail.com' },
                ]},
            ]},
            { 'type': 'div', 'classList': ['row', 'block', 'narrow'], 'innerElem': [
                { 'type': 'h1', 'text': 'Review' },
                { 'type': 'h5', 'text': 'We would love to hear from you!' },
                { 'type': 'form', 'attr': { 'action': '#' }, 'innerElem': [
                    { 'type': 'div', 'classList': ['input-row'], 'innerElem': [
                        { 'type': 'label', 'attr': { 'for': 'name' }, 'text': 'Name:' },
                        { 'type': 'input', 'id': 'name', 'attr': { 'type': 'text', 'required': true }},
                    ]},
                    { 'type': 'div', 'classList': ['input-row'], 'innerElem': [
                        { 'type': 'label', 'attr': { 'for': 'name' }, 'text': 'Email:' },
                        { 'type': 'input', 'id': 'email', 'attr': { 'type': 'email', 'required': true }},
                    ]},
                    { 'type': 'div', 'classList': ['rate'], 'innerElem': [
                        { 'type': 'p', 'classList': ['inline'], 'text': 'Rating:' },
                        { 'type': 'input', 'id': 'star5', 'attr': { 'type': 'radio', 'name': 'rate', 'value': '5' }},
                        { 'type': 'label', 'attr': { 'for': 'star5', 'title': '5 stars' }},
                        { 'type': 'input', 'id': 'star4', 'attr': { 'type': 'radio', 'name': 'rate', 'value': '4' }},
                        { 'type': 'label', 'attr': { 'for': 'star4', 'title': '4 stars' }},
                        { 'type': 'input', 'id': 'star3', 'attr': { 'type': 'radio', 'name': 'rate', 'value': '3' }},
                        { 'type': 'label', 'attr': { 'for': 'star3', 'title': '3 stars' }},
                        { 'type': 'input', 'id': 'star2', 'attr': { 'type': 'radio', 'name': 'rate', 'value': '2' }},
                        { 'type': 'label', 'attr': { 'for': 'star2', 'title': '2 stars' }},
                        { 'type': 'input', 'id': 'star1', 'attr': { 'type': 'radio', 'name': 'rate', 'value': '1' }},
                        { 'type': 'label', 'attr': { 'for': 'star1', 'title': '1 star' }},
                    ]},
                    { 'type': 'br' }, { 'type': 'br' }, { 'type': 'br' },
                    { 'type': 'div', 'innerElem': [
                        { 'type': 'label', 'attr': { 'for': 'feedback' }, 'text': 'Feedback' },
                        { 'type': 'textarea', 'id': 'feedback', 'attr': { 'rows': 4, 'minlength': 8, 'maxlength': 4000, 'required': true }},
                        { 'type': 'input', 'id': 'submit-btn', 'attr': { 'type': 'submit', 'value': 'Submit' }},
                    ]},
                ]},
            ]},
        ]);
        return $section;
    }
}



export default new Contact();