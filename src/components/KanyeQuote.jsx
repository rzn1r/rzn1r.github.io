import { useState, useEffect } from 'react'

function KanyeQuote() {
  const [quote, setQuote] = useState('Loading kanye wisdom...')

  useEffect(() => {
    fetch('https://api.kanye.rest/')
      .then(res => res.json())
      .then(data => {
        setQuote(
          <>
            "{data.quote}"<br />
            <span style={{ display: 'block', textAlign: 'right' }}>— Kanye West</span>
          </>
        )
      })
      .catch(() => {
        setQuote('Could not load at this time.')
      })
  }, [])

  return (
    <blockquote id="kanye-quote" style={{ fontStyle: 'italic', position: 'relative', margin: '20px 0' }}>
      {quote}
    </blockquote>
  )
}

export default KanyeQuote
