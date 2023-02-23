
import React ,{Component} from "react";
import ContactForm from "./form";
import ContactList from "./contactList";
import Filter from "./filter";

class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  }

  formSubmitHandler = (data) => {
    console.log(data)
    this.setState(prevState =>{
      return {
        contacts: [...prevState.contacts, {...data},],
    }

    })
  }

  chengeFilter = e => {
     this.setState({ filter: e.currentTarget.value })
  }
 
  
  
  render() {
    const { contacts, filter } = this.state;
    
    // const normalizedFilter = this.state.filter.toLowerCase();
    // const filtredComponents = this.state.contacts.filter(contact => contact.text.toLowerCase().includes(normalizedFilter))

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.chengeFilter} />
        <ContactList items={contacts} />
      </div>
    );
  }
};

export default App;