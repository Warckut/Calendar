import styled from "styled-components"

// width: 400px;
// heigth: 350px;
// margin: auto auto;
// text-align: center;
// position: absolute;
// z-index: 2;

const Modal = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    width: 630px;
    height: 400px;
    background-color: white;   
    border-radius: 50px;
` 

const ModalWindow = () => {
    return(
        <Modal>
            <ModalContent>
                <span>ТЕКСТ</span>
            </ModalContent>
        </Modal>
    )
} 

export default ModalWindow;