import {BiHomeHeart,BiUser,BiBookmarkHeart,BiMessage} from 'react-icons/bi'
import {AiOutlineDesktop} from 'react-icons/ai'
export const navbar = [
    {
        id: 1,
        icon : <BiHomeHeart />,
        value : '/#'
    },
    {
        id: 2,
        icon :  <BiUser />,
        value : '/#about'
    },
    {
        id: 3,
        icon :  <BiBookmarkHeart />,
        value : '/#experience'
    },
    {
        id: 4,
        icon : <AiOutlineDesktop />,
        value : '/#portfolio'
    },
    {
        id: 5,
        icon :  <BiMessage />,
        value : '/#contact'
    },
]