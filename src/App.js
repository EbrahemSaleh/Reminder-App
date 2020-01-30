import React ,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {add_Reminder , remove_Reminder ,clear_Reminder } from './action/act';
import moment from 'moment'

class App extends Component {
  state = {
    text:'',
    date : new Date()
  }

  render_reminder = () => {
    return(
      <ul className='list-group'>
        {
          this.props.reminder.map((e) => {
            return ( 
              <li className="list-group-item my-1" key={e.id}>
                <div className="d-flex  justify-content-between">
          <div>{e.text}</div>
          <div>{moment(new Date(e.date)).fromNow()}</div>
          <div className="btn btn-danger" onClick={() => this.props.remove_Reminder(e.id)}>X</div>
          </div>
          
              </li>
            )
          })
        }
      </ul>
    )
  }


  render(){
   
  return (
    <div className="app">
    <div className="container">
      <div className="row">
        <div className="col-md card card-body mt-5 col-sm hi">
        <h2 className='text-capitalize text-center mt-3'>what should u do?</h2>
      <input
       type='text'
       value={this.state.text}
      onChange={(e) => this.setState({text: e.target.value})}
       className="form-control my-2"
       placeholder='Enter What you do .....'
       />
      <input 
      type='datetime-local'
      value={this.state.date}
      onChange={(e) => this.setState({date: e.target.value})}
      className="form-control" />
      <button
       className="btn btn-outline-primary btn-block my-2" 
       onClick= {() =>{
          this.props.add_Reminder(this.state.text , this.state.date)
          this.setState({text: '' , date : ''})
      }}
      > Add Items
       </button>
       {this.render_reminder ()}
      <button
       className="btn btn-outline-danger btn-block"
       onClick={ () => this.props.clear_Reminder () } > clear Items
        </button>
      </div>
      </div>
    </div>

    </div>
  )
  }
}

function mapStateToProps (state){
  return {
    reminder : state
  }
}

export default connect(mapStateToProps , {add_Reminder ,remove_Reminder ,clear_Reminder  })(App);
