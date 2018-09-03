import React from 'react'
import styled from 'react-emotion'
import Layout from './Layout'
import StyleProvider from './StyleProvider'
import NavLinks from './NavLinks'
import ScrollTop from './ScrollTop'

export const DocsLayout = props =>
  <StyleProvider>
    <Layout>
      <Layout.Sidebar
        py={3}
        bg='lightgray'>
        <NavLinks {...props} />
      </Layout.Sidebar>
      <Layout.Main>
        {props.children}
      </Layout.Main>
    </Layout>
    <ScrollTop />
  </StyleProvider>

export default DocsLayout
