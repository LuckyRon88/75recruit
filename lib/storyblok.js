import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: `${process.env.STORYBLOK_75RECRUIT_API_TOKEN}`,
    cache: {
        clear: 'auto',
        type: 'memory'
    }
})

export default Storyblok