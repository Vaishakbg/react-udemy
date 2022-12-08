import React from 'react'
import Button from './Button'

function RouterApp() {
  return (
    <div>
        <div>
            <Button outlined rounded primary success>Primary</Button>
        </div>
        <div>
            <Button rounded secondary>Secondary</Button>
        </div>
        <div>
            <Button warning outlined>Bye Now!</Button>
        </div>
        <div>
            <Button danger rounded>Click Heare!</Button>
        </div>
        <div>
            <Button danger outlined>Hi</Button>
        </div>
    </div>
  )
}

export default RouterApp