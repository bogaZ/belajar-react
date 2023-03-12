import './style.css'

function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

export default function Kotak() {
    return (
        <div className='bodyButton'>
            <h1>Welcome to my app</h1>
            <MyButton />
            <h1>coba</h1>
        </div>
    );
}

