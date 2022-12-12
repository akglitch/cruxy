import React from "react";
import { Input, Modal, Checkbox, Button, Text, Row, } from "@nextui-org/react"
import { useState } from "react"


import axios from "axios";



export const Home = () => {

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    const [todoName, setTodoName] = useState('')
    const [todoCategory, setTodoCategory] = useState('')
    const [todoDescription, setTodoDescription] = useState('')

    const addToList = () => {



        axios.post("http://localhost:3001/post",
            {
                name: todoName,
                category: todoCategory,
                description: todoDescription,

            }


        )
        window.location.reload()
    }



    return (
        <div>
            <Button auto color="warning" shadow onClick={handler}>
                Open modal
            </Button>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            NextUI
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Name"
                        onChange={(e) =>  {
                            setTodoName(e.target.value)
                        }}

                    />
                      <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="category"

                        onChange={(e) => {
                            setTodoCategory(e.target.value);
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
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button auto flat color="error" onClick={addToList}>
                        Add to List
                    </Button>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


