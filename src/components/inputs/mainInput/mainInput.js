import React from 'react'

import * as Style from './styled'

const MainInput = ({label, name, mb, type}) => {
	return (
		<Style.Wrapper mb={mb}>
		  <div className="label">{label}</div>
      <input type={type} name={name}/>
		</Style.Wrapper>
	)
}

export default MainInput