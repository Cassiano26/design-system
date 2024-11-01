import { styled } from './styles'

const Buttom = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
  height: '$10',
})

export function App() {
  return <Buttom>Hello world</Buttom>
}
