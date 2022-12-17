import { useEffect, useState } from "react"
import axios from "axios";
import { Grid ,Card,Button,Text,Row} from "@nextui-org/react";

 export const Todo = () => {

    const [todoList, setTodoList] = useState([])

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


    return(
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
          </Card.Body>
         
          <Card.Footer>
            <Row justify="flex-end">
              <Button color="primary"flat size="md">
            update
              </Button>
              <Button color="error"flat size="md" onPress={() => deleteTodo(val._id)}>delete</Button>
            </Row>
          </Card.Footer>
        </Card>
</Grid>
        ))}
        
        </Grid.Container>
       
        </div>
    )
}


