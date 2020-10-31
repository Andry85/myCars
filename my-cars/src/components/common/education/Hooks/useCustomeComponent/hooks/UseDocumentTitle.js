import {useEffect} from 'react'




const UseDocumentTitle = (count) => {
  useEffect(()=> {
    document.title = `Count ${count}`
  }, [count])
}

export default UseDocumentTitle


