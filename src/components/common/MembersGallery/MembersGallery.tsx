'use client'

import Image from 'next/image'
import {
  StyledMember,
  StyledMemberImageContainer,
  StyledMemberInfo,
  StyledMembersGallery,
} from '@/components/common/MembersGallery/MembersGallery.styles'
import Giannis1 from '@/images/gallery/band/members/BadContactGiannis1.jpg'
import Leonidas1 from '@/images/gallery/band/members/BadContactLeonidas1.jpg'
import Marios1 from '@/images/gallery/band/members/BadContactMarios1.jpg'
import Ninos1 from '@/images/gallery/band/members/BadContactPanagiotis1.jpg'
import Pandelis1 from '@/images/gallery/band/members/BadContactPandelis1.jpg'
import Vangelis1 from '@/images/gallery/band/members/BadContactVangelis1.jpg'

export const membersGallery = [
  {
    src: Leonidas1,
    caption: 'Group photo for Album EIGHTBALL',
    priority: false,
    title: 'Leonidas Zacharakis',
    role: 'Vox',
  },
  {
    src: Giannis1,
    caption: 'Group photo for Album EIGHTBALL',
    priority: false,
    title: 'Giannis Riganas',
    role: 'Guitars',
  },
  {
    src: Marios1,
    caption: 'Group photo for Album EIGHTBALL',
    priority: false,
    title: 'Marios Fourlas',
    role: 'Guitars',
  },
  {
    src: Ninos1,
    caption: 'Group photo for Album EIGHTBALL',
    priority: false,
    title: 'Panagiotis Ninos',
    role: 'Drums',
  },
  {
    src: Vangelis1,
    caption: 'Group photo for Album EIGHTBALL',
    priority: false,
    title: 'Vangelis Galanis',
    role: 'Synths/Piano',
  },
  {
    src: Pandelis1,
    caption: 'Group photo for Album EIGHTBALL',
    priority: false,
    title: 'Padelis Andris',
    role: 'Bass',
  },
]

export const MembersGallery = () => {
  return (
    <StyledMembersGallery>
      {membersGallery.map(({ src, title, role, priority }, index) => (
        <StyledMember key={title}>
          <StyledMemberImageContainer>
            <Image key={index} src={src} alt={'Bad Contact Eightball Eye'} quality={100} priority={priority} />
          </StyledMemberImageContainer>
          <StyledMemberInfo>
            <h4>{title}</h4>
            <h5 className='font-secondary'>{role}</h5>
          </StyledMemberInfo>
        </StyledMember>
      ))}
    </StyledMembersGallery>
  )
}
