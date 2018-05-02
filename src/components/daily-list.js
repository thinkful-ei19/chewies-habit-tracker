import React from 'react';
import {connect} from 'react-redux';
import {API_BASE_URL} from '../config';
import {Link} from 'react-router-dom';

class DailyList extends React.Component{
      constructor(props){
        super(props);
        this.state={
            overview: []
        }
      }
      componentDidMount(){
          fetch(`${API_BASE_URL}/overview`,{
              headers: {
                  authorization: `Bearer ${this.props.authToken}`
              }
          })
          .then(res=> res.json())
          .then(res=> this.setState({overview:res}))
      }
   list(){
       console.log(this.state.overview);
       return this.state.overview.map((val, index)=> <li key={index}>{val.created}{val.meals.breakFastMeal ? 'breakfast meal true' : 'breakfast meal false'}</li>)
   }
   render(){
       this.list()
       return(
           <div>
            <button><Link to="/daily">Daily</Link></button>
           <ul>
               {this.list()}
           </ul>
           
           </div>
       )
   }
}
const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        authToken: state.auth.authToken,
        
    };
};
export default connect(mapStateToProps)(DailyList)

//catch data 