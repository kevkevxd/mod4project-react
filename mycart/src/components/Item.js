import React, { Fragment } from 'react'

const Item = (props) => {
return (
    <Fragment>
        <h1>{props.item.name}</h1>
	</Fragment>
  )
}

export default Item