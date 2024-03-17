// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { useEffect, useState } from 'react'
import OurRecipes from './components/OurRecipes/OurRecipes';
import Recipe from './Recipe';

function App() {
 
const [recipes , setRecipies  ] = useState([])

useEffect(() => {
  fetch("recipes.json")
    .then((res) => res.json())
    .then((data) => {
       console.log(data);
      setRecipies(data);
    });
}, []);

  return (
    <>
     <Header></Header>
     <div className="container mx-auto mb-10">
     <OurRecipes></OurRecipes>

     <div className="container mx-auto flex justify-between flex-col md:flex-row lg:flex-row gap-5">
                <div className="w-full md:w-[45%] lg:w-[58%]">
                    <div className="grid grid-cols-1  lg:grid-cols-2 mt-5 gap-5 w-full">
                    
                    {recipes?.map((recipe) => (
                      <Recipe recipe={recipe}> </Recipe>
                    ))}
                    
                    

                    </div>
                </div>

                <div className="w-full md:w-[50%] lg:w-[40%]">
                    <div className="w-full p-3 border-2 border-gray-500  bg-gray-50 rounded-3xl mt-5">
                        <div>
                            <div className="mt-5 font-fira">
                                <h3 className="text-2xl text-center font-bold font-lexend">Want to cook:0</h3>
                                <div className="divider px-5"></div>
                                <div>
                                    <div className="w-full font-fira">
                                        <div className="overflow-x-auto">
                                            <table className="table">
                                                <thead>
                                                    <tr className="font-bold font-fira">
                                                        <th className="hidden md:block lg:block"></th>
                                                        <th className="p-1 md:p-3 lg:p-3">Name</th>
                                                        <th className="p-1 md:p-3 lg:p-3">Time</th>
                                                        <th className="p-1 md:p-3 lg:p-3">Calories</th>
                                                        <th className="p-1 md:p-3 lg:p-3"></th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-2xl text-center font-bold font-lexend">Currently cooking: 1</h3>
                                <div className="divider px-5"></div>
                                <div>
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Name</th>
                                                    <th>Time</th>
                                                    <th>Calories</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-base-200">
                                                    <th>1</th>
                                                    <td>Vegetable Pasta</td>
                                                    <td>25 min</td>
                                                    <td>250 calories</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 font-lexend font-bold text-lg">
                            <h3 className="">Total Time = 25 minutes </h3>
                            <h3>Total Calories = 250 calories </h3>
                        </div>
                    </div>
                </div>  
                
            </div>
            <div className="Toastify"></div>





     </div>
      
    </>
  )
}

export default App
