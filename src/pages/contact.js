import React from 'react'

import IndexLayout from '../layouts'
import { colors } from '../styles/variables'
import styled from '@emotion/styled'
import Form from '../components/contact/Form'

const StyledContactPage = styled.div`

    section {
        padding-top: 5rem;
    }

    p {
        &:last-of-type {
            margin-top: 2rem;
        }
    }

    .btn {
        margin-top: 2rem;
    }

`

const ContactPage = () => (
    <IndexLayout canonical='/contact' pageTitle="Contact">
        <StyledContactPage>
            <div className="row">
                <section className="wrapper">
                    <h1 className="heading--underlined">Contact</h1>
                    <p>
                        Got something to say? Let me know i will do my best to respond back. 😊
                    </p>
                    <Form />
                </section>
            </div>
        </StyledContactPage>
    </IndexLayout>
)

export default ContactPage