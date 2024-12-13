"use client";

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useMemo } from 'react';
import { useGetMainLayoutState } from '../context';

const items = [
  { text: "Main", url: "/",  },
  { text: "Docs", url: "/docs",  }
]

export default function NavigationItems() {
  const locale = useGetMainLayoutState(s => s?.locale);

  const $items = useMemo(
    () =>
      items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <Button
            key={i}
            variant="text"
            color="info"
            size="small"
            LinkComponent="a"
            href={!locale ? item.url : `/${locale}${item.url}`}
            lang={locale}
            {...(isLast ? { sx: { minWidth: 0 } } : {})}
          >
            {item.text}
          </Button>
        );
      }),
    [locale]
  );

  return <>{$items}</>;
}

export function NavigationItemsMobile() {
  const locale = useGetMainLayoutState(s => s?.locale);

  const $items = useMemo(
    () =>
      items.map((item, i) => {
        return (
          <MenuItem
            key={i}
            LinkComponent="a"
            href={!locale ? item.url : `/${locale}${item.url}`}
            lang={locale}
          >
            {item.text}
          </MenuItem>
        );
      }),
    [locale]
  );

  return <>{$items}</>;
}