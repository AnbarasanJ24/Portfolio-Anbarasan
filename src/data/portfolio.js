import foodMenus from '../assets/food_menus.jpg'
import reuseable from '../assets/reuseable.jpg'
import movie from '../assets/movie.jpg'

export const portfolioData = [
    {
        id: 1,
        image: foodMenus,
        title : 'Best Food Menu',
        tech : 'HTML - CSS - JS - PWA',
        github : 'https://github.com/AnbarasanJ24/PWA-Native',
        demo : 'https://food-menus-pwa.web.app/',
        description : 'Created a food menu application with PWA support from scratch without using any framework'
    },
    {
        id: 2,
        image: reuseable,
        title : 'Reuseable React Components',
        tech : 'React JS',
        github : 'https://github.com/AnbarasanJ24/reuseable-react-projects',
        demo : '',
        description : 'Created multiple reusebale components used in different react projects'
    },
    {
        id: 3,
        image: movie,
        title : 'Movies API',
        tech : 'Node JS',
        github : 'https://github.com/AnbarasanJ24/Theatre-Movies-API-NodeJS',
        demo : '',
        description : 'Created a web service in Node JS, designed to showcase collection of theatre & movies'
    }
]