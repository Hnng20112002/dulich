import { ReactNode, HTMLProps } from 'react'

interface FlexProp extends HTMLProps<HTMLDivElement> {
  col?: boolean
  gap?: number
  justify?:
  | 'center'
  | 'start'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'
  | undefined
  align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch' | undefined
  children?: ReactNode,
}

export default function Flex(props: FlexProp) {
  const align = () => {
    switch (props.align) {
      case 'center':
        return 'items-center'
      case 'start':
        return 'items-start'
      case 'end':
        return 'items-end'
      case 'baseline':
        return 'items-baseline'
      case 'stretch':
        return 'items-stretch'
      default:
        return 'items-center'
    }
  }

  const justify = () => {
    switch (props.justify) {
      case 'center':
        return 'justify-center'
      case 'start':
        return 'justify-start'
      case 'end':
        return 'justify-end'
      case 'between':
        return 'justify-between'
      case 'around':
        return 'justify-around'
      case 'evenly':
        return 'justify-evenly'
      case 'stretch':
        return 'justify-stretch'
      default:
        return 'justify-between'
    }
  }

  const gap = props.gap ? `gap-${props.gap}` : 'gap-0'

  const column = props?.col === true ? 'flex-col' : ''

  return (
    <div
      {...props}
      className={`flex ${align()} ${justify()} ${gap} ${column} ${props.className}`}
    >
      {props.children}
    </div>
  )
}
