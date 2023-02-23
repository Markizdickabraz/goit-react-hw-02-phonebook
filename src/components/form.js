
import React, { Component } from "react";



class ContactForm extends Component {
    state ={
        name: '',
        number: ''
    }

  handleChacge = e => {
        const {name, value} = e.currentTarget;
      this.setState({ [name]: value })


  }

    formSubmit = e => {
        e.preventDefault();
        // console.dir(e.currentTarget)
        
            this.props.onSubmit(this.state);
            this.reset()
        
        // if (this.state.name) {
        //     alert('pizda')
        //     this.reset()
        //     return;
        // }
  }
  
    reset = () => {
    this.setState({name: '', number: ''})
}

render(){
return (
    <form onSubmit={this.formSubmit} >
          <label>Name
             <input
          type="text"
              name="name"
              value={this.state.name}
              onChange = {this.handleChacge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          </label>

          <label>number
            <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange = {this.handleChacge}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
/>
          </label>
          <button type='submit'>Add contact</button>
        </form>
)
    
}
}

export default ContactForm;