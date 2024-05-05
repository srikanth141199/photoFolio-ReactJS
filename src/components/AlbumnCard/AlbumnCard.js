import "./AlbumnCard.css"

export default function AlbumnCard({albumn, AlbumnPage, setAlbumnPage}){
    console.log("Albumn : ", albumn);

    const handleAlbumnClick = (evt) => {
        setAlbumnPage({albumnId : albumn.id , open : false})
    }
    return(
        <div className="AlbumnCardContainer">
            <div className="AlbumnCardImage" onClick={handleAlbumnClick}></div>
            <div className="AlbumnCardInfo">{albumn.AlbumnName}</div>
        </div>
    )
}