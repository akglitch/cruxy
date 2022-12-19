import { useEffect, useState } from "react"
import axios from "axios";
import { Grid ,Card,Button,Text,Row,Input, Container} from "@nextui-org/react";

 export const Todo = () => {

    const [todoList, setTodoList] = useState([])
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const getTodos = () => {
      axios.get("http://localhost:3001/todos").then((response) =>{
        console.log(response.data)
          setTodoList(response.data)
      })
    }

    useEffect(()=> {
       getTodos()
    }, [])

    const deleteTodo = (id) =>{
      axios.delete(`http://localhost:3001/delete/${id}`)
      getTodos()
      window.location.reload()
    }


    const updateTodo =(id)=>{
      axios.put(`http://localhost:3001/update/${id}`,{
      title : newTitle,
      description :newDescription,
    })
    }

    return(
      <Container lg>
        <div justify="center" >
        
           <Grid.Container  gap={2}>
      
        {todoList.map((val,key) =>  ( 
          <Grid key={key}lg={3} sm={3} md={3}>    
            <Card css={{ mw: "500px" }}>
          <Card.Header>
          Title: <Text b>{val.title}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            
            <Text>
             Description: {val.description}
             </Text>
             <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="NewTitle"
                        onChange={(e) =>  {
                            setNewTitle(e.target.value)
                        }}
                    />
                     <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="newDescription"
                        onChange={(e) =>  {
                            setNewDescription(e.target.value)
                        }}

                    />
                    
                    
          </Card.Body>
         
          <Card.Footer>
            <Row justify="flex-end">
              <Button color="primary"flat size="xs" onPress={() => updateTodo(val._id)}>
            update
              </Button>
            
              <Button color="error"flat size="xs" onPress={() => deleteTodo(val._id)}>delete</Button>
            </Row>
          </Card.Footer>
        </Card>
</Grid>
        ))}
        
        </Grid.Container>
       
        </div>
        </Container>
    )
}


