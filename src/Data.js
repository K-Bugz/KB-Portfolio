// Data storage for all components that need an array of objects. 


// Skill Array is used in the me section on HomePage.js. images are from www.svgrepo.com.
export const skillsArray = [   
        { name: 'Node', img: 'https://www.svgrepo.com/show/303205/html-5-logo.svg' },
        { name: 'React', img: 'https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg' },
        { name: 'HTML', img: 'https://www.svgrepo.com/show/508837/html5-01.svg' },
        { name: 'CSS', img: 'https://www.svgrepo.com/show/452185/css-3.svg' },
        { name: 'Python', img: 'https://www.svgrepo.com/show/452091/python.svg' },
        { name: 'Docker', img: 'https://www.svgrepo.com/show/452192/docker.svg' },
        { name: 'SQL', img: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
        { name: 'MongoDB', img: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
        { name: 'Scratch', img: 'https://www.svgrepo.com/show/306704/scratch.svg' },
        { name: 'Excel', img: 'https://www.svgrepo.com/show/424846/excel-file-type.svg' }
    ]

// Projects array is used to show my featured projects currently on HomePage.js. 
export const projectsArray = [
    {
        name: 'AccuRadio',
        des:'A music streaming company. I created new and maintained existing components within React.JS framework. I also made the new player that was more accesible and responsive.',
        link: 'https://k-bugz.github.io/Code-Quiz/',
        img: process.env.PUBLIC_URL + 'AccuRadio.jpg',
        spot: 0
    },
    {
        name: 'Weather App',
        des:'This was one of my first time using an API and I had to use two. One for getting the city location in lat and long then use that to hit another API to get the weather. Lots of fun!',
        link: 'https://k-bugz.github.io/Weather-Dashboard/',
        img: process.env.PUBLIC_URL + 'DesktopWeatherDash.png',
        spot: 1
    },
    {
        name: 'Password Generator',
        des:'This project required me to learn RegEx and apply it to user inputs and user validation.',
        link: 'https://k-bugz.github.io/password-generator/',
        img: process.env.PUBLIC_URL + 'pwordGen.png',
        spot: 2
    },
    {
        name: 'Football Coding Quiz',
        des:'This was one of my first time using Jquery. I had a lot of fun thinking about how to get this to work properly. I chose to make each question an array of objects!',
        link: 'https://k-bugz.github.io/Code-Quiz/',
        img: process.env.PUBLIC_URL + 'BearsCodeQuiz.png',
        spot: 3
    },
]

// CurrentTopicsArray array is used to show my currently made projects and goals. Currently only on CurrentTopicsPage.  
export const currentTopicsArray = [ 
        { 
            name: 'Finishing up Porfolio Website', 
            img: '',
            des: 'This was a good refreshing project for git control, HTML, CSS and React.js. I got to control the flow of components and data (props). Some of the git controls was merging in features with my Main branch. Working on real-life git commit messages and ect. In regards to HTML & CSS was with the flow of parent to child styling that flex offers. I decided to use styled-components as it allows one beautiful space for all my JS,CSS and HTML. ',
            date: '3/4/2024'
         },
        { 
            name: 'CodeWars Challange', 
            img: '',
            des: 'Get my Kata to 100. It is now 47 solved coding challenges. The goal is to keep my mind sharp with JavaScript and Python. I want people to know that I can solve difficult problems and that I study solutions to become a better code architect/developer.',
            date: '3/5/2024'
         },
        { 
            name: '', 
            img: '',
            des: '',
            date: ''
         },
   ]