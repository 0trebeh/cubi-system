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
const Pdf = (props) => (
    <PDFViewer style={styles.content}>
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>Reporte de venta #{props.data.reporte.id}</Text>
                <View style={styles.separador}></View>
                <View style={styles.column}>
                    <Text style={styles.bold}>Cliente: </Text>
                    <Text> #{props.data.user.id} {props.data.user.nombre}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.bold}>Servicio: </Text>
                    { props.data.reporte.tipoServicio === 'camaras' ?
                      <Text> #1 | Instalacion de Camaras de Seguridad</Text>
                      :
                      <Text> #2 | Instalacion de Software de Administracion</Text>
                    }
                </View>
                { props.data.reporte.tipoServicio === 'camaras' ?
                  <>
                    <View style={styles.column}>
                        <Text style={styles.bold}>Tipo de lugar: </Text>
                        <Text> {props.data.reporte.tipoLugar}</Text>
                    </View>
                    <View style={styles.separador}></View>
                    <View style={styles.column}>
                        <Text style={styles.bold}>Dimension del lugar: </Text>
                        <Text> {props.data.reporte.dimencion} m2</Text>
                    </View>
                    <View style={styles.separador}></View>
                    <View style={styles.column}>
                        <Text style={styles.bold}>Cantidad de camaras externas: </Text>
                        <Text> {props.data.reporte.camExt}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.bold}>Cantidad de camaras internas: </Text>
                        <Text> {props.data.reporte.camInt}</Text>
                    </View>
                    <View style={styles.separador}></View>
                  </>
                  :
                  <>
                    <View style={styles.column}>
                        <Text style={styles.bold}>Cantidad de Computadoras: </Text>
                        <Text> {props.data.reporte.numComp}</Text>
                    </View>
                  </>
                }
                <View style={styles.column}>
                    <Text style={styles.bold}>Ubicacion: </Text>
                    <Text> {props.data.reporte.ubicacion}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.bold}>Costo: </Text>
                    <Text> ${props.data.reporte.costo}</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default Pdf;