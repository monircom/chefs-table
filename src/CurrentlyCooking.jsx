import PropTypes from 'prop-types';

const CurrentlyCooking = ({recipe,index}) => {
    return (
        <>
          <tr className="bg-base-200">
                                                    <th>{index}</th>
               <td>{recipe.recipe_name}</td>
              <td>{recipe.preparing_time} min</td>
              <td>{recipe.calories} calories</td>
                                                </tr>


            
        </>
    );
};

CurrentlyCooking.propTypes = {
    recipe: PropTypes.object,
    index: PropTypes.number,
  };
export default CurrentlyCooking;