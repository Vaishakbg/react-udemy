import React from 'react'
//npm link: https://www.npmjs.com/package/classnames
import classnames from 'classnames'
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
    const classes = classnames('flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white':primary,
        'border-gray-900 bg-gray-900 text-white':secondary,
        'border-yellow-500 bg-yellow-500 text-white':warning,
        'border-green-500 bg-green-500 text-white':success,
        'border-red-500 bg-red-500 text-white':danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-yellow-500': outline && warning,
        'text-green-500': outline && success,
        'text-red-500': outline && danger,
        
    })
  return (
    <button className={classes}>{children}</button>
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