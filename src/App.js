import React from 'react';
import './App.css';

import Form from "./components/Form"
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-Dos</h1>
      </header>
      <Form/>
      <Todos />
    </div>
  );
}

export default App;

// import React, {Component} from 'react';
// import Checkbox from 'react-simple-checkbox'
//
// // Bootstrap for react
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import ListGroup from 'react-bootstrap/ListGroup';
//
//
//
// class App extends Component {
//
//   constructor(props) {
//     super(props);
//
//     // Setting up state
//     this.state = {
//       userInput : "",
//       countTasks : 0,
//       list:[]
//     }
//   }
//
//   // componentWillMount = () => {
//   //   this.selectedCheckboxes = new Set();
//   // }
//   //
//   // toggleCheckbox = label => {
//   //   if (this.selectedCheckboxes.has(label)) {
//   //     this.selectedCheckboxes.delete(label);
//   //   } else {
//   //     this.selectedCheckboxes.add(label);
//   //   }
//   // }
//   //
//   // handleFormSubmit = formSubmitEvent => {
//   //   formSubmitEvent.preventDefault();
//   //
//   //   for (const checkbox of this.selectedCheckboxes) {
//   //     console.log(checkbox, 'is selected.');
//   //   }
//   // }
//   //
//   // createCheckbox = label => (
//   //     <Checkbox
//   //         label={label}
//   //         handleCheckboxChange={this.toggleCheckbox}
//   //         key={label}
//   //     />
//   // )
//   //
//   // createCheckboxes = () => (
//   //     userInput.map(this.createCheckbox)
//   // )
//
// // Set a user input value
//   updateInput(value){
//     this.setState({
//       userInput: value,
//     });
//   }
//
// // Add item if user input in not empty
//   addItem(){
//     if(this.state.userInput !== '' ){
//       const userInput = {
//
//         // Add a random id which is used to delete
//         id : Math.random(),
//
//
//         // Add a user value to list
//         value : this.state.userInput
//       };
//
//       // Update list
//       const list = [...this.state.list];
//       list.push(userInput);
//       this.state.countTasks = list.length;
//
//       // reset state
//       this.setState({
//         list,
//         userInput:""
//       });
//     }
//   }
//
// // Function to delete item from list use id to delete
//   deleteItem(key){
//     const list = [...this.state.list];
//
//     // Filter values and leave value which we need to delete
//     const updateList = list.filter(item => item.id !== key);
//     this.state.countTasks = updateList.length;
//     // Update list in state
//     this.setState({
//       list:updateList,
//     });
//
//   }
//
//   render(){
//     return(<Container>
//
//           <Row style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: '3rem',
//             fontWeight: 'bolder',
//           }}
//           >TODO
//           </Row>
//
//           <Row style={{
//             display: "flex",
//             justifyContent: "center",
//             fontSize: '1rem'
//           }}
//           >{this.state.countTasks} of {this.state.countTasks} Remaining
//           </Row>
//
//           <hr/>
//           <Row>
//             <Col md={{ span: 5, offset: 4 }}>
//
//               <InputGroup className="mb-3">
//                 <FormControl
//                     placeholder="add item . . . "
//                     size="lg"
//                     value = {this.state.userInput}
//                     onChange = {item => this.updateInput(item.target.value)}
//                     aria-label="add something"
//                     aria-describedby="basic-addon2"
//                 />
//                 <InputGroup.Append>
//                   <Button
//                       variant="dark"
//                       size="lg"
//                       onClick = {()=>this.addItem()}
//                   >
//                     ADD
//                   </Button>
//                 </InputGroup.Append>
//
//                 <InputGroup.Append>
//                   <ListGroup
//                       variant="dark"
//                       size="lg"
//                       onClick = {()=>this.addItem()}
//                   >
//                     ADD
//                   </ListGroup>
//                 </InputGroup.Append>
//               </InputGroup>
//
//             </Col>
//
//             <Col md={{ span: 5, offset: 4 }}>
//
//               <InputGroup className="mb-3">
//                 <FormControl
//                     placeholder="add item . . . "
//                     size="lg"
//                     value = {this.state.userInput}
//                     onChange = {item => this.updateInput(item.target.value)}
//                     aria-label="add something"
//                     aria-describedby="basic-addon2"
//                 />
//                 <InputGroup.Append>
//                   <Button
//                       variant="dark"
//                       size="lg"
//                       onClick = {()=>this.addItem()}
//                   >
//                     ADD
//                   </Button>
//                 </InputGroup.Append>
//               </InputGroup>
//
//             </Col>
//           </Row>
//           <Row>
//             <Col md={{ span: 5, offset: 4 }}>
//               <ListGroup>
//                 {/* map over and print items */}
//                 {this.state.list.map(item => {return(
//
//                     <ListGroup.Item variant="dark" action
//                                     onClick = { () => this.deleteItem(item.id) }>
//                       {item.value}
//                     </ListGroup.Item>
//
//                 )})}
//               </ListGroup>
//             </Col>
//           </Row>
//         </Container>
//     );
//   }
// }
//
// export default App;
