import React from 'react'
import styled from 'styled-components'
import { request, gql } from "graphql-request"


const PageContainer = styled.div`
    padding-top: 6em;
    width: 100%;
    height: 100%;
    background: url(/BodyBackground.png) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`

const HeaderContainer = styled.div`

    padding: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-auto-columns: auto;
    gap: 1em 0.5em;
    grid-auto-flow: row;
    grid-template-areas:
      "TitleText picture"
      "TitleText picture"
      "content content";
  @media (max-width: 768px) {
    display: grid; 
    grid-auto-columns: auto; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto auto; 
    gap: 1em 0.5em; 
    grid-template-areas: 
      "picture picture"
      "TitleText TitleText"
      "content content"; 
  
  }
`
const HeaderTitleTextContainer = styled.div`
    grid-area: TitleText;
    display: flex;
    flex-direction: column;
    padding: 1em;
    align-content: flex-start;
    border-width: 2px;
    backdrop-filter: blur(8px) saturate(180%);
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    background-color: rgba(26, 26, 26, 0.24);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow:
    0px 2.2px 11.3px -79px rgba(0, 0, 0, 0.491),
    0px 30px 90px -79px rgba(0, 0, 0, 0.96);
`
const HeaderTitleText = styled.h1`
    color: rgba(242, 242, 242, 0.99);
    font-size: 3.5em;
    font-weight: 600;
    text-align: left;
    text-wrap: no-wrap;
    overflow: ellipses;
    text-shadow:
    0px 2.2px 11.3px -79px rgba(0, 0, 0, 0.491),
    0px 30px 90px -79px rgba(0, 0, 0, 0.96);
  
    @media (max-width: 768px) {
        font-size: 3.4em;;
    }
    @media (max-width: 388px) {
        font-size: 2.4em;;
    }
`
const HeaderAuthor = styled.div`
    grid-area: author;
`
const HeaderImageContainer = styled.div`
    grid-area: picture;
    place-items: center;
    background-image:transparent;
    // background-image:  
    // radial-gradient(at 63% 57%, hsla(29,99%,61%,1) 0, transparent 41%),  
    // radial-gradient(at 57% 59%, hsla(22,99%,63%,1) 0, transparent 26%),  
    // radial-gradient(at 81% 49%, hsla(29,99%,62%,1) 0, transparent 22%),  
    // radial-gradient(at 71% 36%, hsla(28,100%,74%,1) 0, transparent 27%),  
    // radial-gradient(at 47% 71%, hsla(35,98%,81%,1) 0, transparent 29%),  
    // radial-gradient(at 47% 37%, hsla(22,100%,77%,1) 0, transparent 21%),  
    // radial-gradient(at 65% 48%, hsla(355,85%,93%,1) 0, transparent 31%),  
    // radial-gradient(at 64% 39%, hsla(0,100%,52%,1) 0, transparent 24%);
    // background-repeat: no-repeat;
    // background-size: 40%;
    // background-position: right;
    @media (max-width: 768px) {
        display: none;
    }
`

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    
`
const HeaderImage = styled.img`
    display: flex;
    height: auto;
    width: 60%;
    position: relative;
    margin-right: 6em;
    @media (max-width: 768px) {
        display: none;
    }
`
const AuthorImage = styled(HeaderImage)`
    @media (max-width: 768px) {
        display: flex;
    }
`

const ContentContainerOuter = styled(HeaderTitleTextContainer)`
    grid-area: content;
    color: rgba(12, 12, 12, 0.69);
    padding: 2em;

    @media (max-width: 768px) {
        padding: 1em;
    }
`
const ContentContainer = styled(HeaderTitleTextContainer)`
    grid-area: content;
    color: rgba(12, 12, 12, 0.69);
    padding: 4em;
    background: rgba(247, 244, 196, 1);
    @media (max-width: 768px) {
        padding: 1em;
    }
`
const ContentLink = styled.a`
    color: rgba(247, 147, 30, 99);
    font-size: 1.1em;
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
const ContentTable = styled.table`
    width: 60%;
    height: auto;
    border-collapse: collapse;
    // border: 2px solid rgba(242, 242, 242, 0.6);
    align-self: center;
    margin-top: 3.69em;
    margin-bottom: 3.69em;
    text-align: center;
    
`
const ContentTableHeader = styled.th`
    font-size: 2em;
    color: rgba(242, 242, 242, 0.98);
    border-bottom: 2px solid rgba(242, 242, 242, 0.4);
    
    @media (max-width: 768px) {
        font-size: 1.2em;
    }
`

const ContentTableDivider = styled.td`
`

const ContentImageWrapper = styled.div`
    height: auto;
    width: 100%
    display: flex;
    flex-direction: row;
`
const ContentImage = styled.img`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5em;
    margin-bottom: 5em;
    text-align: center;
    width: 60%;
    height: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const ContentText = styled.p`
    font-size: 1.1em;
    margin-top: 1em;
`

const ContentVideo = styled.iframe`
    // display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 9em;
    margin-bottom: 9em;
    height: 25em;
    width: 69%;
    @media (min-width: 1422px) {
        height: 45em;
    }
    @media (max-width: 1008px) {
        width: 94%;
        height: 18em;
    }
    @media (max-width: 468px) {
      height: 100%;
      width: 94%;
      margin-top: 3em;
      margin-bottom: 3em;
    }
`

export async function getStaticProps({params}) {
    const graphUrl = "https://api-us-east-1.graphcms.com/v2/cl3qq8l0089wt01z1d7ywhzo8/master"
    const postBySlug = gql`
    {
        blogPost(where: {slug: "${params.slug}"}) {
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
    const post = await request(
        graphUrl,
        postBySlug
    )
    return {
        props: {
            post: {...post.blogPost}
        }
    }
}

export async function getStaticPaths() {
    const graphUrl = "https://api-us-east-1.graphcms.com/v2/cl3qq8l0089wt01z1d7ywhzo8/master"
    const allSlugs = gql`
        {
            blogPosts {
            slug
            }
        }
    ` 
    const slugs = await request(graphUrl, allSlugs)

    const slugList = slugs.blogPosts.map( (post) => {
        return {params: {slug: post.slug}}
    })

    return {
        paths: slugList,
        fallback: false
    }
}

const BlogArticle = ({post}) => {
    console.log(post)
    console.log("HILL")
    return (
        <>
        <PageContainer>
        <HeaderContainer>
            <HeaderTitleTextContainer>
                <HeaderTitleText >{post.title}</HeaderTitleText>
                <FlexRow style={{justifyContent: "flex-start", marginTop: "2.1em"}}>
                    <HeaderAuthor style={{marginRight: "0.4em"}}>by</HeaderAuthor>
                    <HeaderAuthor style={{color: "#f7931e", fontWeight: "600"}}>{post.author}</HeaderAuthor>
                    <AuthorImage style={{width: "12%", marginLeft: "1em", }} src={post.thumbnail.url} />
                    <HeaderAuthor style={{color: "#f7931e", alignSelf: "flex-end"}}>{post.publishedDate}</HeaderAuthor>
                </FlexRow>
            </HeaderTitleTextContainer>
            <HeaderImageContainer>
                <FlexRow>
                    <HeaderImage src={post.thumbnail.url} />
                </FlexRow>
            </HeaderImageContainer>
            <ContentContainerOuter>
            <ContentContainer>
                <article dangerouslySetInnerHTML={{__html: post.content.html}} >

                </article>
            </ContentContainer>
            </ContentContainerOuter>
        </HeaderContainer>
        </PageContainer>

        </>
    )
}

export default BlogArticle
