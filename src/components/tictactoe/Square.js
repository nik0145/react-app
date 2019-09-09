import React from 'react';
import Button from '@material-ui/core/Button';


export default  function Square(props){
    return (
        <Button 
         variant="outlined"
         size="small"
         color="primary"
         key = {props.keys}
         className="square"
         onClick={props.onClick} >
           <React.Fragment>
               {props.value}     
               </React.Fragment>
               </Button>
 )
};

