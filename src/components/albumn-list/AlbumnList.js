import { useState } from "react"
import ImageList from "../ImageList/ImageList";
import AlbumnForm from "../AlbumnForm/AlbumnForm";

import {db} from "../../firebaseInit";

export default function AlbumnList(){

    const [AlbumnPage, setAlbumnPage] = useState(true);

    return(
        <div className="AlbumnContainer">
            {AlbumnPage ? <div className="AlbumnList">
                {/* to show Albumn Form*/}
                <div className="AlbumnForm">
                    <AlbumnForm/>
                </div>
            </div>:<ImageList/>}
        </div>
    )
}