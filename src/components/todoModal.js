import React from "react";
import { Input, Modal, Button, Text, Row, } from "@nextui-org/react"
import { useState } from "react"


import axios from "axios";



export const TodoModal = () => {

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    const [todoTitle, setTodoTitle] = useState('')
    const [todoDescription, setTodoDescription] = useState('')

    const addToList = () => {



        axios.post("http://localhost:3001/post",
            {
                title: todoTitle,
                description: todoDescription,

            }


        )
        window.location.reload()
    }



    return (
        <div>
        <div className="title">
        <h1>Crud App With MERN</h1>
        <Row justify="center">
        <Button auto  color="primary" css={{}} shadow onClick={handler}>
                Add Todo Item
            </Button>
        </Row>
           
        </div>
        
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Add Item
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="title"
                        onChange={(e) =>  {
                            setTodoTitle(e.target.value)
                        }}

                    />
                    
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="description"

                        onChange={(e) => {
                            setTodoDescription(e.target.value);
                        }}
                    />
                  
                </Modal.Body>
                <Modal.Footer>
                <Button auto flat size="md" color="primary" onClick={addToList}>
                        Add to List
                    </Button>
                    <Button auto flat size="md" color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}


