import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact us</h1>
        <form action=''>
            <div>
                <label>Name</label>
                <input type='text' required placeholder=''/>
            </div>
            <div>
                <label>Email</label>
                <input type='email' required placeholder=''/>
            </div>
            <div>
                <label>Message</label>
                <input type='text' required placeholder='Text message here...'/>
            </div>
            <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
