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

export const StyledLogoutButton = styled(StyledListItemButton)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  bottom: 0,
  margin: '20px 0',
  transform: 'translateX(-50%)',
}));
