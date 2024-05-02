"use client"

import { Document, Page, PDFViewer, PDFDownloadLink, StyleSheet, Text, View, Image } from '@react-pdf/renderer'; // For PDF generation
import React from 'react';
export default function MyDocument(data:any , description:string){

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 40,
          fontFamily: 'Helvetica',
          fontSize: 12,
        },
      });

    return( <Document>
    <Page size="A4">
      <View style={styles.page}>
        {data.map((item:any, index:any) => (
          <React.Fragment key={index}>
            <Text>{item.description}</Text>
            {item.photo && <Image src={item.photo} style={{ width: 200, height: 200 }} />} {/* Display uploaded photo */}
          </React.Fragment>
        ))}
        {/* Render current textarea content if not empty */}
        {description && <Text>{description}</Text>}
      </View>
    </Page>
  </Document>)
}