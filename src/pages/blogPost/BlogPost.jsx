import React, { useEffect, useState } from 'react';
import HtmlParser from 'react-html-parser/lib/HtmlParser';
import { useParams } from 'react-router-dom';
import axios from '../../axios.js'
import Styled from 'styled-components'
import { Contact } from '../../components';

import './blogPost.css'

const BlogPost = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const req = await axios.get('/62b7073e412a48cfa18d4ff5c2b1079c');
    setBooks(req.data);
    }
    fetchData();
    }, [])
  const urlId=useParams()
  const page = books?.find(post=>(post.Name===urlId?.id))
  console.log(page)

  const img = page?.Image?.[0]?.url
  const imgDesc = page?.ImgDesc
  const name = page?.Name
  const content = page?.Content

  return (
    <>
    <Blog>
      <Date>{page?.Fecha}</Date>
      <Title>{name}</Title>
      {img && 
      <>
      <Image src={img} alt={name}/>
      <Desc>{imgDesc}</Desc>
      </>
      }
      {HtmlParser(content)}
    </Blog>
    <Contact/>
    </>
  )
}
const Desc = Styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
  align-self: center;
`

const Image = Styled.img`
  width: 100%;
`

const Blog= Styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin : 4rem 25%;
  height: 100%;
  font-family: var(--font-secondary);
  @media (max-width: 768px) {
    margin : 4rem 10%;
  }
`
const Title = Styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  align-self: center;
  font-family: var(--font-primary)

`
const Date = Styled.p`
  font-size: 1rem;
  font-weight: 300;
  align-self: center;
`
export default BlogPost