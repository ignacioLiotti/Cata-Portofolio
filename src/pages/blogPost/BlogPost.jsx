import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { notionCall } from '../../server';
import ReactHtmlParser from 'react-html-parser';




const BlogPost = () => {
  
  const [notionData, setNotionData]= useState('empty')

  useEffect (() => {
    notionCall().then(data => {
    setNotionData(data)
    })
  },[])

const [post, setPost] = useState(true)

const handlePopUp = (e) => {
    setPost((prev)=>!prev)
}

  const urlId=useParams()
//   console.log(urlId)
  const page = notionData?.results?.find(post=>(post.properties?.Name?.title?.[0].plain_text==urlId?.id))
  console.log('hola',page)

  const img = page?.properties?.Image?.files?.[0]?.file?.url
  const name = page?.properties?.Name?.title?.[0].plain_text
  const summary = page?.properties?.Content?.rich_text?.[0]?.plain_text

  console.log('summary',typeof summary)
  return (
    <div>
        <button onClick={handlePopUp}>aaaa{post}</button>
        {post && 'aaaa'}
    </div>
  )
}

export default BlogPost