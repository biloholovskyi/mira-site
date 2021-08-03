import React, {useEffect, useState} from 'react'

import Item from "./item/item";

import * as Style from './styled'

// pages - колличество всех страниц
// switchFunc - функция переключения страниц
const Pagination = ({style, pages, activePage, switchFunc}) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const pagesArray = []
    for (let i = 0; i < pages; i++) {
      const item = <Item number={i + 1} key={i} active={i + 1 === activePage} switchFunc={switchFunc}/>
      pagesArray.push(item)
    }
    setItems(pagesArray)
  }, [pages, activePage]);


	return (
		<Style.Wrapper style={style}>
      {items}
		</Style.Wrapper>
	)
}

export default Pagination