declare namespace Collections {
    export type Navbar = {
        title?: string;
        items: (Link | LinkGroup)[];
    }

    export type LinkGroup = {
        title?: string;
        items: Link[];
    }

    export type Link = {
        title: string;
        url: string;
    }

    export type Page = {
        title: string;
        slug: string;
        excerpt: string;
    }
}