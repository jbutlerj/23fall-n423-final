import React from "react";
import "semantic-ui-css/semantic.css";
import Link from "next/link";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}
