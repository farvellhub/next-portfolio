// import Link from "next/link";
// import { formatTitleURLParam } from "../../support";
// import * as matter from "gray-matter";
// import fs from "fs";
// import path from "path";
import React from "react";
import Head from "next/head";
//import { RiQuillPenLine } from "react-icons/ri";

// export async function getStaticProps() {
//     const postsDirectory = path.join(process.cwd(), "public/posts");
//     const postsFileNames = fs.readdirSync(postsDirectory);

//     const formattedDirectoryNames = postsFileNames.map((postname) => postname.replace(".md", ""));

//     const metadata = postsFileNames
//         .map((file) => {
//             const metaPath = path.join(process.cwd(), `public/posts/${file}`);
//             const meta = matter(fs.readFileSync(metaPath, "utf-8")).data;
//             return meta;
//         })
//         .sort((a, b) => b.date - a.date);

//     return {
//         props: {
//             metadata,
//             formattedDirectoryNames,
//         },
//     };
// }

interface BlogProps {
    metadata: {
        id: string;
        date: number;
        title: string;
        subtitle: string;
    }[];
}
export default function Blog({ metadata }: BlogProps ): JSX.Element {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className="text-whippy">
                <div className="flex">
                    <div>
                        <h1 className="text-4xl">Developer Blog</h1>
                        <p className="text-2xl mb-16">Learn more about my development journey here. </p>
                    </div>
                </div>
                <div className="mx-0 md:mx-16 xl:mx-32">
                    <ul>
                        {metadata?.map(( meta ) => (
                            <li key={meta.id}>
                                {/* <Link
                                    href="/blog/[postname]"
                                    as={`/blog/${formatTitleURLParam(meta.title)}`} // Use FormattedURL instead of this function
                                > */}
                                <div role="button" className="flex justify-between flex-wrap border-b border-t p-4">
                                    <div>
                                        <p className="text-react text-lg">{meta.title}</p>

                                        <p className="text-sm opacity-75">{meta.subtitle}</p>
                                    </div>
                                    <p>{meta.date}</p>
                                </div>
                                {/* </Link> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
