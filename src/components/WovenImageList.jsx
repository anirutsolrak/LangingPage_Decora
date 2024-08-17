import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  // Substitua com os dados das suas imagens
  {
    img: 'https://mui.com/static/images/image-list/breakfast.jpg',
    title: 'Café da Manhã',
  },
  // ... adicione mais imagens
];

export default function WovenImageList({ itemData }) {
  return (
    <ImageList sx={{ width: 500, height: 450, backgroundColor: theme.palette.common.terracotta }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}