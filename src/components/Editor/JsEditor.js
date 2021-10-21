import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/snippets/javascript"
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { EditorContext, useContext } from '../../context';
export default function JsEditor() {

    const { js, setJs } = useContext(EditorContext)

    return (
        <AceEditor
            placeholder="Write your JS codes here !"
            mode="javascript"
            theme="monokai"
            name="editor_js"
            fontSize={16}
            showPrintMargin={true}
            value={js}
            height={'100%'}
            width={'100%'}

            onChange={js => setJs(js)}
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
