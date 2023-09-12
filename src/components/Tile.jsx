function Tile ({imageUrl, tileTitle, tileParagraph}) {
    return (
        <>
            <section>
                <img src={imageUrl} alt=""/>
                <h2>{tileTitle}</h2>
                <p>{tileParagraph}</p>
            </section>
        </>
    )
}
export default Tile;