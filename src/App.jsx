import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
class App extends Component {
  constructor(){
    super()
    this.state ={
      fullName:'',
      username:'',
      email:'',
      password:'',
    }
  }

  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
  }
  changeFUsername(event){
    this.setState({
      fusername:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }


  render() {
    return(
      <div className='container'>
        <div className='form-div'>
          <form>
            <input type ='text'
            placeholder='Full Name'
            onCharger={this.changeFullName}
            value={this.state.fullName}
            className='form-control form-group'
            />
            <input type ='text'
            placeholder='Fusername'
              onCharger={this.changeFUsername}
              value={this.state.fusername}
            className='form-control form-group'
            />
            <input type ='text'
            placeholder='E-mail'
              onCharger={this.changeEmail}
              value={this.state.email}
            className='form-control form-group'
            />
            <input type ='password'
            placeholder='password'
            onCharger={this.changePassword}
            value={this.state.password}
            className='form-control form-group'
            />

            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>

          </form>
       
       </div>

      </div>
    )
  }
}
 
export default App;