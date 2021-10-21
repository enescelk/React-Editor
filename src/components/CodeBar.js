import { React, useMemo, useState } from 'react'
import styles from "components/CodeBar.module.css"
import HtmlEditor from './Editor/HtmlEditor';
import CssEditor from './Editor/CssEditor';
import JsEditor from './Editor/JsEditor';
import { Resizable } from 'react-resizable';


export default function CodeBar() {


    const [width, setWidth] = useState(600);
    const [activeTab, setActiveTab] = useState('html');

    const onResize = (event, { element, size, handle }) => {
        setWidth(size.width);
    };

    return (
        <Resizable width={width} onResize={onResize}>
            <aside className={styles.codebar} style={{ width: `${width}px` }}>
                <nav className={styles.tab}>
                    <button onClick={() => setActiveTab('html')} className={`${styles.item} ${activeTab === 'html' && styles.activeTab || ''}`}>HTML</button>
                    <button onClick={() => setActiveTab('css')} className={`${styles.item} ${activeTab === 'css' && styles.activeTab || ''}`}>CSS</button>
                    <button onClick={() => setActiveTab('js')} className={`${styles.item} ${activeTab === 'js' && styles.activeTab || ''}`}>JS</button>
                </nav>

                <section className={styles.editor}>
                    {activeTab === 'html' && <HtmlEditor />}
                    {activeTab === 'css' && <CssEditor />}
                    {activeTab === 'js' && <JsEditor />}
                </section>


            </aside>
        </Resizable>



    )
}
