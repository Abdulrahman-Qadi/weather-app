import React, { useEffect, useState } from "react";
import "./PreLoader3.css";
import loadingscreen from "./LoadingScreen.JPG";

function PreLoader3() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setData(json);
                    setloading(true);

                    setTimeout(() => {
                        setcompleted(true);
                    }, 1000);
                });
        }, 2000);
    }, []);

    return ( <
        > {!completed ? ( <
                > {!loading ? ( <
                        div className = "title" >
                        <
                        h1 > Welcome To AgriWeather < /h1> <
                        img src = { loadingscreen }
                        /> <
                        div className = "spinner" >
                        <
                        span > Loading... < /span> <
                        /div> <
                        /div>
                    ) : ( <
                        div className = "completed" > < /div>
                    )
                } <
                />
            ) : ( <
                >
                <
                h1 > Display Page < /h1> <
                />
            )
        } <
        />
    );
}

export default PreLoader3;