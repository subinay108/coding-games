'use client'
import React, { useEffect, useState } from 'react'
import CodeSnippetBox from '../components/CodeSnippetBox'
import LanguageSelector from '../components/LanguageSelector'

import { codeSnippetsList } from '../data/codeLanguages'

const page = () => {
  const [snippet, setsnippet] = useState('');
  function getRandomCode(list){
    let randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
  useEffect(()=>{
    setsnippet(getRandomCode(codeSnippetsList));
  }, []);
  return (
    <div className='flex flex-col min-h-screen items-center border border-black'>
        <h1 className='text-xl font-bold'>Guess the Language</h1>
        {/* CODE SNIPPET */}
        <CodeSnippetBox snippet={snippet}/>

        {/* CHOOSE ONE OR MORE LANGUAGE(S) */}
        <LanguageSelector/>

        {/* SUBMIT OR SKIP BUTTON */}
        <button>Skip</button>
        <button>Submit</button>

    </div>
  )
}

export default page