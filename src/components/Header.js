import React, { useState } from 'react'
import styles from "./Header.module.css"
import Webcam from "react-webcam";
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill, BsFillRecordCircleFill, BsStopCircleFill } from "react-icons/bs"
import { useReactMediaRecorder } from "react-media-recorder";

import Draggable from 'react-draggable';

export default function Header() {

    const [talkingHead, setTalkingHead] = useState(false);

    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ audio: true, screen: true });

    return (
        <>
            <header className={styles.header}>
                {mediaBlobUrl && status === 'stopped' && (
                    <a href={mediaBlobUrl} download={"video.mp4"} className={`${styles.button} ${styles.downloadButton}`}>Download Video</a>
                )}
                {(status === 'idle' || status === 'stopped') && (
                    <button onClick={startRecording} className={styles.button}>
                        <BsFillRecordCircleFill fill="red" size={23} />
                    </button>
                )}
                {status === 'recording' && (
                    <button onClick={stopRecording} className={styles.button}>
                        <BsStopCircleFill fill="red" size={23} />
                    </button>
                )}
                <button onClick={() => setTalkingHead(!talkingHead)} className={styles.button}>
                    {talkingHead && <BsFillCameraVideoFill fill="#fff" size={23} /> || <BsFillCameraVideoOffFill fill="#fff" size={23} />}
                </button>
            </header>
            {talkingHead && <Draggable><Webcam className={styles.camera} audio={false} videoConstraints={{
                width: 1280,
                height: 720,
                facingMode: "user"
            }} /></Draggable>}
        </>
    )
}
