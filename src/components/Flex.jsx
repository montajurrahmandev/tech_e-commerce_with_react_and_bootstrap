import React from 'react'

const Flex = ({className, children}) => {
  return (
    <div className={"d-flex align-items-center" + className}>{children}</div>
  )
}

export default Flex