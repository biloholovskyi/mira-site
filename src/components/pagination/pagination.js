import React from 'react'

import Item from "./item/item";

import * as Style from './styled'

const Pagination = ({style}) => {
	return (
		<Style.Wrapper style={style}>
		  <Item number={1} active/>
		  <Item number={2}/>
		  <Item number={3}/>
		  <Item number={4}/>
		  <Item number={5}/>
		  <Item dots/>
		  <Item number={99}/>
		</Style.Wrapper>
	)
}

export default Pagination