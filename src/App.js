import { useState } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMardown] = useState()

  return (
    <Wrapper>
      <main>
        <section className='markdown'>
          <textarea className='input' value={markdown} onChange={(e) => setMardown(e.target.value)}></textarea>
        </section>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .markdown,
  .result {
    display: grid;
    background: var(--clr-5);
    margin-bottom: 1rem;
    box-shadow: 1px 2px 4px 1px var(--clr-1);
    width: 300px;
    min-height: 400px;
  }

  .input {
    padding: 1rem;
  }

  .result {
    padding: 15px 10px;
    background: var(--clr-5);
  }
`

export default App
