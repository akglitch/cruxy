import { useEffect, useState } from "react"
import axios from "axios";
import { Grid ,Card,Button,Text,Row} from "@nextui-org/react";

 export const Product = () => {

    const [productList, setProductList] = useState([])

    const getProducts = () => {
      axios.get("http://localhost:3001/products").then((response) =>{
        console.log(response.data)
          setProductList(response.data)
      })
    }

    useEffect(()=> {
       getProducts()
    }, [])

    const deleteProduct = (id) =>{
      axios.delete(`http://localhost:3001/delete/${id}`)
      getProducts()
      window.location.reload()
    }


    return(
        <div>
           <Grid.Container gap={2}>
      
        {productList.map((val,key) =>  ( 
          <Grid key={key} sm={6} md={6}>    
            <Card css={{ mw: "500px" }}>
          <Card.Header>
            <Text b>{val.name}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              {val.category}
            </Text>
            <Card.Divider />
            <Text>
              {val.description}
            </Text>
            <Card.Divider />
            <Text>
            ${val.price}
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
            update
              </Button>
              <Button size="sm" onPress={() => deleteProduct(val._id)}>delete</Button>
            </Row>
          </Card.Footer>
        </Card>
</Grid>
        ))}
        
        </Grid.Container>
        </div>
    )
}