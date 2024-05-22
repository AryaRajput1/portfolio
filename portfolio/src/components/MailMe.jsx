import React, { useState } from 'react'

function MailMe() {

    const [mail,setMail] = useState('');
    const onChange = (e)=>{
        setMail(e.target.value)
    }
    const connectWithMe = ()=>{
        if(!mail){
            return ;
        }
        window.open('mailto:rajputarya10@gmail.com?subject=Quick Chat&body=Hi Arya, Can we have a quick Chat?')
    }
  return (
    <section className='bg-primary text-light p-4'>
        <div className="container">
            <div className="d-md-flex justify-content-between align-items-center">
                <h3 className="mb-2 mb-md-0">
                    Want to quick connect with me?
                </h3>

                <div className="input-group mail-me-input mt-2">
  <input type="text" className="form-control" required value={mail} onChange={onChange} placeholder="Mail me" aria-label="Mail me" aria-describedby="button-addon2"/>
  <button className="btn btn-dark" type="button" id="button-addon2" onClick={connectWithMe}>Connect</button>
</div>
            </div>
        </div>

    </section>
  )
}

export default MailMe