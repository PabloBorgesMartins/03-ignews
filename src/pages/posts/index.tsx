
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import * as Prismic from '@prismicio/client';


export default function Posts() {
  return (
    <>
      <Head>
        <h1>Posts | Ignews</h1>
      </Head>
      <main className={styles.container}>
        <div className={styles.postList}>
          <a href='#'>
            <time>
              12 de março de 2021
            </time>
            <strong>
              Creating a monorepo
            </strong>
            <p>
              In this guid you'll learn how to create a monorepo
            </p>
          </a>
          <a href='#'>
            <time>
              12 de março de 2021
            </time>
            <strong>
              Creating a monorepo
            </strong>
            <p>
              In this guid you'll learn how to create a monorepo
            </p>
          </a>
          <a href='#'>
            <time>
              12 de março de 2021
            </time>
            <strong>
              Creating a monorepo
            </strong>
            <p>
              In this guid you'll learn how to create a monorepo
            </p>
          </a>
          <a href='#'>
            <time>
              12 de março de 2021
            </time>
            <strong>
              Creating a monorepo
            </strong>
            <p>
              In this guid you'll learn how to create a monorepo
            </p>
          </a>
          <a href='#'>
            <time>
              12 de março de 2021
            </time>
            <strong>
              Creating a monorepo
            </strong>
            <p>
              In this guid you'll learn how to create a monorepo
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicate.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100
  });

  console.log(response);

  return {
    props: {

    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}