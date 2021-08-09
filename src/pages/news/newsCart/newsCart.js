import React from 'react'

import * as Style from './styled'

const NewsCart = ({data}) => {
	return (
		<Style.Cart to={'singleNews'}>
      <img src={data.banner} alt="img"/>
      <div className="name">{data.title}</div>
      <div className="date">{data.date}</div>
		</Style.Cart>
	)
}

export default NewsCart