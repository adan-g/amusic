import React from 'react'
import { RiSkipForwardMiniFill, RiSkipBackMiniFill } from "react-icons/ri";


export const SkipToNext = ({ ...props }) => {
  return (
    <>
      <RiSkipForwardMiniFill {...props} />
    </>
  )
}

export const SkipBack = ({ ...props }) => {
  return (
    <>
      <RiSkipBackMiniFill {...props} />
    </>
  )
}
