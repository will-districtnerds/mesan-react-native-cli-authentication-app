
import React from 'react';

//API URL
//export const API_URL = 'https://mesannodejsapiwithverification.herokuapp.com/api';
export const API_URL = 'http://localhost:10000/wp-json';

//API End Points
export const REGISTER = `${API_URL}/auth/register`;
//export const LOGIN = `${API_URL}/auth/login`;
export const LOGIN = `${API_URL}/jwt-auth/v1/token`;
export const UPDATE_PROFILE = `${API_URL}/user`;
export const UPLOAD_IMAGE = `${API_URL}/user/upload`;
export const FORGOT_PASSWORD = `${API_URL}/auth/recover`;