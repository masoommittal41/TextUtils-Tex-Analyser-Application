import React,{useState}from 'react'

export default function Alert(props) {
    const handle=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
    {
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show `}role="alert">
    <strong>{handle(props.alert.type)}</strong>: {props.alert.msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
}
</div>
  )
}
