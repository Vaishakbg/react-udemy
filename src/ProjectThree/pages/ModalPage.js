import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick=()=>{
        setShowModal(true);
    }

    const handleClose=()=>{
        setShowModal(false);
    }
    const actionBar = <Button primary onClick={handleClose}>I Accept</Button>;
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important aggrement for you to accept</p>
    </Modal>;
  return (
    <div>
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal && modal}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex doloremque, ut odio illum nemo aut nesciunt eos at totam impedit eum velit suscipit est ad minus eius excepturi ea?</p>
    </div>
  )
}

export default ModalPage