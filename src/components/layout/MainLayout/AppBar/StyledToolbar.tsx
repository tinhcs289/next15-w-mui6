"use client";

import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  // @ts-ignore
  borderColor: (theme.vars || theme).palette.divider,
  // @ts-ignore
  backgroundColor: theme.vars
    ? // @ts-ignore
      `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  // @ts-ignore
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default StyledToolbar;