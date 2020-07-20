import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';

const Home = ({ repositores }) => {
    <div>
        <Link href="/blog">
            <a>Blog</a>
        </Link>
        { repositores.map(repo => (
        <h1 key={repo.id}>{repo.name}</h1>
        )) }
    </div>
};

//next.js lifecycle
Home.getInitialProps = async () => {
    const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
    const repositores = await response.json()

    console.log(repositores);

    return { repositores };

};

export default Home;