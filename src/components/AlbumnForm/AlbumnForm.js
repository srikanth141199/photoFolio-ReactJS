import "./AlbumnForm.css"

import {db} from "../../firebaseInit";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";

export default function AlbumnForm(){

    const nameRef = useRef();

    const handleClearInput = (evt) =>{
        evt.preventDefault();
        nameRef.current.value = "";
        nameRef.current.focus();
    }

    const handleAlbumCreation = async (evt) =>{
        evt.preventDefault();

        const docRef = await addDoc(collection(db, "Albumn"), {
            AlbumnName : nameRef.current.value,
            ImageList : []           
        });
        toast.success("New Albumn Added");
        nameRef.current.value = "";
        nameRef.current.focus();
    }

    return(
        <div className="AlbumnFormContainer">
            <ToastContainer/>

            <h2 className="createAlbum">
                Create Album
            </h2>

            <form onSubmit={handleAlbumCreation} className="inputContainer">

                <input type="text" placeholder="name" required ref={nameRef}/>
                <button className="clearBtn" onClick={handleClearInput}>Clear</button>
                <button className="addBtn">Add</button>
            </form>
        </div>
    )
}