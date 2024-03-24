import { Fragment } from 'react';
import { people } from './data.js';
import { getImageUrl } from './utils.js';

// export default function List() {
//     const chemists = people.filter(
//         (person) => person.profession === 'chemist'
//         );
//     const listItemsChemist = chemists.map((person) => (
//         <li key={person.id}>
//             <img
//                 src={getImageUrl(person)}
//                 alt={person.name}
//             />
//             <p>
//                 <b>{person.name}:</b>
//                 {' ' + person.profession + ' '}
//                 known for {person.accomplishment}
//             </p>
//         </li>
//     ));
//     const other = people.filter(
//         (person) => person.profession !== 'chemist'
//         );
//     const listItemsOther = other.map((person) => (
//         <li key={person.id}>
//             <img
//                 src={getImageUrl(person)}
//                 alt={person.name}
//             />
//             <p>
//                 <b>{person.name}:</b>
//                 {' ' + person.profession + ' '}
//                 known for {person.accomplishment}
//             </p>
//         </li>
//     ));
//     return (
//         <article>
//             <h1>Scientists</h1>
//             <tr>
//             <ul>{listItemsChemist}</ul>
//             </tr>
//             <ul>{listItemsOther}</ul>
//             <tr></tr>
//         </article>
//     );
// }
// import { recipes } from './data.js';

// export default function RecipeList() {
//     let recipesUl
    
//     const recipesH1 = recipes.map((el) => (
//         <div key={el.id}>
//         <h1>
//             {el.name}
//         </h1>
//        <ul>
//         {el.ingredients.map(
//             (ingredients) => (
//                 <li>
//                     {ingredients}
//                 </li>
//                 )
//         )
//         }
//        </ul>
//         </div>
//     ));

//     return (
//         <div>
//             <h1>Recipes</h1>
//             {recipesH1}
//         </div>
//     );
// }
// import { recipes } from './data.js';

// function Recipe({id, name, ingredients}) {
//     return ( 
//         <div>
//                 <div key={id}>
//                     <h2>{name}</h2>
//                     <ul>
//                      {ingredients.map((el) => (
//                         <li>
//                             {el}
//                         </li>
//                      ))}
//                     </ul>
//                 </div>
//         </div>
//      );
// }

// export default function RecipeList() {
//     return (
//         <div>
//         <h1>Recipes</h1>
//         {recipes.map((el)=>(
//         <Recipe id = {el.id} name={el.name} ingredients={el.ingredients} key={el.id}/>
//         ))}
//         </div>
//     );
// }
const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.',
    ],
};

export default function Poem() {
    return (
        <article>
            {poem.lines.map((line, index) => (
                <Fragment  key={index}>
                    {index > 0 && <hr/>}
                    <p>{line}</p>
                </Fragment>
            ))}
        </article>
    );
}