import React from 'react'

import * as Style from '../styled'

const MainTextArea = ({label, name, mb}) => {
	return (
    <Style.Wrapper mb={mb}>
      <div className="label">{label}</div>
      <textarea name={name}/>
    </Style.Wrapper>
	)
}

export default MainTextArea