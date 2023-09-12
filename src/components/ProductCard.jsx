function ProductCard({isBestSeller, productTitle, productPrice, productImageUrl}) {
    return (
        <>
            <article>
                <span>{isBestSeller}</span>
                <img src={productImageUrl}/>
                <p>{productTitle}</p>
                <h4>{productPrice}</h4>
            </article>
        </>
    )
}
export default ProductCard;