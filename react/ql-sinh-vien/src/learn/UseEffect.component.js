import { useState, useEffect, useRef } from "react"

const Resources = ["posts", "comments", "albums"];
function Content() {
    const [key, setKey] = useState("posts");
    const [posts, setPost] = useState([])
    const [height, setHieght] = useState(false);
    useEffect(function () {            // gọi Api
        fetch(`https://jsonplaceholder.typicode.com/${key}`)
            .then(res => res.json())
            .then(post => {
                setPost(post)
            })

    }, [key])
    function handlScroll() {
        console.log(window.scrollY)
        if (window.scrollY > 180) {
            setHieght(true)
        }
        else setHieght(false)

    }
    useEffect(function () {                   // sự kiện scroll
        window.addEventListener("scroll", handlScroll)
    }, [])
    function handl(res) {
        console.log(res)
        setKey(res);

    }
    return (<>
        <br></br>
        {Resources.map(res => (
            <button
                style={key === res ? { backgroundColor: "yellow" } : {}}
                value={key}
                onClick={() => handl(res)}
                key={res}>
                {res}
            </button>))}
        <input />
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
        </ul>
        {height && <a href="#head" style={{ width: "100px", height: "10px", position: "fixed", right: "10px", bottom: "20px" }}>
            go to top</a>}


    </>)

}

function DemNguoc() {
    const [time, setTime] = useState(5)
    const ref = useRef();
    useEffect(function () {

        if (time > 0) { }
        ref.current = setInterval(function () {
            setTime(pre => pre - 1)
            console.log("Set")

        }, 1000)
        return () => {
            console.log("clear")
            clearInterval(ref.current)

        }
    }, [])
    console.log(time)
    if (time <= 0) {
        clearInterval(ref.current)

    }
    return <>
        <h1>{time}</h1>
    </>
}
export const UseEffect = () => {
    const [show, setShow] = useState(false);
    function handclick() {
        setShow(!show);
    }
    return <>
        <button
            onClick={handclick}
        >toggle</button>
        <div>
            {show && <DemNguoc />}
            {show && <Content />}
        </div>
    </>
}