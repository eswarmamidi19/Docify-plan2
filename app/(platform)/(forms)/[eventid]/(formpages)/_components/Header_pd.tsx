import React from 'react'
import { Image, View, Text, StyleSheet } from '@react-pdf/renderer';
const Header = () => {

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          padding: 10,
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1,
        },
        row: {
          flexDirection: 'row',
          marginBottom: 10,
        },
        cell: {
          flex: 1,
          borderStyle: 'solid',
          borderWidth: 1,
          padding: 5,
          textAlign: 'center',
        },
        boldText: {
          fontWeight: 'ultrabold',
          fontSize: '20px',
          fontFamily: 'Times New Roman',
        },
        alignCenter: {
          textAlign: 'center',
        },
        textSize: {
          fontSize: '10px',
         
        },
        horizontalLine: {
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginVertical: 10,
        },
        arielFont: {
          fontFamily: 'Arial',
        },
        imgStyle: {
            height: '60',
            width: '90',
        }
      });
      

  return (
    <div>
      <View style={styles.section}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            {/* Image */}
                            <Image src="\aditya-logo.jpg" style={styles.imgStyle } />
                            {/* <img src='../../../public/aditya-logo.jpeg' alt='college-logo' height={'50px'} width={'50px'} /> */}
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.alignCenter}>
                            ADITYA ENGINEERING COLLEGE
                            </Text>
                            <Text style={[styles.alignCenter, styles.textSize]}>
                            Approved by AICTE, Permanently Affiliated to JNTUK, Accredited by NAAC with               
                            "A++" Grade Reconized by UGC under Section 2(f) and 12(B) of UGC Act, 1956. 
                            </Text>
                            <Text style={[styles.alignCenter, styles.textSize]}>
                            ADB Road, Surampalem – 533 437, Kakinada, Dist. A.P. 
                            </Text>
                            
                        </View>
                        
                    </View>
                    <View style={styles.horizontalLine} />
        </View>
    </div>
  )
}

export default Header;
