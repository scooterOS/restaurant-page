import Tab from "./tab.js";

class Menu extends Tab {
    init() {
        const $section = document.createElement('section');

        this.recursiveAdd($section, [
        { 'type': 'div', 'id': 'lunch', 'classList': ['row', 'bg', 'center'], 'innerElem': [
            { 'type': 'h1', 'text': 'LUNCH MENU' }
        ]},
        { 'type': 'div', 'classList': ['menu', 'row'], 'innerElem': [
            { 'type': 'h3', 'text': 'Starters' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Seafoam Clam Chowder' },
                    { 'type': 'h6', 'text': '$8' },
                    { 'type': 'p', 'text': 'Creamy chowder with baby clams, potatoes, and herb oil.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Coral Reef Salad' },
                    { 'type': 'h6', 'text': '$9' },
                    { 'type': 'p', 'text': 'Mixed greens, citrus, pickled fennel, toasted almonds, sea-salt vinaigrette.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Tidepool Calamari' },
                    { 'type': 'h6', 'text': '$11' },
                    { 'type': 'p', 'text': 'Crispy rings with lemon-garlic aioli and charred lemon.' },
                ]},
            ]},
            { 'type': 'hr' },
            { 'type': 'h3', 'text': 'Sandwiches & Handhelds' },
            { 'type': 'em', 'text': '(All served with choice of sea-salt fries or kelp-slaw)'},
            { 'type': 'div', 'innerElem': [
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': "Poseidon's Crispy Fish Sandwich" },
                    { 'type': 'h6', 'text': '$15' },
                    { 'type': 'p', 'text': 'Beer-battered cod, iceberg, tomato, dill tartar on brioche.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Atlantis Club' },
                    { 'type': 'h6', 'text': '$14' },
                    { 'type': 'p', 'text': 'Smoked turkey, bacon, avocado, lettuce, tomato, ocean-herb mayo.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Siren Veggie Wrap' },
                    { 'type': 'h6', 'text': '$12' },
                    { 'type': 'p', 'text': 'Charred vegetables, hummus, quinoa, greens, cucumber, basil wrap.' },
                ]},
            ]},
            { 'type': 'hr' },
            { 'type': 'h3', 'text': 'Lunch Entrées' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Grilled Mahi Plate' },
                    { 'type': 'h6', 'text': '$17' },
                    { 'type': 'p', 'text': 'Mango salsa, coconut rice, sautéed greens.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Blackened Shrimp Pasta' },
                    { 'type': 'h6', 'text': '$18' },
                    { 'type': 'p', 'text': 'Linguine with roasted tomatoes, garlic cream, scallions.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Atlantis Burger' },
                    { 'type': 'h6', 'text': '$12' },
                    { 'type': 'p', 'text': 'Half-pound angus patty, cheddar, caramelized onions, house sauce.' },
                ]},
            ]},
        ]},
        { 'type': 'div', 'id': 'dinner', 'classList': ['row', 'bg', 'center'], 'innerElem': [
            { 'type': 'h1', 'text': 'DINNER MENU' }
        ]},
        { 'type': 'div', 'classList': ['menu', 'row'], 'innerElem': [
            { 'type': 'h3', 'text': 'Appetizers' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Pearl Oyster Trio' },
                    { 'type': 'h6', 'text': '$14' },
                    { 'type': 'p', 'text': 'Three styles: classic mignonette, citrus-chili, and smoked-sea-salt.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Volcanic Shrimp' },
                    { 'type': 'h6', 'text': '$13' },
                    { 'type': 'p', 'text': 'Crispy shrimp tossed in spicy lava glaze.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Golden Kelp Arancini' },
                    { 'type': 'h6', 'text': '$10' },
                    { 'type': 'p', 'text': 'Risotto bites with mozzarella and herb-infused breadcrumb.' },
                ]},
            ]},
            { 'type': 'hr' },
            { 'type': 'h3', 'text': 'Main Courses' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Trident Grilled Salmon' },
                    { 'type': 'h6', 'text': '$24' },
                    { 'type': 'p', 'text': 'Lemon-butter glaze, wild rice pilaf, asparagus.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Ocean King Paella' },
                    { 'type': 'h6', 'text': '$28' },
                    { 'type': 'p', 'text': 'Mussels, shrimp, scallops, chorizo, saffron rice, roasted peppers.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Deep Current Ribeye' },
                    { 'type': 'h6', 'text': '$32' },
                    { 'type': 'p', 'text': '14-oz ribeye, garlic mash, charred broccolini, Atlantis steak butter.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Neptune’s Garden Bowl' },
                    { 'type': 'h6', 'text': '$18' },
                    { 'type': 'p', 'text': 'Roasted squash, quinoa, avocado, coconut-lime dressing.' },
                ]},
            ]},
            { 'type': 'hr' },
            { 'type': 'h3', 'text': 'Specialties' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Lobster & Herb Fettucine' },
                    { 'type': 'h6', 'text': '$29' },
                    { 'type': 'p', 'text': 'Fresh lobster, white wine cream, chives, parmesan.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Midnight Tuna Steak' },
                    { 'type': 'h6', 'text': '$27' },
                    { 'type': 'p', 'text': 'Sesame-crusted ahi, soy-ginger glaze, wasabi potatoes.' },
                ]},
            ]},
        ]},
        { 'type': 'div', 'id': 'dessert', 'classList': ['row', 'bg', 'center'], 'innerElem': [
            { 'type': 'h1', 'text': 'DESSERT MENU' }
        ]},
        { 'type': 'div', 'classList': ['menu', 'row'], 'innerElem': [
            { 'type': 'h3', 'text': 'Sweet Waves' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Sea-Salt Caramel Lava Cake' },
                    { 'type': 'h6', 'text': '$9' },
                    { 'type': 'p', 'text': 'Warm chocolate cake with molten caramel and vanilla bean ice cream.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Ocean Mist Cheesecake' },
                    { 'type': 'h6', 'text': '$8' },
                    { 'type': 'p', 'text': 'Light citrus cheesecake with blueberry-kelp coulis.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Tropical Pearl Parfait' },
                    { 'type': 'h6', 'text': '$7' },
                    { 'type': 'p', 'text': 'Coconut cream, pineapple compote, toasted macadamia crumble.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Atlantis Gelato Trio' },
                    { 'type': 'h6', 'text': '$6' },
                    { 'type': 'p', 'text': 'Vanilla bean, mango-sea-salt, dark chocolate.' },
                ]},
            ]},
        ]},
        { 'type': 'div', 'id': 'catering', 'classList': ['row', 'bg', 'center'], 'innerElem': [
            { 'type': 'h1', 'text': 'CATERING MENU' }
        ]},
        { 'type': 'div', 'classList': ['menu', 'row'], 'innerElem': [
            { 'type': 'h3', 'text': 'Catering Packages (per 10 guests)' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Seafarer Lunch Spread' },
                    { 'type': 'h6', 'text': '$140' },
                    { 'type': 'p', 'text': 'Includes Atlantis sandwiches, kelp-slaw, sea-salt chips, cookie platter.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Ocean Banquet Dinner' },
                    { 'type': 'h6', 'text': '$260' },
                    { 'type': 'p', 'text': 'Includes salmon or chicken entrée, mixed greens salad, roasted vegetables, rice pilaf, rolls, dessert bars.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Harbor Party Platter' },
                    { 'type': 'h6', 'text': '$180' },
                    { 'type': 'p', 'text': 'Charcuterie board with seafood accents, artisan cheeses, house dips, flatbreads.' },
                ]},
            ]},
            { 'type': 'hr' },
            { 'type': 'h3', 'text': 'À La Carte Trays' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Shrimp Cocktail Tower' },
                    { 'type': 'h6', 'text': '$65' },
                    { 'type': 'p', 'text': 'Chilled jumbo shrimp with citrus cocktail sauce.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Grilled Veggie Medley' },
                    { 'type': 'h6', 'text': '$40' },
                    { 'type': 'p', 'text': 'Squash, peppers, onions, balsamic glaze.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Trident Pasta Tray' },
                    { 'type': 'h6', 'text': '$55 chicken / $70 shrimp' },
                    { 'type': 'p', 'text': 'Creamy herb pasta with choice of chicken or shrimp.' },
                ]},
                { 'type': 'div', 'classList': ['dish'], 'innerElem': [
                    { 'type': 'h5', 'text': 'Mixed Greens Bowl' },
                    { 'type': 'h6', 'text': '$30' },
                    { 'type': 'p', 'text': 'Citrus vinaigrette, toppings on the side.' },
                ]},
            ]},
            { 'type': 'hr' },
            { 'type': 'h3', 'text': 'Desserts' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'ul', 'innerElem': [
                    { 'type': 'li', 'innerElem': [
                        { 'type': 'h5', 'text': 'Brownie Reef Bites' },
                        { 'type': 'h6', 'text': '$30 per dozen' },
                    ]},
                    { 'type': 'li', 'innerElem': [
                        { 'type': 'h5', 'text': 'Mini Cheesecake Waves' },
                        { 'type': 'h6', 'text': '$36 per dozen' },
                    ]},
                    { 'type': 'li', 'innerElem': [
                        { 'type': 'h5', 'text': 'Fruit-of-the-Sea Platter (tropical fruits)' },
                        { 'type': 'h6', 'text': '$45' },
                    ]},
                ]},
            ]},
            { 'type': 'hr' },
            { 'type': 'h3', 'text': 'Beverage Options' },
            { 'type': 'div', 'innerElem': [
                { 'type': 'ul', 'innerElem': [
                    { 'type': 'li', 'text': 'Fresh tea, lemonade, iced coffee, fruit punch.' },
                    { 'type': 'h6', 'text': '$4 per person' },
                    { 'type': 'li', 'text': 'Sparkling water' },
                    { 'type': 'h6', 'text': '$2 per person' },
                ]},
            ]},
        ]},
        ]);

        return $section;
    }
}

export default new Menu();