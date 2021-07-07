import React, {Component} from 'react'
import './Title.css'

class Title extends Component{
    constructor(props){
        super(props)
        this.state = {
              title: "Stack Learner",
              isInput: false
        }
    }

    editHandler() {
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputchange(e){
        this.setState({
            ...this.state,
            title: e.target.value
        })
    }
    onkeypressHandler(e){
        if(e.key === "Enter"){
           this.setState({
               ...this.state,
               isInput:false
           })
        }
    }

    render(){
        let output = null
        if(this.state.isInput){
            output = (
                <div>
                    <input
                     type="text"
                     onChange={ (e) => {this.inputchange(e)}}
                     onKeyPress={ e=>this.onkeypressHandler(e)}
                     value={this.state.title}/>
                </div>
            )
        }else{
            output = (
                <div>
                    <h1 className="display-4">{this.state.title}</h1>
                </div>
            )
        }
        return(
            <div className="d-flex title">
                   <h1>{output}</h1>
                   <span className="edit-icon ml-auto" onClick={() => this.editHandler()}>
                       <i className="fa fa-car"></i>
                  </span>
            </div>
        )
    }
}
export default Title