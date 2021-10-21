import { EditorContext, useContext } from 'context'
import React, { useMemo } from 'react'
import styles from "./Preview.module.css"
export default function Preview() {

    const { html, css, js } = useContext(EditorContext)

    const srcDoc = useMemo(() => {
        if (!html && !css && !js) return false
        return `<!DOCTYPE html>
    <html lang="en">
      <head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-react-app"/>
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        
            <title>React App</title>
            <style>${css}</style> 
      </head>
      <body>
            ${html}
            <script>
            ${js}
            </script>
      </body>
    </html>
    `
    }, [html, css, js])

    return (
        <div className={styles.content}>
            {!srcDoc && <div className={styles.previewLoading}>Enes Çelik</div>}
            {srcDoc && <iframe className={styles.preview} srcDoc={srcDoc}></iframe>}
        </div>
    )
}
