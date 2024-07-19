import { useState } from 'react'
import assetLogo from './assets/asset.svg'
import iconLogo from '/icon.svg'
import * as boxburner from '@velipso/boxburner';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <img src={iconLogo} />
        <img src={assetLogo} />
      </div>
      <h1>boxburner</h1>
      <div>
        <button onClick={() => {
          setCount((count) => count + 1);
          boxburner.test();
        }}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
