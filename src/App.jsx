import './App.css'

function App() {
    const logButtonText = (text) => {
        console.log(text);
    };

    return (
        <>
            <h1>Handbags & Purses</h1>
                <nav>
                    <button type={"button"} onClick={() => logButtonText("to the collection")}>to the collection</button>
                    <button type={"button"} onClick={() => logButtonText("shop all bags")}>shop all bags</button>
                    <button type={"button"} disabled>pre-orders</button>
                </nav>
            <main></main>
        </>
    )
}

export default App;
