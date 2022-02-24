import React, {useRef} from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = {
width: '100%',
height: '100vh',
background: 'rgba(0, 0, 0, 0.8)',
position: 'absolute',
top: '0',
left: '0',
display: 'flex',
justifyContent: 'center',
alignItems:'center'
}

const ModalWrapper = {
  width: '800px',
  height: '400px',
  boxShadow: '0 5px 16px rgba(0, 0, 0, 0.2)',
  background: '#fff',
  color: '#000',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  position: 'relative',
  zIndex: '10',
  borderRadius: '10px'
}

const ModalImg = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '10px 0 0 10px',
  background: '#000',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


 const Modal = ({ clickState , ImageUrl, setShowModal}) => {
    // const modalRef = useRef();

    // const closeModal = e => {
    //     if (modalRef.current === e.target) {
    //       setShowModal({click: false});
    //     }
    //   };

    const handlePropogation = (e) =>{
       e.stopPropagation();
    }

  return (
    <>
      {clickState ? (
        <div style={Background} onClick={setShowModal}>
            <div style={ModalWrapper} onClick={handlePropogation}>
            <img src={ImageUrl} alt='' style={ModalImg}/>
            <ModalContent>
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Join Now</button>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={setShowModal}
              />
            </div>
        </div>
      ) : null}
    </>
  );
};
export default Modal;