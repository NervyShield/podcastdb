import React from 'react';

export const Context = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  let [podcasts, setPodcasts] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    async function fetchPodcasts() {
      const options = {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': 'qliumZzpd29VZqlJwRoLWjwbq7BozOifZLV4n6mz',
          'X-Parse-REST-API-Key': 'pjSgrhAVckFbpp6BXXDjXdaBaTHh12xi7gk8bJEp',
        },
      };
      const res = await fetch(
        'https://parseapi.back4app.com/classes/pdcdb',
        options,
      );
      if (res.ok);
      const json = await res.json();
      console.log(json);
      if (res && res.ok && !data) {
        setData(json.results);
        setPodcasts(json.results);
      }
    }
    fetchPodcasts();
  }, [data]);

  return (
    <Context.Provider
      value={{ data, setData, setPodcasts, podcasts, isMobile }}
    >
      {children}
    </Context.Provider>
  );
};
