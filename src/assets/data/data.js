import espresso from '../images/home/desktop/image-gran-espresso.png'
import planalto from '../images/home/desktop/image-planalto.png'
import piccollo from '../images/home/desktop/image-piccollo.png'
import danche from '../images/home/desktop/image-danche.png'

export const collection = [
    {
        id: 1,
        image : espresso,
        name: 'Gran Expresso',
        discription: 'Light and flavorful blend with cocoa and black pepper for an intense experience.'
    },
    {
        id: 2,
        image : planalto,
        name: 'Planalto',
        discription: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.'
    },
    {
        id: 3,
        image : piccollo,
        name: 'Piccollo',
        discription: 'Mild and smooth blend featuring notes of toasted almond and dried cherry.'
    },
    {
        id: 4,
        image : danche,
        name: 'Danche',
        discription: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes.'
    }
]


import bean from '../images/home/desktop/icon-coffee-bean.svg'
import gift from '../images/home/desktop/icon-gift.svg'
import truck from '../images/home/desktop/icon-truck.svg'

export const reasons = [
    {
        id: 1,
        image : bean,
        heading: 'Best quality',
        discription: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
    },
    {
        id: 2,
        image : gift,
        heading: 'Exclusive benefits',
        discription: 'Special offers and swag when you subscribe, including 30% off your first shipment.'
    },
    {
        id: 3,
        image : truck,
        heading: 'Free shipping',
        discription: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
    }
]


export const steps = [
    {
        stepNumber: 1,
        name: 'Pick your coffee',
        discription: 'Select from our evloving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
    },
    {
        stepNumber: 2,
        name: 'Choose the frequency',
        discription: 'customize your order frequency, quantity, even your roast style and grind type. Pause, Skip or cancel your subscription with no commitment through our online portal.'
    },
    {
        stepNumber: 3,
        name: 'Receive and enjoy',
        discription: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
    },
]

export const questions = [
    {
        id: 1,
        question: "How do you drink your coffee?",
        options: [
            {
                name : 'Capsule',
                discription : 'Compatible with nespresso systems and similar brewers.'
            },
            {
                name : 'Filter',
                discription : 'For pour over or dip methods like aeropress, chemex and v60'
            },
            {
                name : 'Espresso',
                discription : 'Dense and finely ground beans for an intense, flavourful experience.'
            }
        ]
    },
    {
        id: 2,
        question: "What type of coffee?",
        options: [
            {
                name : 'Single origin',
                discription : 'Distinct, high quality coffe from a specific family-owned farm.'
            },
            {
                name : 'Decaf',
                discription : 'Just like regular coffee, except the caffeine has been removed.'
            },
            {
                name : 'Blended',
                discription : 'Combination of two or three dark roasted beans of organic coffees.'
            }
        ]
    },
    {
        id: 3,
        question: "How much would you like?",
        options: [
            {
                name : '250g',
                discription : 'Perfect option for the solo drinker. Yields about 12 delicious cups.'
            },
            {
                name : '500g',
                discription : 'Perfect option for for a couple. Yields about 40 delectable cups.'
            },
            {
                name : '1000g',
                discription : 'Perfect for offices and events. Yields about 90 delightful cups.'
            }
        ]
    },
    {
        id: 4,
        question: "Want us to grind them?",
        options: [
            {
                name : 'Wholebean',
                discription : 'Best choice if you cherish the full sensory epxerience'
            },
            {
                name : 'Filter',
                discription : 'For drip or pour-over coffee methods such as v60 or aeropress'
            },
            {
                name : 'Cafetiere',
                discription : 'Course ground beans specially suited for french press coffee.'
            }
        ]
    },
    {
        id: 5,
        question: "How often should we deliver?",
        options: [
            {
                name : 'Every week',
                discription : '$14.00 per shipment. includes free first-class shipping.'
            },
            {
                name : 'Every 2 weeks',
                discription : '$17.25 per shipment. Includes free priority shipping.'
            },
            {
                name : 'Every month',
                discription : '$22.50 per shipment. Includes free priority shipping.'
            }
        ]
    }
] 