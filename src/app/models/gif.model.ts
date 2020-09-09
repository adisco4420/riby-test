export interface IGif {
    id: string;
    url: string;
    title: string;
    trending_datetime: string;
    import_datetime: string;
    source_tld: string;
    rating: string;
    slug: string;
    images: {
        original: {
            url: string;
            size: string;
            height: string;
            width: string;
            hash: string;
        }
    };
}
