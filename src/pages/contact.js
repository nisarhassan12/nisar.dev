import React from 'react'

import IndexLayout from '../layouts'
import { colors, sizes } from '../styles/variables'
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

    .error {
        width: 100%;
        color: #ee2737;
    }

` 

function encode(data) {
    return Object.keys(data)
        .map((key) => {
            const value = data[key];
            return encodeURIComponent(key) + '=' + (value === null || value === undefined ? 'null' : encodeURIComponent(value))
        })
        .join('&')
}

const ContactPage = () => {

    const [state, setState] = React.useState({})

    if (typeof window !== 'undefined' && window.location.hash && state.message === undefined) {
        setState({
            ...state,
            message: decodeURIComponent(window.location.hash.substr(1))
        });
    }

    const handleChange = (e) => {
        setState({
            ...state,
            errorMessage: undefined,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeTextArea = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!state.eMail) {
            setState({
                ...state,
                errorMessage: 'Please provide a valid e-mail so that I can reach out to you.'
            });
            return;
        }
        if(!state.message) {
            setState({
                ...state,
                errorMessage: "Sorry! message can't be empty please type a message."
            })
            return;
        }
        const form = e.target;
        fetch('/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => setState({
                ...state,
                messageSent: true
            }))
            .catch((error) => alert(error))
        }
        return (
            <IndexLayout canonical='/contact' pageTitle="Contact">
                <StyledContactPage>
                    <div className="row">
                        <section className="wrapper">
                            <h1 className="heading--underlined">Contact</h1>
                            
                           {
                               state.messageSent 
                                ? 
                               <div>Thanks! for your message. I will get back to you soon!</div> : 
                                <>
                                    <p>
                                    Got something to say? Let me know i will do my best to respond back. <span>😊</span>
                                    </p>
                                    <StyledForm 
                                        method="POST"
                                        name="Contact"
                                        data-netlify="true"
                                        data-netlify-honeypot="bot-field"
                                        onSubmit={handleSubmit}
                                    >
                                        <input type="hidden" name="form-name" value="contact" /> 
                                        <div style={{ visibility: "hidden" }}>
                                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                                        </div>
                                        <div className="fields">
                                            <input 
                                                type="text" 
                                                id="name" 
                                                placeholder="Name" 
                                                name="Name"
                                                onChange={handleChange}
                                            />
                                            <label className="visually-hidden" htmlFor="name">Name...</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                placeholder="Email"
                                                name="eMail"
                                                onChange={handleChange}
                                            />
                                            <label className="visually-hidden" htmlFor="email">Email</label>
                                            <textarea 
                                                id="message" 
                                                placeholder="Your Message" 
                                                onChange={handleChangeTextArea}
                                                name="message"
                                            />
                                            <label className="visually-hidden" htmlFor="message">Your Message</label>
                                        </div>
                                        { state.errorMessage ? <p className="error">{state.errorMessage}</p> : null }
                                        <button className="btn btn--dark">Send &nbsp;&rarr;</button>
                                    </StyledForm>
                                </>
                            }
                        </section>
                    </div>
                </StyledContactPage>
            </IndexLayout>
        )
} 

export default ContactPage