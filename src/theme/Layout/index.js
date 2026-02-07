import React from 'react';
import Layout from '@theme-original/Layout';
import FloatingChat from '@site/src/components/FloatingChat';

export default function LayoutWrapper(props) {
  return (
    <Layout {...props}>
      {props.children}
      <FloatingChat />
    </Layout>
  );
}
