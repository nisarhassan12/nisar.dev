import React from 'react'

import IndexLayout from '../layouts'
import { colors } from '../styles/variables'
import styled from '@emotion/styled'

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
    <IndexLayout canonical='/contact' pageColor={colors.offWhite}>
        <StyledContactPage>
            <div className="row">
                <section className="wrapper">
                    <h1 className="heading--underlined">Contact</h1>
                    <p>
                        Are you looking for a fast-performing and user-friendly website to represent your product or business? or looking for any kind of consultation? or want to ask questions? or have some advice for me or just want to say "Hi <span aria-hidden="true">👋</span>" in any case feel free to Let me know. I will do my best to respond back. <span aria-hidden="true">😊</span>
                    </p>
                    <p>The quickest way to reach out to me is via email.</p>
                    <a href="mailto:syednisarhassan12@gmail.com" className="btn btn--dark">syednisarhassan@gmail.com</a>
                </section>
            </div>
        </StyledContactPage>
    </IndexLayout>
)

export default ContactPage