import React from 'react';
import { Context } from '../../Context';
import { AdsHorizontal } from '../Ads/AdsHorizontal';
import Styles from './DestaquesPage.module.css';
export const DestaquesPage = () => {
  const [posts, setPosts] = React.useState(null);
  const { isMobile } = React.useContext(Context);

  React.useEffect(() => {
    async function fetchPodcasts() {
      const options = {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': 'qliumZzpd29VZqlJwRoLWjwbq7BozOifZLV4n6mz',
          'X-Parse-REST-API-Key': 'pjSgrhAVckFbpp6BXXDjXdaBaTHh12xi7gk8bJEp',
        },
      };
      const res = await fetch(
        'https://parseapi.back4app.com/classes/posts',
        options,
      );
      if (res.ok);
      const json = await res.json();

      if (res && res.ok) {
        setPosts(json.results);
      }
    }
    fetchPodcasts();
  }, []);
  if (posts)
    return (
      <div className={Styles.containerDestaque}>
        <div className={Styles.propaganda}>
          <AdsHorizontal />
        </div>
        {posts.map((post) => (
          <div className={Styles.post}>
            <h1 className={Styles.titulo}>{post.titulo}</h1>
            <iframe
              className={Styles.iframe}
              width="auto"
              height="auto"
              src={post.imgSrc}
              title={post.titulo}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <p className={Styles.conteudo}>{post.conteudo}</p>
          </div>
        ))}
        <div className={Styles.propaganda}>
          <AdsHorizontal />
        </div>
      </div>
    );
};
