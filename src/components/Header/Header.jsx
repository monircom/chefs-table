import person from '../../assets/images/person.png'
import banner from '../../assets/images/banner.png'

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
      
        <div className="max-w-[1170px] mx-auto mb-20">
                <div className="bg-[#12132D]
                bg-cover bg-no-repeat rounded-[32px] lg:min-h-[550px]"
                style={{backgroundImage: `url(${banner})`}}
                >
                    <div className="flex flex-col justify-center items-center p-3 m-2">                        
                        <h1
                                className="text-white text-3xl  lg:text-[52px]/[76px] text-center font-bold mt-[35px] lg:mt-[130px] mb-6 lg:max-w-[900px]">
                                Discover an exceptional cooking class tailored for you!
                            </h1>
                            <p className="text-white text-center lg:text-lg lg:max-w-[900px] mb-8 mx-3">
                                Indulge in a personalized culinary adventure with our tailored cooking classes. Whether you're a beginner or a seasoned chef, our expert instructors will guide you through an unforgettable experience.</p>
    
                            <div>
                                <button 
                                    className="btn bg-[#0BE58A] text-[#150B2B] lg:text-xl px-8 rounded-full mr-6">Explore Now
                                </button>
                                <button 
                                className="btn btn-ghost btn-outline text-white lg:text-xl px-5 rounded-full ">Our Feedback
                            </button>
                            </div>  
                    </div>    
                </div>
            </div>

   
        </div>
    );
}

export default Header;