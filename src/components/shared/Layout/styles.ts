import { styled, ListItemButton } from '@mui/material';

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: '20px',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '5px',
  '&.Mui-selected': {
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
}));

export {};
