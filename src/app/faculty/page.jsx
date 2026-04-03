import Administrative from '@/components/faculty/Administrative'
import Directory from '@/components/faculty/Directory'
import Facultyheader from '@/components/faculty/Facultyheader'
import Leadership from '@/components/faculty/Leadership'
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