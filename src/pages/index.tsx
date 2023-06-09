import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Cart from "../components/Cart";
import Counter from "../components/Counter";
import { Provider, rootStore } from "../models/Root";
const GitHubButton = dynamic(import("react-github-btn"), { ssr: false });

export default function Home() {
  return (
    <Provider value={rootStore}>
      <Head>
        <title>react-hooks-mobx-state-tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <img
          src="./mstlogo.png"
          alt="mst logo"
          className="block w-64 h-auto mx-auto"
        />
        <div className="relative">
          <h1 className="text-3xl font-bold text-center">
            react-hooks-mobx-state-tree
          </h1>
          <div className="absolute flex justify-center w-full mt-3">
            <GitHubButton
              href="https://github.com/ecklf/react-hooks-mobx-state-tree"
              data-icon="octicon-star"
              data-size="large"
              data-show-count={true}
              aria-label="Star ecklf/react-hooks-mobx-state-tree on GitHub"
            >
              Star
            </GitHubButton>
          </div>
        </div>
        <Counter />
        <Cart />
      </div>
    </Provider>
  );
}
