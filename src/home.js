import Tab from "./tab.js";

class Home extends Tab {
    init() {
        const $section = document.createElement('section');

        const $thumbnail = this.addElement('div', $section, ['row', 'bg'], { 'id': 'thumbnail' });
        this.addSimpleElement('h1', $thumbnail, 'Atlantis Eatery');
        this.addSimpleElement('h5', $thumbnail, 'Dive into an unforgettable culinary experience beneath the waves');

        const $about = this.addElement('div', $section, ['row', 'block']);
        this.addSimpleElement('h1', $about, 'About');
        this.addSimpleElement('p', $about, 
            `Welcome to Atlantis Eatery, where ancient ocean legends meet modern gastronomy. Nestled in the heart of
            the city, our restaurant transports you to a mythical underwater realm through stunning aquatic-themed
            décor, ambient lighting that mimics the gentle flow of ocean currents, and an atmosphere of timeless
            elegance.`);
        this.addSimpleElement('p', $about, 
            `Our menu celebrates the bounty of the sea alongside carefully curated land-based dishes, each crafted with
            locally-sourced ingredients and presented with artistic flair. From our signature Poseidon's Platter
            featuring the day's freshest catch to our renowned Coral Garden Salad bursting with vibrant flavors, every
            dish tells a story of culinary adventure.`);
        this.addSimpleElement('br', $about);
        this.addSimpleElement('h3', $about, 'What awaits you:');

        const $aboutList = this.addSimpleElement('ul', $about);
        this.addSimpleElement('li', $aboutList, 'Fresh seafood prepared by award-winning chefs');
        this.addSimpleElement('li', $aboutList, 'Elegant dining rooms with floor-to-ceiling aquarium views');
        this.addSimpleElement('li', $aboutList, 'Craft cocktails inspired by ocean mythology');
        this.addSimpleElement('li', $aboutList, 'Private event spaces for celebrations up to 100 guests');
        this.addSimpleElement('li', $aboutList, 'Live ambient music Thursday through Saturday evenings');
        this.addSimpleElement('br', $about);
        
        const $summary = this.addSimpleElement('p', $about);
        $summary.innerHTML = 
            `Whether you're seeking a romantic dinner for two, a family celebration, or a business lunch with a
            difference, Atlantis Eatery promises an immersive dining journey you won't soon forget. Reserve your table
            today and discover why critics call us <em>"a hidden treasure worth exploring."</em>`;
        
        const $reservation = this.addElement('div', $section, ['row', 'bg'], { 'id': 'reservation' });
        this.addSimpleElement('h1', $reservation, 'Make a Reservation');
        this.addSimpleElement('h5', $reservation, 'We are saving a seat for you!');
        this.addSimpleElement('button', $reservation, 'Reservations');

        const $hours = this.addElement('div', $section, ['row', 'block'], { 'id': 'hours' });
        this.addSimpleElement('h1', $hours, 'Hours');

        const $hoursList = this.addSimpleElement('ul', $hours);
        this.addSimpleElement('li', $hoursList, 'Monday: 11am - 8pm');
        this.addSimpleElement('li', $hoursList, 'Tuesday: 11am - 8pm');
        this.addSimpleElement('li', $hoursList, 'Wednesday: 11am - 8pm');
        this.addSimpleElement('li', $hoursList, 'Thursday: 11am - 10pm');
        this.addSimpleElement('li', $hoursList, 'Friday: 11am - 10pm');
        this.addSimpleElement('li', $hoursList, 'Saturday: 4pm - 10pm');
        this.addSimpleElement('li', $hoursList, 'CLOSED');

        const $location = this.addElement('div', $section, ['row', 'block']);
        this.addSimpleElement('h1', $location, 'Location');
        
        const $locationLink = this.addElement('a', $location, [], { 'href': "https://www.google.com/maps/@8.5457357,-34.3908544,6.54z?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" });
        this.addElement('h4', $locationLink, ['map'], {}, '123 Ocean View, Atlantis City');

        return $section;
    }
}

export default new Home();