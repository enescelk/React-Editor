import { useContext, EditorContext } from "context"
import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/snippets/css"
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
export default function CssEditor() {

    const { css, setCss } = useContext(EditorContext)

    return (
        <AceEditor
            placeholder="Write your CSS codes here !"
            mode="css"
            theme="monokai"
            name="editor_css"
            fontSize={16}
            showPrintMargin={true}
            value={css}
            height={'100%'}
            width={'100%'}

            onChange={val => setCss(val)}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }} />
    )
}
