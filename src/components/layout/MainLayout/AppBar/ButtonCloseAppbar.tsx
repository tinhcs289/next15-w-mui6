"use client";

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';
import type { MouseEventHandler } from "react";
import { useCallback } from 'react';
import { useSetMainLayoutState } from '../context';

export default function ButtonCloseAppbar() {
  const setState = useSetMainLayoutState();

  const closeAppbar: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    event?.stopPropagation?.();
    event?.preventDefault?.();
    setState({ openAppbarDrawer: false });
  }, [setState]);

  return (
    <IconButton onClick={closeAppbar}>
      <CloseRoundedIcon />
    </IconButton>
  );
}