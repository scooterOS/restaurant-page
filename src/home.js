import Tab from "./tab.js";

class Home extends Tab {
    init() {
        const $section = document.createElement('section');

        this.recursiveAdd($section, [
        { 'type': 'div', 'id': 'thumbnail', 'classList': ['row', 'bg', 'center', 'top'], 'innerElem': [
                { 'type': 'h1', 'text': 'Atlantis Eatery' },
                { 'type': 'h5', 'text': 'Dive into an unforgettable culinary experience beneath the waves' }
        ]},
        { 'type': 'div', 'id': 'about', 'classList': ['row', 'block'], 'innerElem': [
                { 'type': 'h1', 'text': 'About' },
                { 'type': 'p', 'text': `Welcome to Atlantis Eatery, where ancient ocean legends meet modern gastronomy. 
                    Nestled in the heart of the city, our restaurant transports you to a mythical underwater realm 
                    through stunning aquatic-themed décor, ambient lighting that mimics the gentle flow of ocean 
                    currents, and an atmosphere of timeless elegance.`
                },
                { 'type': 'p', 'text': `Our menu celebrates the bounty of the sea alongside carefully curated land-based dishes, 
                    each crafted with locally-sourced ingredients and presented with artistic flair. From our signature 
                    Poseidon's Platter featuring the day's freshest catch to our renowned Coral Garden Salad bursting 
                    with vibrant flavors, every dish tells a story of culinary adventure.`
                },
                { 'type': 'br' },
                { 'h3': 'What awaits you:' },
                { 'type': 'ul', 'innerElem': [
                    { 'type': 'li', 'text': 'Fresh seafood prepared by award-winning chefs' },
                    { 'type': 'li', 'text': 'Elegant dining rooms with floor-to-ceiling aquarium views' },
                    { 'type': 'li', 'text': 'Craft cocktails inspired by ocean mythology' },
                    { 'type': 'li', 'text': 'Private event spaces for celebrations up to 100 guests' },
                    { 'type': 'li', 'text': 'Live ambient music Thursday through Saturday evenings' },
                ]},
                { 'type': 'br' },
                { 'type': 'span', 'classList': ['inline'], 'innerElem': [
                    { 'type': 'p', 'text': `Whether you're seeking a romantic dinner for two, a family celebration, or a 
                       business lunch with a difference, Atlantis Eatery promises an immersive dining journey you won't 
                       soon forget. Reserve your table today and discover why critics call us`
                    },
                    { 'type': 'em', 'text': ' "a hidden treasure worth exploring."'},
                ]},
        ]},
        { 'type': 'div', 'id': 'reservation', 'classList': ['row', 'bg', 'center'], 'innerElem': [
            { 'type': 'h1', 'text': 'Make a Reservation' },
            { 'type': 'h5', 'text': 'We are saving a seat for you!' },
            { 'type': 'button', 'text': 'Reservations' },
        ]},
        { 'type': 'div', 'id': 'hours', 'classList': ['row', 'block'], 'innerElem': [
            { 'type': 'h1', 'text': 'Hours' },
            { 'type': 'ul', 'innerElem': [
                { 'type': 'li', 'text': 'Monday: 11am - 8pm'},
                { 'type': 'li', 'text': 'Tuesday: 11am - 8pm'},
                { 'type': 'li', 'text': 'Wednesday: 11am - 8pm'},
                { 'type': 'li', 'text': 'Thursday: 11am - 10pm'},
                { 'type': 'li', 'text': 'Friday: 11am - 10pm'},
                { 'type': 'li', 'text': 'Saturday: 4pm - 10pm'},
                { 'type': 'li', 'text': 'Sunday: CLOSED'},
            ]},
        ]},
        { 'type': 'div', 'id': 'location', 'classList': ['row', 'block'], 'innerElem': [
            { 'type': 'h1', 'text': 'Location' },
            { 'type': 'a', 'attr': { 'href': "https://www.google.com/maps/@8.5457357,-34.3908544,6.54z?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" }, 
                'innerElem': [
                    { 'type': 'h4', 'classList': ['map'], 'text': '123 Ocean View, Atlantis City' }
            ]},
        ]},
        ]);
        
        return $section;
    }
}

export default new Home();