import React from "react";
import Layout from "../../components/Layout";
import BlogPost from "../../components/storyblok/BlogPost";
import StoryblokService from '../../utils/storyblok-service'


export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            story: props.res.data.story,
            language: props.language,
        }
    }

    static async getInitialProps({ asPath, query }) {
        StoryblokService.setQuery(query)

        let language = query.language || "en"
        let trimDefault = asPath.replace("/en/blog", "/positions")
        let res = await StoryblokService.get(`cdn/stories${trimDefault}`)

        return {
            res,
            language,
        }
    }


    componentDidMount() {
        StoryblokService.initEditor(this)
    }

    render() {
        const contentOfStory = this.state.story.content

        return (

            <BlogPost blok={contentOfStory} />

        )
    }
}