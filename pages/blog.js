import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Link from "next/link"
import { request, gql } from "graphql-request"
import { animated, useSpring } from "react-spring"
import {dateToHumanReadable} from "../utils/functions"
import {BsFileEarmarkPostFill, BsArrowRightCircle} from "react-icons/bs"

import BlogPost from "../components/blog/BlogPostCard"


const PageContainer = styled.div`
    width: 100%;
    height: auto;
    background: url(/BodyBackground.png) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`

const BlogPageContainer = styled.div`
    display: flex;
    width: 100%;
    height: max-content;
    flex-direction: column;
    padding-left: 5em;
    padding-right: 5em;
    padding-bottom: 5em;
    @media (max-width: 728px) {
        padding: 0.5em;
        padding-top: 0;
    }
`
const PageTitleContainer = styled.div`
    clip-path: polygon(22% 0, 100% 0, 100% 100%, 49% 100%, 0 100%, 0 20%);
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;

    border-radius: 12px;
    padding: 3em;
    padding-top: 3.4em;
    @media (max-width: 408px) {
     
        clip-path: polygon(41% 0, 100% 0, 100% 100%, 49% 100%, 0 100%, 0 36%);
        padding-top: 5.4em;
    }
`
const PageTitleText = styled.div`
    text-align: center;
    height: auto;
    width: 100%;
    backdrop-filter: blur(4px) saturate(180%);
    -webkit-backdrop-filter: blur(4px) saturate(180%);
    background-color: rgba(26, 26, 26, 0.64);
    border-radius: 24px;
    border: 2px solid rgba(255, 255, 255, 0.125);
    box-shadow:
    1.6px 1.6px 3.2px rgba(0, 0, 0, 0.02),
    3.4px 3.4px 7px rgba(0, 0, 0, 0.018),
    5.8px 5.8px 11.8px rgba(0, 0, 0, 0.015),
    8.7px 8.7px 17.8px rgba(0, 0, 0, 0.014),
    12.5px 12.5px 25.7px rgba(0, 0, 0, 0.012);
    font-size: 3em;
    font-weight: 600;
    padding: 0.6em;
    object-fit: contain;
    @media (max-width: 768px) {
        font-size: 2em;
        padding: 0.4em;
    }
    @media (max-width: 380px) {
        font-size: 2em;
        padding: 0.4em;
    }
`

const ContentContainer = styled.div`
    width: 100%;
    height-max-content;
    margin-top: 1.4em;
    margin-bottom: 4em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 3em;
    grid-row-gap: 0px;
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    @media (max-width: 312px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
`
export const ContentTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    padding: 2em;
    border-radius: 9px;
    padding-top: 2.5em;
    box-shadow: var(--shadow-elevation-medium);
    background-color: rgba(106, 12, 228, 0.97);
    border: 1px solid rgba(242, 242, 242, 0.12);

    @media (max-width: 768px) {
        padding: 1.2em;
      
    }
    @media (max-width: 424px) {
        padding: 1.2em;
    }
`
const HeaderBigText = styled.h2`
    color: #fbfbfb;
    font-weight: 800;
    font-size: 2.4em;
    text-align: right;

    margin-bottom: 0px;
    @media (max-width: 768px) {
        font-size: 2em;
    }
    @media (max-width: 318px) {
        font-size: 1.6em;
    }
`

const HeaderImageOne = styled.img`
    height: auto;
    opacity: 88%;
    width: 100%;
    position: relative;
    align-self: flex-end;
    margin-bottom: 1.42em;
    box-shadow: var(--shadow-elevation-medium);
    @media (max-width: 768px) {
        padding: 1.2em;
        position: relative;
        align-self: flex-start;
    }
    @media (max-width: 412px) {
        position: relative;
    }
`

export const ContentText = styled.p`
color: rgba(242, 242, 242, 0.8);
text-align: right;
font-weight: 200;
text-shadow:
  0px 0px 7.8px rgba(0, 0, 0, 0.02),
  0px 0px 17.2px rgba(0, 0, 0, 0.018),
  0px 0px 28.8px rgba(0, 0, 0, 0.015),
