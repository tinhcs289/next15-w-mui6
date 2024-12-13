"use client";

import Drawer from '@mui/material/Drawer';
import { useCallback, type ReactNode } from 'react';
import { useGetMainLayoutState, useSetMainLayoutState } from '../context';

export default function AppbarDrawer({ children }: { children?: ReactNode}) {
  const setState = useSetMainLayoutState();
  const open = useGetMainLayoutState(s => !!s?.openAppbarDrawer);

  const closeAppbar = useCallback(() => {
    setState({ openAppbarDrawer: false });
  }, [setState])

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={closeAppbar}
      PaperProps={{
        sx: {
          top: "var(--template-frame-height, 0px)",
        },
      }}
    >
      {children}
    </Drawer>
  );
}