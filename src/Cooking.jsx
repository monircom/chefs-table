import PropTypes from 'prop-types';

const Cooking = ({recipe,idx}) => {
    //console.log(recipe);
    return ( 
       <>
        <tr className="bg-base-200 font-fira">
          <th className="hidden md:block lg:block  text-center md:p-3 lg:p-3 my-4">{idx}</th>                                   
                                                                                                    
              <td className="p-1 md:p-3 lg:p-3">{recipe.recipe_name}</td>
              <td className="p-1 md:p-3 lg:p-3">{recipe.preparing_time} min</td>
              <td className="p-1 md:p-3 lg:p-3">{recipe.calories} calories</td>
               <td className="p-1 md:p-3 lg:p-3">
               <button className="p-1 md:p-3 lg:p-3 rounded-2xl hover:bg-slate-400 font-fira font-bold border-0 bg-[#0BE58A]">Preparing</button></td>
                                                   
                                                    </tr>



        
        </>
    );
};

Cooking.propTypes = {
    recipe: PropTypes.object,
    idx: PropTypes.object,
    //handleAddToBookmark: PropTypes.func.isRequired,
    //handleAddToCook: PropTypes.func.isRequired,
  };

export default Cooking;