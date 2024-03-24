import { getImageUrl } from './Utils1.js';

function Avatar({ person, size }) {
    
    let changeSize = 'b';
    if (size < 90) {
        changeSize = 's';
    }

    return (
        <img
            className="avatar"
            src={getImageUrl(person, changeSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {

    return (
        <div>
        <Avatar
            size={40}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP',
            }}
            />
        <Avatar
            size={150}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP',
            }}
            />
            </div>
    );
}