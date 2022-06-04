import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react'

const Tabl = ({todos,handleDelete}) => {
  return (
    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Address</Th>
        <Th>Married</Th>
        <Th>Department</Th>
        <Th>Sakary</Th>
      </Tr>
    </Thead>
    <Tbody>
    {
         todos.map((elem)=>(
        <Tr key={elem.id}>
            <Th>{elem.name}</Th>
            <Th>{elem.age}</Th>
            <Th>{elem.address}</Th>
            <Th>{elem.address}</Th>
            <Th>{elem.department}</Th>
            <Th>{elem.salary}</Th>
            <Th><button onClick={()=>handleDelete(elem.id)}>Delete</button></Th>
        </Tr>
         ))
     }
       
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default Tabl