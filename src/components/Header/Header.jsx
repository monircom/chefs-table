import person from '../../assets/images/person.png'
const Header = () => {
    return (
        <div>      
        <nav className="container max-w-[1170px] px-4 my-8 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabindex="0"
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-[16px]"><a>Home</a></li>
                            <li className="text-[16px]"><a>Recipes</a></li>
                            <li className="text-[16px]"><a>About</a></li>
                            <li className="text-[16px]"><a>Search</a></li>                            
                        </ul>
                    </div>
                    <a className="text-4xl font-extrabold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li className="text-[16px]"><a>Home</a></li>
                            <li className="text-[16px]"><a>Recipes</a></li>
                            <li className="text-[16px]"><a>About</a></li>
                            <li className="text-[16px]"><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">    
                <div className="flex gap-2">
                    <div className="">                    
                    <label className="input input-bordered rounded-full flex flex-start  text-left">
<button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

                            <input type="text" placeholder="Search" className="input  w-24 md:w-auto" />
                            

                        </label>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 p-2 bg-green-400 rounded-full">
                            <img className='h-8' alt="User" src={person} />
                        </div>
                        </div>       
                    </div>
                    </div>                 
                </div>
            </div>
        </nav>
      

   
        </div>
    );
}

export default Header;