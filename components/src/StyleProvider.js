import React from 'react'
import { ComponentProvider } from 'mdx-go'
import MDXStyle from 'mdx-style'
import { base as theme } from 'mdx-style/themes'
import { withLiveCode } from './LiveCode'

const heading = Tag => ({ id, children, ...props }) =>
  <Tag id={id} {...props}>
    <a
      href={'#' + id}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
      children={children}
    />
  </Tag>

const scope = {
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  pre: props => props.children,
  code: withLiveCode(cx('pre')),
}

export const StyleProvider = ({
  components = {},
  ...props
}) =>
  <MDXStyle
    components={{
      ...scope,
      ...components
    }}
    css={theme}
    {...props}
  />

export default StyleProvider
