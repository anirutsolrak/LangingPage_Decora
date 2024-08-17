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
  {
    img: '/imagem5.jpg', 
    title: 'Image 5',
  },
  {
    img: '/imagem6.jpg', 
    title: 'Image 6',
  },
];

export default function WovenImageList({ itemData, theme }) {
  return (
    <ImageList sx={{ 
      width: 500, 
      height: 450, 
      backgroundColor: 'gray', 
      backgroundImage: `url('/border.jpg')`, // Use backgroundImage
      backgroundRepeat: 'repeat-x', // Repete a imagem na horizontal
      backgroundPosition: 'top',
      padding: '5px' // Adicione a borda aqui
    }} variant="woven" cols={3} gap={8}>
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