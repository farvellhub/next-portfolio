import React from "react";

const IndexPage = (): JSX.Element => {
    return (
        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1">
            <a href="/projects/tallysight">
                <img src="/gifs/social.gif" className="rounded  mx-auto" alt="Social Image Generator" />
            </a>
            <a href="/projects/scholars">
                <img src="/gifs/companysearch.gif" className="rounded   mx-auto" alt="Company Search" />
            </a>
            <a href="/projects">
                <img src="/gifs/newbalance.gif" className="rounded   mx-auto" alt="New Balance" />
            </a>

            <a href="/projects">
                <img src="/gifs/db-dispersive.gif" className="rounded   mx-auto" alt="Dispersive DB" />
            </a>

            <a href="/projects/scholars">
                <img
                    src="/gifs/studentresources.gif"
                    className="rounded   mx-auto"
                    alt="Scholars
                "
                />
            </a>
            <a href="/projects">
                <img src="/gifs/dispersivetree.gif" className="rounded  mx-auto" alt="Dispersive Interactive Tree" />
            </a>
        </div>
    );
};

export default IndexPage;
