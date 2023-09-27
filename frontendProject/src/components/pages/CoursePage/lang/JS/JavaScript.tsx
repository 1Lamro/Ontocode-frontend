import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/worker-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import 'ace-builds/src-noconflict/ext-language_tools';

import { useState } from 'react'
import styles from './JavaScript.module.css'
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const JavaScript = () => {
    const [js, setJs] = useState('')

    // const renderJS = () => {
    //     const rendered = Mustache.render(html, { id: 'html-content' });
    //     return <div dangerouslySetInnerHTML={{ __html: rendered }}></div>
    // }

    return (
        <>
                <div>
         <Carousel>
          <CarouselItem>
          <iframe
            title="YouTube Video"
            width="300"
            height="300"
            src='https://www.youtube.com/embed/yxnWxlHy_SU'
            allowFullScreen
          ></iframe>
          </CarouselItem>
          <CarouselItem>
          <iframe
            title="YouTube Video"
            width="300"
            height="300"
            src='https://www.youtube.com/embed/DOEtVdkKwcU'
            allowFullScreen
          ></iframe>
          </CarouselItem>
        </Carousel>
        </div>
            <div className={styles.editorContainer}>
                <div className={styles.editorBlock}>
                    <div className={styles.headEditor}>
                        JavaScript
                    </div>
                    <AceEditor
                        mode="javascript"
                        theme="tomorrow_night"
                        snippets='javascript'
                        // maxLines="10"
                        onChange={setJs}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                        enableLiveAutocompletion
                        enableSnippets={true}
                        enableBasicAutocompletion={true}
                        style={{
                            width: '100%',
                            height: '50vh',
                            borderRadius: '0 0 10px 10px'
                        }}
                    />
                </div>
            </div>
        </>
    )
};

export default JavaScript;

