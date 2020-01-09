import React,{Component} from "react"
import './Cities.css'

class CitySearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            zipcodes: []      
        }
    }
    handleSearch = (event) =>{ 
        let city = event.target.value.toUpperCase();
        let endpoint = 'http://ctp-zip-api.herokuapp.com/city/'+ city;
        fetch(endpoint)
            .then((response) => {
                return response.json();
            })  
            .then((retData) => {
                let data = retData;
                console.log(data);
                if(data !== undefined)
                    this.setState({zipcodes: data});
            })
    }
    render(){
        let allZipcodes = this.state.zipcodes.map(zip => 
        <div class="codes">{zip}</div>);
        return(
            <div>
                <div class="background">
                <p>Enter a City</p>
                </div>
                <input type="text" id="search" onChange={this.handleSearch}/> 
                <ul>{allZipcodes} </ul>
            </div>  
        )
    }
}

export default CitySearch;