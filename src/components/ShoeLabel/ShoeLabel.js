import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants'

const LABELS = {
  'on-sale': {
    label: 'Sale',
    color: COLORS.primary,
  },
  'new-release': {
    label: 'Just Released!',
    color: COLORS.secondary,
  }
}

export const ShoeLabel = ({variant}) => {
  const {label, color} = LABELS[variant]

  return (
    <Wrapper style={{'--background-color': color}}>
      <Flag>{label}</Flag>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  padding: 8px 10px;
  border-radius: 2px;
  background-color: var(--background-color);
`

const Flag = styled.span`
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.bold}
`
