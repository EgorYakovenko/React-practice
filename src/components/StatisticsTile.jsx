import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const container = {
  width: 1112,
  height: 370,
  backgroundColor: '#F8F8F8',
  border: '1px solid #EAEAEA',
  borderRadius: 10,
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '24px',
};

const listContainer = {
  display: 'flex',
  alignContent: 'space-between',
  flexWrap: 'wrap',
  gap: '16px',
};

const itemStatistic = {
  width: 156,
  height: 156,
  backgroundColor: 'white',
  border: '1px solid #EAEAEA',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const itemCount = {
  fontWeight: 600,
  fontSize: '48px',
  color: '#171A1C',
};

const itemDescription = {
  fontWeight: 400,
  fontSize: '12px',
  color: '#555E68',
};

const imgBox = {};

function StatisticsTile() {
  return (
    <Box sx={container}>
      <Box>
        <Card
          sx={{
            width: 350,
            borderRadius: 5,
            mr: '24px',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image="../../public/promo.png"
              alt="promo"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                How to sell anything online.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <List sx={listContainer}>
        <ListItem sx={itemStatistic}>
          <ListItemText
            primaryTypographyProps={{ sx: itemCount }}
            primary="135"
          />
          <ListItemText
            primaryTypographyProps={{ sx: itemDescription }}
            primary="Student / period"
          />
        </ListItem>

        <ListItem sx={itemStatistic}>
          <ListItemText
            primaryTypographyProps={{ sx: itemCount }}
            primary="121.1"
          />
          <ListItemText
            primaryTypographyProps={{ sx: itemDescription }}
            primary="Revenue / period"
          />
        </ListItem>
        <ListItem sx={itemStatistic}>
          <ListItemText
            primaryTypographyProps={{ sx: itemCount }}
            primary="121.1"
          />
          <ListItemText
            primaryTypographyProps={{ sx: itemDescription }}
            primary="Revenue / period"
          />
        </ListItem>
        <ListItem sx={itemStatistic}>
          <ListItemText
            primaryTypographyProps={{ sx: itemCount }}
            primary="121.1"
          />
          <ListItemText
            primaryTypographyProps={{ sx: itemDescription }}
            primary="Revenue / period"
          />
        </ListItem>
        <ListItem sx={itemStatistic}>
          <ListItemText
            primaryTypographyProps={{ sx: itemCount }}
            primary="121.1"
          />
          <ListItemText
            primaryTypographyProps={{ sx: itemDescription }}
            primary="Revenue / period"
          />
        </ListItem>
        <ListItem sx={itemStatistic}>
          <ListItemText
            primaryTypographyProps={{ sx: itemCount }}
            primary="121.1"
          />
          <ListItemText
            primaryTypographyProps={{ sx: itemDescription }}
            primary="Revenue / period"
          />
        </ListItem>
        <ListItem sx={itemStatistic}>
          <ListItemText
            primaryTypographyProps={{ sx: itemCount }}
            primary="121.1"
          />
          <ListItemText
            primaryTypographyProps={{ sx: itemDescription }}
            primary="Revenue / period"
          />
        </ListItem>
      </List>
    </Box>
  );
}
export default StatisticsTile;
// secondary={'Secondary text'}

// Statistic data tile size: 156px

// Statistic data tile bg color: white

// Statistic data tile border: 1px StrokeGray (#EAEAEA) solid

// Statistic data tile border radius: 10px

// Statistic data grid gap: 2 MUI units (16px)

// Padding: 3 MUI units (24px)

// Gap between data grin and course card: 3 MUI units (24px)

// Component’s bg color: LightGray (#F8F8F8)

// Component’s border: 1px StrokeGray (#EAEAEA) solid

// Component’s border radius: 25px

// <List
//   sx={{
//     width: 156,
//     height: 156,
//     backgroundColor: 'white',
//     border: '1px solid #EAEAEA',
//     borderRadius: 10,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}
// >
//   <ListItem sx={{ flexDirection: 'column' }}>
//     <ListItemText sx={{ fontWeight: 400, fontSize: '68px' }} primary="135" />
//     <ListItemText sx={{}} primary="Student / period" />
//   </ListItem>

//   <ListItem sx={{ flexDirection: 'column' }}>
//     <ListItemText sx={{ fontWeight: 400, fontSize: '68px' }} primary="135" />
//     <ListItemText sx={{}} primary="Student / period" />
//   </ListItem>
// </List>;
