"use client";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import type { MouseEventHandler } from "react";
import { useCallback } from 'react';
import { useSetMainLayoutState } from '../context';

export default function ButtonOpenAppbar() {
  const setState = useSetMainLayoutState();

  const openAppbar: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    event?.stopPropagation?.();
    event?.preventDefault?.();
    setState({ openAppbarDrawer: true });
  }, [setState]);

  return (
    <IconButton onClick={openAppbar}>
      <MenuIcon />
    </IconButton>
  );
}