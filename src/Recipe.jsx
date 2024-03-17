
const Recipe = ({recipe}) => {
    return (
        <div className="w-full h-full">
                            <div
                                className="card w-full h-full card-compact border-2 border-gray-500  bg-base-100 shadow-xl p-3">
                                <figure><img src={recipe.recipe_image} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title ">{recipe.recipe_name}</h2>
                                    <p className="font-fira">A delicious and healthy chicken stir fry.</p>
                                    <div>
                                        <p className="font-bold">Ingredients:06 </p>
                                        <ul className="font-fira list-disc pl-5">
                                            <li>550g chicken</li>
                                            <li>120ml soy sauce</li>
                                            <li>1 onion</li>
                                            <li>1 avocado</li>
                                            <li>200g basil leaves</li>
                                            <li>400g mushroom</li>
                                        </ul>
                                    </div>
                                   
                                    <div className="card-actions justify-start"><button
                                            className="btn bg-[#0BE58A] font-bold font-fira">Want to Cook</button></div>
                                </div>
                            </div>
                    </div>
    );
};

export default Recipe;