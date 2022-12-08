import React from 'react'
//npm link: https://www.npmjs.com/package/prop-types
import propTypes from 'prop-types'

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
  return (
    <button>{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    // console.log(props);
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

      if(count>1) return new Error('Only one of primary, secondary, success, warning, danger can be true')
  },
};
export default Button