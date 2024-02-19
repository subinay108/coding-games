import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

const CodeSnippetBox = ({ snippet }) => {
  const codeRef = useRef(null);
  useEffect(()=>{
    hljs.highlightAll();;
  }, [snippet]);
  return (
    <div className='w-3/5 min-h-40 border border-black'>
      <pre>
        <code className='language-html' ref={codeRef}>{snippet}</code>
      </pre>
    </div>
  )
}

export default CodeSnippetBox