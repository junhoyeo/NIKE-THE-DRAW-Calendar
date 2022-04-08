import React, { useCallback, useMemo } from 'react'

// Detect iOS
export function iOS () {
  const { platform = null } = navigator
  // return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  return !!platform && /iPad|iPhone|iPod/.test(platform)
}

// Detect Chrome on iOS
export function isCriOS () {
  return iOS() && /CriOS/.test(navigator.userAgent)
}

// Detect iPhone X notch position
export function notchPosition () {
  let { orientation, screen } = window
  let position

  if (orientation) {
    position = ({
      '90': 'left',
      '-90': 'right'
    })[orientation]
  } else {
    orientation = ('orientation' in screen)
      ? screen.orientation.type : ('mozOrientation' in screen)
        // @ts-ignore
        ? screen.mozOrientation : undefined

    position = ({
      'landscape-primary': 'left',
      'landscape-secondary': 'right'
    })[orientation]
  }

  return position || 'none'
}

function capitalize (s: string) {
  return s[0].toUpperCase() + s.slice(1)
}

const SIDES = ['left', 'right', 'top', 'bottom']


type Props = {
  left?: boolean,
  right?: boolean,
  top?: boolean,
  bottom?: boolean
}

export const SafeArea: React.FC<Props> = (props) => {
  const { children, left, right, top, bottom, ...rest } = props

  const applyStyles = useCallback(({ styles, props: { style, ...props } }: any) => {
    return {
      ...props,
      style: {
        ...style,
        ...styles
      }
    }
  }, [])

  const componentProps = useMemo(() => {
    let componentProps = rest

    if (typeof navigator === 'undefined') {
      return componentProps
    }

    if (iOS()) {
      const sides = SIDES.filter(side => (
        props[side] && (
          (side === 'bottom') ||
          (side === 'top' && !isCriOS()) ||
          (side === notchPosition())
        )
      ))

      componentProps = applyStyles({
        sides,
        styles: sides.reduce(
          (styles, side) => {
            styles[`padding${capitalize(side)}`] = `env(safe-area-inset-${side})`
            return styles
          }, {}
        ),
        props: rest
      })
    }
  }, [rest])

  return (
    <div {...componentProps}>{children}</div>
  )
}
