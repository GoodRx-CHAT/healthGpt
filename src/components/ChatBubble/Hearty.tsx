import React from 'react'
import { classNames } from 'utils'

type Size = 'small' | 'medium' | 'large'

type HeartyProps = {
  size?: Size
  src?: string
  alt?: string
  onClick?: (e: any) => void
}

const sizes: Record<Size, string> = {
  small: 'w-10 h-10',
  medium: 'w-12 h-12',
  large: 'w-14 h-14'
}

const EmptyHearty = ({ size = 'medium' }: Partial<HeartyProps>) => (
  <span
    data-testid="empty-Hearty"
    className={classNames(
      'inline-block overflow-hidden bg-gray-100 rounded-full',
      sizes[size]
    )}
  >
    <svg
      className="h-full w-full text-gray-300"
      fill="currentColor"
      viewBox="0 0 99 99"
    >
      <path
        d="M36.9145 18.3892L49.4412 30.9159L61.9763 18.3809C66.1411 14.5249 71.638 12.4323 77.3135 12.5422C82.989 12.6521 88.4018 14.956 92.4162 18.9704C96.4306 22.9848 98.7345 28.3977 98.8444 34.0732C98.9543 39.7486 96.8618 45.2455 93.0058 49.4104L49.449 92.9671L5.89284 49.4109C2.0358 45.2451 -0.0581994 39.7476 0.0502903 34.0722C0.15878 28.3967 2.46131 22.9845 6.47471 18.9711C10.4881 14.9577 15.9004 12.6552 21.5758 12.5467C27.2512 12.4382 32.7487 14.5322 36.9145 18.3892Z"
        fill="#FDDB00"
      />
    </svg>
  </span>
)

const Hearty = ({ size = 'medium', src, alt, onClick }: HeartyProps) => {
  const handleClick = React.useCallback(
    (e: any) => {
      e.preventDefault()
      console.log('Hearty')
      onClick && onClick(e)
    },
    [onClick]
  )

  if (!src) {
    return <EmptyHearty size={size} onClick={onClick} />
  }

  return (
    <img
      className={classNames('inline-block rounded-full', sizes[size])}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  )
}

export default Hearty
