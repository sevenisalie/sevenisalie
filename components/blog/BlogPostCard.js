import React, {useState, useEffect} from "react"
import styled from "styled-components"
import Link from "next/link"

import {BsArrowRightCircle} from "react-icons/bs"

const BlogPostCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    border-width: 2px;
    box-shadow: var(--shadow-elevation-medium);
    background-color: rgba(106, 12, 228, 0.97);
    border: 1px solid rgba(242, 242, 242, 0.12);
    border-radius: 8px;
`

export const ContentLink = styled.a`
    color: #f7931e;
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

const BlogPostCardImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
   
`
const BlogPostCardImage = styled.img`
    height: auto;
    opacity: 88%;
    width: 100%;
    border-radius: 8px;
    border-radius: 8px 8px 0 0;
    box-shadow: var(--shadow-elevation-low);
    @media (max-width: 768px) {
        padding: 0.6em;
        position: relative;
        border-radius: 12px;
    }
    @media (max-width: 412px) {
        position: relative;
    }
`
const BlogPostTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 100%;
    align-content: space-around;
    justify-content: space-around;
    padding: 0.4em;
    box-shadow: var(--shadow-elevation-medium);
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
const BlogPostCardTitleText = styled.div`
    font-size: 2.2em;
    font-weight: 800;
    text-align: left;
    color: rgba(242, 242, 242, 0.97);
    margin-top: 0.6em;
`

const BlogPostCardDescriptionText = styled.div`
    font-size: 1.1em;
    font-weight: 200;
    text-align: left;
    color: rgba(242, 242, 242, 0.86);
    margin-top: 0.8em;
    margin-bottom: 0.8em;
    @media (max-width: 768px) {
        font-size: 0.8em;
    }
`
const BlogPostCardArticleLink = styled(ContentLink)`
    font-size: 0.9em;
    text-align: left;
    cursor: pointer;
`

const BlogPost = ({ date, slug, summary, title, author, content, thumbnail }) => {
    
    return (
        <>
           <BlogPostCard>

                    <BlogPostCardImageContainer>
                        <BlogPostCardImage src={thumbnail}></BlogPostCardImage>
                    </BlogPostCardImageContainer>

                    <BlogPostTextContainer>
                        <BlogPostCardDateText>{date}</BlogPostCardDateText>
                        <BlogPostCardTitleText>{title}</BlogPostCardTitleText>
                        <BlogPostCardDescriptionText>{summary}</BlogPostCardDescriptionText>
                        {/* <BlogPostCardArticleLink to={`/post/${props.post.slug}`}> */}
                        <Link href={`/posts/${slug}`}>
                        <BlogPostCardArticleLink>
                            Read More<BsArrowRightCircle style={{marginLeft: "0.4em"}}/>
                        </BlogPostCardArticleLink>
                        </Link>

                    </BlogPostTextContainer>

            </BlogPostCard> 

       
        </>
    )
}

export default BlogPost