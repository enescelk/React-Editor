import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/snippets/html"
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { EditorContext, useContext } from 'context';
export default function HtmlEditor() {

    const { html, setHtml } = useContext(EditorContext)


    return (
        <AceEditor
            placeholder="Write your HTML codes here !"
            mode="html"
            theme="monokai"
            name="editor_html"
            fontSize={16}
            showPrintMargin={true}
            value={html}
            height={'100%'}
            width={'100%'}
            onChange={html => setHtml(html)}
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
