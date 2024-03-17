import PropTypes from 'prop-types';

const Cooking = ({recipe,index ,handleAddToPrepare}) => {
    console.log(index);
    return ( 
       <>
        <tr className="bg-base-200">
          <th className="hidden md:block lg:block  text-center md:p-3 lg:p-3 my-4">{index}</th>                                   
                                                                                                    
              <td className="p-1 md:p-3 lg:p-3">{recipe.recipe_name}</td>
              <td className="p-1 md:p-3 lg:p-3">{recipe.preparing_time} min</td>
              <td className="p-1 md:p-3 lg:p-3">{recipe.calories} calories</td>
               <td className="p-1 md:p-3 lg:p-3">
               <button onClick={() => {handleAddToPrepare(recipe)}} className="p-1 md:p-3 lg:p-3 rounded-full hover:bg-slate-400 font-bold border-0 bg-[#0BE58A]">Preparing</button></td>
        </tr>        
        </>
    );
};

Cooking.propTypes = {
    recipe: PropTypes.object,
    index: PropTypes.number,
    handleAddToPrepare: PropTypes.func.isRequired,
  };

export default Cooking;