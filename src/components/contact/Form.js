import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'

const StyledForm = styled.form`
   .fields {
        display: flex;
        flex-wrap: wrap;

        input, textarea {
            display: inline-block;
            flex: 0 0 100%;
            border: none;
            background: none;
        }

        input {
            padding: .5rem 0;
            border-bottom: 1px solid;
            margin: 1rem 0;

            @media(min-width: ${sizes.breakpoints.lg}) {
                flex: 0 0 48%;
                margin: 3rem 0 4rem;

                &:first-of-type {
                    margin-right: auto;
                }
            }
        }

        textarea {
            border: 1px solid;
            height: 30rem;
            padding: 1rem .5rem;
            resize: none;
            margin: 3rem 0;

            @media(min-width: ${sizes.breakpoints.lg}) {
                margin: 1rem 0;
            }
        }
    }

` 

const Form = () => (
    <StyledForm name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" /> 
        <div className="fields">
            <input type="text" id="name" placeholder="Name"/>
            <label className="visually-hidden" htmlFor="name">Name...</label>
            <input type="email" id="email" placeholder="Email"/>
            <label className="visually-hidden" htmlFor="email">Email</label>
            <textarea id="message" placeholder="Your Message" />
            <label className="visually-hidden" htmlFor="message">Your Message</label>
            <button className="btn btn--dark">Send &nbsp;&rarr;</button>
        </div>
    </StyledForm>
)

export default Form