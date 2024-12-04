'use client'

export default function PageTitle({ title }) {
  return (
    <h1 id='pageTitle' className='font-secondary text-[80px] leading-[90px] text-white'>
      {title}
    </h1>
  )
}
