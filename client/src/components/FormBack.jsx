import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import mapImg from '../imgs/Captura de Tela 2021-01-21 às 10.47 1.png'
import CenterYellowFace from './faces/centerYellowFace'
import CornerYellowFace from './faces/cornerYellowFace'
import PurpleFace from './faces/purpleFace'
import GreenFace from './faces/greenFace'
import Cloud from './faces/Cloud'
import Sun from './faces/Sun'
import "./faces/faces.css"
import {Title, TextArea, Input, ButtonWrapper, Img, Wrapper} from './Tools'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
});
const FormBack = () => {
    return (
        <div style={{padding: "30px"}}>
            <Wrapper>
                <Title>Reach out to us!</Title>
                {/* FORMIK */}
                <Formik
                    initialValues={{name: "", email: "", message: ""}}
                    validationSchema={validationSchema}
                    onSubmit={values => {
                        console.log(values);
                        axios
                            .post('http://localhost:3200/form', {
                                name: values['name'],
                                email: values['email'],
                                message: values['message'],
                            })
                            .then((res) => {
                                console.log(res);
                            })
                            .catch((err) => {
                                console.log(err);
                                if (err.response) {
                                    console.log(err.response.status);
                                    // if (err.response.status === 405)

                                    //setError('Wrong password or email');
                                }
                            });
                        console.log('--------------');
                    }}
                    render={({
                                 touched,
                                 errors,
                                 values,
                                 handleChange,
                                 handleBlur,
                                 handleSubmit
                             }) => (

                        <Form style={{display: "flex", flexDirection: "column", alignItems:"center"}}
                              onSubmit={handleSubmit}>
                            <Input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                border={errors.name && "1px solid red"}
                                type="text"
                                name="name"
                                placeholder="Your name*"
                            />
                            {errors.email && <p color="red">{errors.email}</p>}
                            <Input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                border={errors.email && "1px solid red"}
                                type="text"
                                name="email"
                                placeholder="Your e-mail*"
                            />

                            {errors.message && <p color="red">{errors.message}</p>}
                            <TextArea
                                style={{height: "189px"}}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                                border={errors.message && "1px solid red"}
                                type="text"
                                name="message"
                                placeholder="Your message*"
                            />
                            <ButtonWrapper type="submit">Submit</ButtonWrapper>
                        </Form>

                    )}
                />
                {/* END OF FORMIK */}
            </Wrapper>
            <Img src={mapImg} alt="img"/>
            <div className="greenFace">
                <GreenFace/>
            </div>
            <div className="purpleCenterFace">
                <PurpleFace/>
            </div>
            <div className="purpleBottomFace">
                <PurpleFace/>
            </div>
            <div className="yellowLeftFace">
                <CornerYellowFace/>
            </div>
            <div className="yellowRightFace">
                <CornerYellowFace/>
            </div>
            <div className="yellowCenterFace">
                <CenterYellowFace/>
            </div>
            <div className="Sun">
                <Sun/>
            </div>
            <div className="Cloud1">
                <Cloud/>
            </div>
            <div className="Cloud2">
                <Cloud/>
            </div>
        </div>
    );
};

export default FormBack;