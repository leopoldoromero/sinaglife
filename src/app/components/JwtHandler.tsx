'use client';

import { DispatchAction } from '@redux/store';
import { refreshJwt } from '@redux/user/user.thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const JwtHandler = () => {
    const dispatch = useDispatch<DispatchAction>();

    useEffect(() => {
        const jwtToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('jwt='))
        ?.split('=')[1];

        if (jwtToken) {
            dispatch(refreshJwt({}));
        }
    }, [dispatch]);

  return null; 
};

export default JwtHandler;
