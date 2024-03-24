// function Item({ name, isPacked }) {
//     return (
//         <li className="item">
//             {name} {isPacked ? '✔' : '❌'}
//         </li>
//     );
// }

// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item isPacked={true} name="Space suit" />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }
// function Item({ name, importance }) {
//     return (
//     <li className="item">
//         {name}
//         {importance !== 0 && (
//             <i>(importance {importance})</i>
//         )}
//     </li>
//     );
// }


// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item importance={9} name="Space suit" />
//                 <Item
//                     importance={0}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item importance={6} name="Photo of Tam" />
//             </ul>
//         </section>
//     );
// }
function Drink({ name }) {
    
    let container = (
        <>
        <dd>bean</dd>
                <dt>Caffeine content</dt>
                <dd>80–185 mg/cup</dd>
                <dt>Age</dt>
                <dd>1,000+ years</dd>
        </>
    )

    if (name === 'tea') {
        container = (
            <>
            <dd>leaf</dd>
                    <dt>Caffeine content</dt>
                    <dd>15–70 mg/cup</dd>
                    <dt>Age</dt>
                    <dd>4,000+ years</dd>
            </>
        )
    }

    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                {container}
            </dl>
        </section>
    );
}

export default function DrinkList() {
    return (
        <div>
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    );
}