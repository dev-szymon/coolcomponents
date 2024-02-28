import ParallaxNavigation from "./components/ParallaxNavigation/ParallaxNavigation";

const items = [
    {label: "Home", to: "#"},
    {label: "Store", to: "#"},
    {label: "Blog", to: "#"},
    {label: "Contact", to: "#"}
];
function App() {
    return (
        <main className="w-screen h-screen">
            <ParallaxNavigation items={items} />
        </main>
    );
}

export default App;
