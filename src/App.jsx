import "./App.css";
import icon from "./assets/pixelicon.jpg";

//component imports
import Navbar from "./components/navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center content-center">
                <img className="mbç-4 rounded-full h-40 w-40" src={icon} />
                <h1>This is the beginning. And boy is it ugly.</h1>
                <p className="text-sm px-40 my-2 text-center">
                    this font probably isn't going to work... reminder to import and try "kongtext" also what the heck
                    are you going to do about design dude? what's your layout? go wireframe something ya dingy
                </p>
            </div>
        </>
    );
}

export default App;
