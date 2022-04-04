import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ReactHelmet() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>스마트 안전관제 플랫폼</title>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Work+Sans&display=swap"></link>
      </Helmet>
    </HelmetProvider>
  )
}