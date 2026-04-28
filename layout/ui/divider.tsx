import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function VerticalDividers() {
    return (
        <Box
            sx = {{
                display: 'flex',
                alignItems: 'center',
                border: '3px solid',
                borderColor: 'divider',
                borderRadius: 1,
                bgcolor: 'background.paper',
                color: 'text.secondary',
                '& svg': {
                    m: 1,
                },
                [`& .$ {dividerClasses.root}`]: {
                    mx: 0.5,
                },
            }}
        >
     </Box>
    );
}