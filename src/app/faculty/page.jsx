import Administrative from '@/Components/faculty/Administrative'
import Directory from '@/Components/faculty/Directory'
import Facultyheader from '@/Components/faculty/Facultyheader'
import Leadership from '@/Components/faculty/Leadership'
import React from 'react'

function page() {
  return (
    <>
    <Facultyheader />
    <Leadership />
    <Directory />
    <Administrative />
    </>
  )
}

export default page