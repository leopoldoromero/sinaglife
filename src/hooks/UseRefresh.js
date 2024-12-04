'use client'
import { useEffect } from 'react';

export default function useRefresh(history, path) {
  let handler;

  const refresh = () => {
    history.push('/');

    handler = setTimeout(() => history.push(path), 10);
  };

  useEffect(() => () => handler && clearTimeout(handler), [handler]);

  return refresh;
}
