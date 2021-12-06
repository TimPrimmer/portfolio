import { useEffect, useState } from 'react';

function Lazy(props) {

  const [source, setSource] = useState("preload.jpg");

  useEffect(() => {
    const img = new Image()
    img.src = props
    img.onload = () => setSource(props)
  }, [props])

  return (
    <div style={{ backgroundImage: `url(${source})` }}></div>
  )
}

export default Lazy;