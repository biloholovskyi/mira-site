import React from 'react'

import * as Style from './styled'

const Item = ({number, dots, active}) => {
	return (
		<Style.Block active={active}>
      {
        number && (
          <div className={'number'}>{number}</div>
        )
      }

      {
        dots && (
          <div className={'dots'}>...</div>
        )
      }
		</Style.Block>
	)
}

export default Item