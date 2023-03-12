const user = [
    {
        name: 'Dhwam',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    },
    {
        name: 'bogaZ',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }
]


export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user[1].imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

