# Netflix GPT

An online movie repository app, that provides you updates on all the latest movies and gives you the ability to find the movies you like with the help of AI. To use this app simply create an account and that's it, you will get access to the repository. 

**NOTE: This app might not work in some locations, please use a VPN if that is the case.

This app is built using **React JS, and Redux Toolkit.** The data is being fetched from 'The MovieDB Api'. For authentication and authorization, the app is integrated with **Firebase**. The app is also integrated with **GPT Api** , moreover **multilingual support** is also present.

# Features

    - Login/Signp page
        - Sign In/ Sign Up Form
        - redirect to Browse Page
    - Browse (after authentication)
        - Header
        - Main Movie
            - Trailer in Background
            - Title & Decription
            - Movie Suggestions
                - MovieLists * n

    - Netflix GPT
        - Search Bar
        - Movie Suggestions

## Header Setup

## Login Form

    - Login/SIgn Up functionality
    - Form Validation
    - useRef Hook

## Authentication

    - Google Firebase setup
    - Deploying on Firebase
    - Creating Sign Up in Firebase
    - Implementing Sign In User API

## Redux Setup

    - Storing user data in redux
    - Creating user Slice

## Sign Out and User Details

    - Bug Fixes of display name and profile picture
    - Controlling route of logged in and logged out uers
    - Unsubscribed onAuthStateChanged callback

## Fetch Movies data

    - Fetch movie data from TMDB
    - Design Browse Page
    - Creating movie Slice
    - Update store with movie data

## Browse Page

    - Setup Video Title and Video Background
    - Fetch data for trailer video
    - Update store with trailer video
    - Embedding YouTube video

    - Secondary Container Setup

## Multilingual Feature

## GPT Integration

    - GPT Search Bar/Page
    - GPT API
    - GPT Search API call to TMDB
    - Memoization
    - Mobile Responsive
