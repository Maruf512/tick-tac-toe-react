import { useState } from "react";

const anime = {
    name: "One Punch Man",
    imageUrl:
        "https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2023/01/31/one-punch-man.jpg",
    punch: "https://cdn.gfinityesports.com/images/ncavvykf/gfinityesports/a0bf8d6c51ac2a45a2bfd5f60d15ab45f6783605-1920x1080.jpg?rect=0,60,1920,960&w=1200&h=600&auto=format",
};

export const Profile = () => {
    const [punch, setPunch] = useState(true);

    function handelClick() {
        setPunch(!punch);
    }

    return (
        <div>
            <h1>{anime.name}</h1>
            <button onClick={handelClick}>Just a ragular punch</button>
            <br />
            <img
                className="avatar"
                src={punch ? anime.imageUrl : anime.punch}
                alt={"Photo of " + anime.name}
            />
        </div>
    );
};
