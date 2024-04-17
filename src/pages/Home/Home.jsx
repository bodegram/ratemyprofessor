import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Features/>
    <Footer/>
    <ToastContainer/>
    </>
  )
}
