import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: 'calc(100vh - 55px)',
  },
  page: {
    padding: '40px',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    padding: '10px',
    backgroundColor: 'rgb(39, 34, 98)',
    color: '#fff',
  },
  bold: {
    fontSize: 22,
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  separador: {
    height: '20px'
  }
});

// Create Document Component
const Pdf = () => (
    <PDFViewer style={styles.content}>
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>Reporte de venta #1</Text>
                <View style={styles.separador}></View>
                <View style={styles.column}>
                    <Text style={styles.bold}>Cliente: </Text>
                    <Text> #1 | Heberto Urribarri</Text>
                </View>
                <View style={styles.separador}></View>
                <View style={styles.column}>
                    <Text style={styles.bold}>Servicio: </Text>
                    <Text> #2 | Instalacion de Software de administracion</Text>
                </View>
                <View style={styles.separador}></View>
                <View style={styles.column}>
                    <Text style={styles.bold}>Metodo de pago: </Text>
                    <Text> #3 | pago movil</Text>
                </View>
                <View style={styles.separador}></View>
                <View style={styles.column}>
                    <Text style={styles.bold}>Costo: </Text>
                    <Text> $500</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default Pdf;