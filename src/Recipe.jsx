import PropTypes from 'prop-types';

const Recipe = ({recipe,handleAddToCook}) => {
    return (
        <div className="w-full h-full">
                            <div
                                className="card w-full h-full card-compact border-2 border-gray-500  bg-base-100 shadow-xl p-3">
                                <figure><img className="rounded-xl" src={recipe.recipe_image} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title ">{recipe.recipe_name}</h2>
                                    <p className="">{recipe.short_description}</p>
                                    <div>
                                        <p className="font-bold">Ingredients: {recipe.ingredients.length} </p>
                                        <ul className="list-disc pl-5 ml-5">
                                           {
                                            recipe.ingredients.map((ing,idx) =>( <li key={idx}>  {ing}</li>))
                                           }
                                            
                                        </ul>
                                    </div>

                                    <div className="flex justify-between ">
                                        <p className="flex gap-2 items-center"><svg stroke="currentColor"
                                                fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z">
                                                </path>
                                            </svg> {recipe.preparing_time} min</p>
                                        <p className="flex gap-2 items-center"><svg stroke="currentColor"
                                                fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z">
                                                </path>
                                            </svg> {recipe.calories} calories</p>
                                    </div>
                                   
                                    <div className="card-actions justify-start">
                                        <button onClick={() => {handleAddToCook(recipe)}}
                                            className="btn bg-[#0BE58A] font-bold rounded-full">Want to Cook</button></div>
                                </div>
                            </div>
                    </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddToCook: PropTypes.func.isRequired,
  };

export default Recipe;