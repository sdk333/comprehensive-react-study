// export default function Clock({ time }) {
//     let hours = time.getHours();
//     let className;
//     if (hours >= 0 && hours <= 6) {
//         className = 'night';
//     } else {
//         className = 'day';
//     }
//     return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
// }
// import Profile from './Profile.js';
// import { StrictMode } from 'react';

    
// export default function App() {
//     return (
// <StrictMode>
//         <>
//             <Profile
//                 person={{
//                     imageId: 'lrWQx8l',
//                     name: 'Subrahmanyan Chandrasekhar',
//                 }}
//                 />
//             <Profile
//                 person={{
//                     imageId: 'MK3eW3A',
//                     name: 'Creola Katherine Johnson',
//                 }}
//                 />
//         </>
//                 </StrictMode>
//     );
// }
export default function StoryTray({ stories }) {
    stories.push({
        id: 'create',
        label: 'Create Story',
    });

    return (
        <ul>
            {stories.map((story) => (
                <li key={story.id}>{story.label}</li>
            ))}
        </ul>
    );
}