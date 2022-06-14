import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getCollection, getFirst } from "../util/api";

const Page = ({page}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <h1>{page.attributes.title}</h1>
            <p>{page.attributes.excerpt}</p>
        </div>
    );
}

export const getStaticProps = async ({params, preview}: GetStaticPropsContext) => {
    const { data: page } = await getFirst<Collections.Page>('pages', {
        populate: '*',
        filters: {
            slug: params?.slug
        }
    }, { preview });
    
    return {
        props: {
            page
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: pages } = await getCollection<Collections.Page>('pages');

    return {
        paths: pages.map(page => ({
            params: {
                slug: page.attributes.slug
            }
        })),
        fallback: false
    }
}

export default Page;