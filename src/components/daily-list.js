import React from 'react';
import {connect} from 'react-redux';
import {API_BASE_URL} from '../config';
import {Link} from 'react-router-dom';
import './daily-list.css';
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
    //    var currentDate = new Date(this.state.overview.created)
    //     console.log(currentDate);
       //var returnObj = this.state.overview.map((entry)=> return[entry.breakfast, ] )
       return (
           this.state.overview.slice(0).reverse().map((val, index)=> 
           <li key={index}>
            Date:  
            {(new Date(val.created)).toDateString()}
            <br></br>
            Breakfast 
            {val.meals.breakfastMeal ? <i className="glyph-icon flaticon-pet-food"></i>  : <i className="glyph-icon flaticon-no-stopping"></i> }
            <br></br>
            Dinner
            {val.meals.dinnerMeal ? <i className="glyph-icon flaticon-pet-food"></i> : <i className="glyph-icon flaticon-no-stopping"></i>}
            <br></br>
            Walks
            {val.walkTimes.morningWalk ? <i className="glyph-icon flaticon-walking-with-dog"></i>: ''}
            {val.walkTimes.afternoonWalk ? <i className="glyph-icon flaticon-walking-with-dog"></i>: ''}
            {val.walkTimes.eveningWalk ? <i className="glyph-icon flaticon-walking-with-dog"></i>: ''}
            {val.walkTimes.nightWalk ? <i className="glyph-icon flaticon-walking-with-dog"></i>: ''}
            <br></br>
            Poop Quality:  
            {val.poops ? val.poops.poopQuality : '  Not Recorded'}
            <br></br>
            Poops Taken: 
            {val.poops ? val.poops.poopsTaken : '  None'}
            {/* {val.poops.poopsTaken === 2 ? <div><i className="glyph-icon flaticon-poop"></i><i className="glyph-icon flaticon-poop"></i> </div>: ' '} */}
            <br></br>
            Comments/Concerns:
            <br></br>
            {val.poops ? val.poops.poopDetails: ''}
           
           </li>)
      ) 
      //return JSON.stringify(this.state.overview)
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