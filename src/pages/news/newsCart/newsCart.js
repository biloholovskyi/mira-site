import React from 'react'

import * as Style from './styled'

const NewsCart = ({data}) => {
  // формат даты
  const formatDate = (string) => {
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(string).toLocaleDateString(['ru'], options);
  }
  // дата в нужном формате
  const date = data.created_at.split('T')[0];
  const dateNormal = formatDate(date);
	return (
		<Style.Cart to={'/singleNews/' + data.id} >
      <img src={data.file} alt="img"/>
      <div className="name">{data.name}</div>
      <div className="date">{dateNormal}</div>
		</Style.Cart>
	)
}

export default NewsCart