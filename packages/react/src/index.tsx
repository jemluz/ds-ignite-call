export * from './components/Box'
export * from './components/Text'
export * from './components/Heading'
export * from './components/Avatar'
export * from './components/Button'
export * from './components/TextInput'
export * from './components/TextArea'
export * from './components/Checkbox'
export * from './components/MultiStep'

export * from './styles'

// Another form of define props
// export type ButtonProps = {
//   size: 'small' | 'big'
// }

// export const Button = styled('button', {
//   fontFamily: '$default',
//   backgroundColor: '$ignite500',
//   borderRadius: '$md',
//   padding: '$4',

//   variants: {
//     size: {
//       small: {
//         fontSize: 14,
//         padding: '$2 $4',
//       },
//       big: {
//         fontSize: 16,
//         padding: '$3 $6',
//       },
//     },
//   },

//   defaultVariants: {
//     size: 'small',
//   },
// })

// export type ButtonProps = ComponentProps<typeof Button>
