import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from "react-bootstrap";

import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import NewsCart from "./newsCart/newsCart";
import Pagination from "../../components/pagination/pagination";
import Footer from "../../components/footer/footer";

import * as Style from './styled'

// временный массив данных
const newsList = [
  {
    title: '1 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: '2Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '3 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: '4Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '5 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: '6Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '7 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: '8Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: '10Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '11 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: '12Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '13 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: '14Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '15 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: '16Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '17 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  },
  {
    title: '9 советов онлайн-продавцам для жаркого лета',
    banner: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    date: '21 июня 2021'
  },
  {
    title: 'Ваше руководство по продажам на eBay',
    banner: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
    date: '21 июня 2021'
  }
]

const News = () => {
  const [newsArray, setNewsArray] = useState([])
  const [paginationPages, setPaginationPages] = useState(1);
  const [paginationPageActive, setPaginationPageActive] = useState(1);

  useEffect(() => {
    // количество всех страниц
    const pageNumbers = Math.ceil(newsList.length / 16);
    console.log(pageNumbers)
    setNewsArray(newsList)
    setPaginationPages(pageNumbers)
  }, [newsList])

  const newsRender = newsArray.slice(16 * (paginationPageActive - 1), 16 * paginationPageActive).map((item, key) => {
    return (
      <Col lg={3} key={key}>
        <NewsCart data={item}/>
      </Col>
    )
  })

  const switchPage = (number) => {
    setPaginationPageActive(number)
  }

  return (
    <>
      <Style.Wrapper>
        <Container>
          <Row>
            <Col>
              <DefaultTitle text={'новости'} style={{marginBottom: 60}}/>
            </Col>
          </Row>
          <Row>
            {newsRender}
          </Row>
        </Container>
        <Pagination style={{marginTop: 20}} pages={paginationPages} activePage={paginationPageActive} switchFunc={switchPage}/>
      </Style.Wrapper>
      <Footer/>
    </>
  )
}

export default News