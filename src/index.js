import ReactDOM from "react-dom/client"

let user = "imron";

function Welcome(props){
    return <h1>Selamat Datang {props.nama}</h1>
}

function App(props){
    if(user !== "null"){
        return <Welcome nama = {props.nama2}/>
    }else{
        return <button>Login</button>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Welcome nama = "Imron Fuadi"/>
        <App nama2 = {user}/>
    </>
)