import './style.scss';
import PropTypes from 'prop-types';

import React, { Component } from 'react'

class ShareButton extends Component {
  
    
    render() {
        const submitEventPosts =()=>{
         
            if(this.props.commitEvent)
                this.props.commitEvent();
        }
        return (
            <div>
                <button 
                data-test="shareButtonComponent"
                onClick={()=>submitEventPosts()}
                >
                       {this.props.textButton}
                </button>
                
            </div>
        )
    }
};
ShareButton.propTypes={
    textButton: PropTypes.string,
    commitEvent: PropTypes.func
}
export default ShareButton;
