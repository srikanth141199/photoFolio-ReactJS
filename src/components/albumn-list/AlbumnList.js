import { useEffect, useState } from "react"
import ImageList from "../ImageList/ImageList";
import AlbumnForm from "../AlbumnForm/AlbumnForm";

import {db} from "../../firebaseInit";
import { collection, onSnapshot } from "firebase/firestore";
import AlbumnCard from "../AlbumnCard/AlbumnCard";

import "./AlbumnList.css"

export default function AlbumnList(){

    const [AlbumnPage, setAlbumnPage] = useState({albumnId : "", open : true});
    const [albumnList, setAlbumnList] = useState([]);

    useEffect(()=>{
        onSnapshot(collection(db, "Albumn"), (snapShot)=>{
            const tile = snapShot.docs.map((item)=>{
                return{
                    id : item.id,
                    ...item.data()
                }
            })
            setAlbumnList(tile);
            
        })
    }, [])

    return(
        <div className="AlbumnContainer">
            {AlbumnPage.open ? <div className="AlbumnList">
                {/* to show Albumn Form*/}
                <div className="AlbumnForm">
                    <AlbumnForm/>
                </div>
                {/* <h3 className="AlbumnHeading">
                        Your Albums List
                    </h3> */}

                <div className="AlbumnCard">
                    

                    {albumnList.map((item, index) => (
                        <AlbumnCard key={item.id} albumn={item} AlbumnPage = {AlbumnPage} setAlbumnPage = {setAlbumnPage}/>
                    ))}
                </div>

            </div>:<ImageList setAlbumnPage = {setAlbumnPage}  AlbumnPage = {AlbumnPage} />}
        </div>
    )
}