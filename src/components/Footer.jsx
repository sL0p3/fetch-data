import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/shlok-jakhotia-3a6519149/' role='button'>
            <span className='fa fa-facebook'></span>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/sL0p3' role='button'>
            <span className='fa fa-twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/shlok-jakhotia-3a6519149/' role='button'>
            <span className='fa fa-google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/sL0p3' role='button'>
            <span className='fa fa-instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/shlok-jakhotia-3a6519149/' role='button'>
            <span className='fa fa-linkedin' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/sL0p3' role='button'>
            <span className='fa fa-github' />
          </MDBBtn>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
    </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright :   
        <a className='text-white' href='https://www.linkedin.com/in/shlok-jakhotia-3a6519149/'>
           Shlok Jakhotia
        </a>
      </div>
    </MDBFooter>
  );
}