import {Link} from "react-router-dom";
import DotsLink from "../../UiKit/DotsLink.tsx";


const LeftComponents = () => {
    return (
        <div className='block h-screen px-4 py-4 border-r-2 border-[#323232]'>
            <div className='flex items-center'>
                <div className='bg-[#434343] px-3 py-1.5 rounded-full'>D</div>
                <span className='ml-2'>Denis</span>
                <button className='w-full ml-4 py-1 rounded-md bg-[#323232]'>Выйти</button>
            </div>
            <div className='w-full my-3 h-0.5 bg-[#323232]'></div>
            <menu className='mt-4'>
                <ul className='space-y-2'>
                    <li className='flex items-center'><DotsLink /><Link className='ml-4' to={'/'}>Начальная страница</Link></li>
                    <li className='flex items-center'><DotsLink /><Link className='ml-4' to={'/'}>Цены на бирже</Link></li>
                </ul>
            </menu>
        </div>
    );
};

export default LeftComponents;