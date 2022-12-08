import React from 'react'
import Button from './Button'

function RouterApp() {
  return (
    <div>
        <div>
            <Button>Plain</Button>
        </div>
        <div>
            <Button outline rounded primary>Primary</Button>
        </div>
        <div>
            <Button rounded secondary>Secondary</Button>
        </div>
        <div>
            <Button warning outline>Bye Now!</Button>
        </div>
        <div>
            <Button success rounded>Click Here!</Button>
        </div>
        <div>
            <Button danger outline>Danger</Button>
        </div>
    </div>
  )
}

export default RouterApp