;
`
export const ContentHeader = styled(HeaderBigText)`
text-shadow:
  0px 0px 7.8px rgba(0, 0, 0, 0.02),
  0px 0px 17.2px rgba(0, 0, 0, 0.018),
  0px 0px 28.8px rgba(0, 0, 0, 0.015),
  0px 0px 43.4px rgba(0, 0, 0, 0.014),
;
`
export const ContentLink = styled.a`
    color: rgba(240, 201, 5, 0.99);
    font-size: 1.2em;
    font-weight: 200;
    text-decoration: none;
    cursor-pointer;
    text-shadow:
    0px 0px 7.8px rgba(0, 0, 0, 0.02),
    0px 0px 17.2px rgba(0, 0, 0, 0.018),
    0px 0px 28.8px rgba(0, 0, 0, 0.015),
    ;
    &:hover {
        color: #fcdcb6;
    }
    &:select {
        color: orange;
    }
`
const BlogPostGridContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto; 
    gap: 9em 2.5em; 
    margin-top: 4em;
    width: 100%;
    height: max-content;
    @media (max-width: 856px) {
        display: flex;
        flex-direction: column;
        padding: 1.4em;
        justify-content: center;
        align-content: center;
        row-gap: 4em;
    }
    @media (max-width: 412px) {
        display: flex;
        flex-direction: column;
        padding: 1.4em;
        justify-content: center;
        align-content: center;
        row-gap: 4em;
    }
`
const BlogPostCardDateText = styled.div`
    color: #f7931e;
    font-size: 0.7em;
    font-weight: 200;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`
const BlogPostCardArticleLink = styled(ContentLink)`
    font-size: 0.9em;
    text-align: right;
    cursor: pointer;
`
const AnimeHeader = styled(animated.h2)`
    font-size: 8em;
    font-weight: 400;
    color: rgba(242, 242, 242, 0.97);
    text-align: right;
    margin-bottom: 0.3em;

    @media (max-width: 508px) {
        font-size: 5em;
    }
`

export async function getStaticProps() {
    const graphUrl = "https://api-us-east-1.graphcms.com/v2/cl3qq8l0089wt01z1d7ywhzo8/master"
    const blogPostsByDate = gql`
    {
        blogPosts {
          id
          publishDate
          publishedAt
          slug
          summary
          title
          author
          thumbnail {
            url
          }
          content {
            html
          }
        }
      }
    `

    const blogPosts = await request(
        graphUrl,
        blogPostsByDate
    )


    return {
        props: {
            ...blogPosts
        }
    }
}

const Blog = ({ blogPosts }) => {
    const [animeTrigger, setAnimeTrigger] = useState(false)
    const AnimeProps = useSpring({
        opacity: animeTrigger ? 1 : 0,
        marginLeft: animeTrigger ? 0 : -500
    })

    useEffect(() => {
        setAnimeTrigger(true)
    }, [])

    const MappedBlogPosts = blogPosts.map( (post, index) => (
        <BlogPost
            date={post.publishDate}
            slug={post.slug}
            summary={post.summary}
            title={post.title}
            author={post.author}
            content={post.content}
            thumbnail={post.thumbnail.url}
            key={index}
         />
    ))

    const featuredPost = blogPosts[0]    
    return (
        <>
 
            
            <AnimeHeader style={AnimeProps}>Featured Post.</AnimeHeader>

            <ContentContainer>
                
                <ContentTextContainer>
                    <Link href={`/posts/${featuredPost.slug}`}>
                        <BlogPostCardArticleLink >
                            Read More<BsArrowRightCircle style={{marginLeft: "0.4em"}}/>
                        </BlogPostCardArticleLink>
                    </Link>

                    <ContentHeader>{featuredPost.title}</ContentHeader>
                    <ContentText>
                        {featuredPost.summary}
                    </ContentText>
                    <BlogPostCardDateText style={{fontSize: "1.32em", textAlign: "right"}}>{dateToHumanReadable(featuredPost.publishDate)}</BlogPostCardDateText>
                </ContentTextContainer>
                <HeaderImageOne src={featuredPost.thumbnail.url}></HeaderImageOne>
            </ContentContainer> 

  
            <BlogPostGridContainer>
                {MappedBlogPosts}           
            
            </BlogPostGridContainer>
        
        </>
    )
}

export default Blog
