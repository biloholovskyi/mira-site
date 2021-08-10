import React from 'react'

import * as Style from './styled'

const MainInput = ({label, name, mb, placeholder, type, style, styleInput, icon, onChange = () => null}) => {
	return (
		<Style.Wrapper
      mb={mb}
      style={style}
      styleInput={styleInput}
      icon={icon}
    >
		  <div className="label">{label}</div>

      {icon && <img src={icon} alt={'icon'} className={'input-icon'}/>}

      <input type={type} name={name} placeholder={placeholder} onChange={onChange}/>
		</Style.Wrapper>
	)
}

export default MainInput