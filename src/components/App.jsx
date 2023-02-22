
import React ,{Component} from "react";
import ContactForm from "./form";
import ContactList from "./contactList";


class App extends Component {

  state = {
    contacts: []
  }

  formSubmitHandler = (data) => {
    console.log(data)
    this.setState(prevState =>{
      return {
        contacts: [...prevState.contacts, {...data},],
    }

    })
  }

 
  
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList items={this.state.contacts} />
      </div>
    );
  }
};

export default App;