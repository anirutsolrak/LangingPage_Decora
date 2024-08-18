import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  // Substitua com os dados das suas imagens
  {
    img: '/imagem1.jpg', 
    title: 'Image 1',
  },
  {
    img: '/imagem2.jpg', 
    title: 'Image 2',
  },
  {
    img: '/imagem3.jpg', 
    title: 'Image 3',
  },
  {
    img: '/imagem4.jpg', 
    title: 'Image 4',
  },
];

export default function WovenImageList({ itemData, theme }) { // Recebe o tema como prop
  return (
    <ImageList sx={{ width: 500, height: 450, backgroundColor: theme.palette.common.white, border: '1px solid black' }} variant="woven" cols={3} gap={8}>
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