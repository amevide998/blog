"use client";
import styles from './writePage.module.css';
import Image from "next/image";
import {useEffect, useState} from "react";

// import 'react-quill/dist/quill.bubble.css';
// import ReactQuill from "react-quill";
import {redirect, useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {app} from "@/utils/firebase";

const storage = getStorage(app);

let ReactQuill;
if (typeof window !== 'undefined') {
    // Only import ReactQuill on the client side
    ReactQuill = require("react-quill");
    require("react-quill/dist/quill.bubble.css");
}


export default function WritePage () {

    const [file, setFile] = useState(undefined);
    const [media, setMedia] = useState("")
    const [title, setTitle] = useState("")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const {status} = useSession()

    const router = useRouter();

    useEffect( ()=> {
        const upload = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        }
        file && upload();
    },[file])

    if(status === 'loading'){
        return (
            <div className={styles.loading}>
                Loading ...
            </div>
        )
    }
    else if (status !== 'authenticated') {
        redirect('/')
    }

    const slugify = (str) => {
        return str
            .toLowerCase()
            .trim()
            .replaceAll(" ", "-")

    }

    const handleSubmit = async () => {
        const res = await fetch(
            `/api/posts`,{
                method: "POST",
                body: JSON.stringify({
                    title,
                    description: value,
                    img:media,
                    slug: slugify(title),
                    catSlug: "travel"
                })
            }
        )
        router.push(`posts/${slugify(title)}`)
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder={"Title"}
                className={styles.input}
                size={"40"}
                onChange={e=> setTitle(e.target.value)}
            />
            {/*<input type={"text"} placeholder={"category"}/>*/}
            <div className={styles.editor}>
                <button className={styles.button} onClick={()=> setOpen(!open)}>
                    <Image src={"/plus.png"} alt={""} width={16} height={16} />
                </button>
                {
                    open && (
                        <div className={styles.add}>
                            <input
                                type={"file"}
                                id={"image"}
                                onChange={(e)=> setFile(e.target.files[0])}
                                style={{display: "none"}}
                            />
                            <button className={styles.addButton}>
                                <label htmlFor={"image"}>
                                    <Image src={"/image.png"} alt={""} width={16} height={16} />
                                </label>
                            </button>
                            <button className={styles.addButton}>
                                <Image src={"/external.png"} alt={""} width={16} height={16} />
                            </button>
                            <button className={styles.addButton}>
                                <Image src={"/video.png"} alt={""} width={16} height={16} />
                            </button>
                        </div>
                    )
                }
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder={"tell your stories.."}
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>
                Publish
            </button>
        </div>
    )
}