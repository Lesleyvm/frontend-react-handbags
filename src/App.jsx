import './App.css'
import Button from "./components/Button.jsx";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import ProductCard from "./components/ProductCard.jsx";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";
import Tile from "./components/Tile.jsx";

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    text="to the collection"
                    disabled={false}
                />
                <Button
                    text="shop all bags"
                    disabled={false}
                />
                <Button
                    text="pre-orders"
                    disabled={true}
                />
            </nav>

            {/*<nav>*/}
            {/*    <button type={"button"} onClick={() => logButtonText("to the collection")}>to the collection</button>*/}
            {/*    <button type={"button"} onClick={() => logButtonText("shop all bags")}>shop all bags</button>*/}
            {/*    <button type={"button"} disabled>pre-orders</button>*/}
            {/*</nav>*/}

            <main>
                <ProductCard
                    isBestSeller="Best seller"
                    productImageUrl={bag1}
                    productTitle="The handy bag"
                    productPrice="400"
                />
                <ProductCard
                    isBestSeller="Best seller"
                    productImageUrl={bag2}
                    productTitle="The stylish bag"
                    productPrice="250"
                />
                <ProductCard
                    isBestSeller="New collection"
                    productImageUrl={bag3}
                    productTitle="The simple bag"
                    productPrice="300"
                />
                <ProductCard
                    isBestSeller="New collection"
                    productImageUrl={bag4}
                    productTitle="The trendy bag"
                    productPrice="150"
                />

                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag1} alt="the handy bag"/>*/}
                {/*    <p>The handy bag</p>*/}
                {/*    <h4>€400,-</h4>*/}
                {/*</article>*/}
            </main>
            <footer>
                <Tile
                    tileTitle="the brand"
                    tileParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequuntur delectus dolor dolorum eius excepturi expedita facere fugit laboriosam magnam odio provident quisquam, ratione tenetur? Id magnam temporibus ullam."
                />
                <Tile
                    imageUrl={brand}
                />
                <Tile
                    imageUrl={ourStory}
                />
                <Tile
                    tileTitle="our story"
                    tileParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequuntur delectus dolor dolorum eius excepturi expedita facere fugit laboriosam magnam odio provident quisquam, ratione tenetur? Id magnam temporibus ullam."
                />

                {/*<section>*/}
                {/*    <h2>The brand</h2>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequuntur delectus dolor dolorum eius excepturi expedita facere fugit laboriosam magnam odio provident quisquam, ratione tenetur? Id magnam temporibus ullam.</p>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid dignissimos doloribus eos est nihil numquam sed similique sint totam? Aliquid debitis dolore explicabo fugiat magni obcaecati quae repellat voluptatem.</p>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <img src={brand} alt=""/>*/}
                {/*</section>*/}
            </footer>
        </>
    )
}

export default App;
