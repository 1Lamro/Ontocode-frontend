import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/worker-html";
import "ace-builds/src-noconflict/snippets/html";
import 'ace-builds/src-noconflict/ext-language_tools';

import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-github";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/worker-css";
import "ace-builds/src-noconflict/snippets/css";

import { useState } from 'react'
import styles from './HTML.module.css'
import Mustache from 'mustache';
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const HTML = () => {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [theme, setTheme] = useState('github')

    const renderHtml = () => {
        const renderedHtml = Mustache.render(html, { id: 'html-content' });
        const htmlWithCSS = (
            <>
                <div id="html-content" dangerouslySetInnerHTML={{ __html: renderedHtml }} />
                <style>
                    ${css}
                </style>
            </>
        )
        return <div>{htmlWithCSS}</div>
    }

    const handleChangeTheme = (e) => {
        setTheme(e.target.value)
    }

    const handleDeleteHtml = () => {
        setHtml('')
    }

    const handleDeleteCss = () => {
        setCss('')
    }

    return (
        <>
            <select onClick={(e) => handleChangeTheme(e)}>
                <option value='github'>GitHub</option>
                <option value="tomorrow_night">Tomorrow Night</option>
                <option value='tomorrow_night_blue'>Tomorrow Night Blue</option>
            </select>
            <div className={styles.container}>
                <div className={styles.editorContainer}>
                    <div className={styles.editorBlock}>
                        <div className={styles.headEditor}>
                            Html
                        </div>
                        <AceEditor
                            mode="html"
                            theme={theme}
                            value={html}
                            snippets='html'
                            onChange={setHtml}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true }}
                            enableLiveAutocompletion
                            enableSnippets={true}
                            enableBasicAutocompletion={true}
                            style={{
                                width: '100%',
                                height: '50vh',
                                fontSize: "20px",
                                borderRadius: '0 0 10px 10px'
                            }}
                        />
                        <button onClick={handleDeleteHtml}>Очистить поле</button>
                    </div>
                    <div className={styles.editorBlock}>
                        <div className={styles.headEditor}>
                            CSS
                        </div>
                        <AceEditor
                            mode="css"
                            theme={theme}
                            value={css}
                            snippets='css'
                            onChange={setCss}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true }}
                            enableLiveAutocompletion
                            enableSnippets={true}
                            enableBasicAutocompletion={true}
                            style={{
                                width: '100%',
                                height: '50vh',
                                fontSize: "20px",
                                borderRadius: '0 0 10px 10px'
                            }}
                        />
                        <button onClick={handleDeleteCss}>Очистить поле</button>
                    </div>
                </div>
                <div className={styles.renderHtmlThis}>
                    <p>Ваша собственная страница</p>
                    <div className={styles.htmlCode}>
                        {renderHtml()}
                    </div>
                </div>
            </div>
        </>
    )
};

export default HTML;

