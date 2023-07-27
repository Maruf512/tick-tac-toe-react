import "./App.css";

const anime = {
    name: "One Punch Man",
    imageUrl:
        "https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2023/01/31/one-punch-man.jpg",
};

function App() {
    return (
        <div>
            <br />
            <h1>Hello World</h1>
            <MyButton />
            <Profile />
        </div>
    );
}

export default App;

const Profile = () => {
    return (
        <div>
            <h1>{anime.name}</h1>
            <img
                className="avatar"
                src={anime.imageUrl}
                alt={"Photo of " + anime.name}
            />
        </div>
    );
};

function MyButton() {
    return (
        <div>
            <br />
            <br />
            <button>I'm a button</button>
        </div>
    );
}
