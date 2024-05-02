import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { BarkoderView, Barkoder } from 'barkoder-react-native';
import { useNavigation } from '@react-navigation/native';
import CheckProduct from '../Api/CheckProduct';

const BarcodeScannerScreen = () => {
  const navigation = useNavigation();
  const [barkoder, setBarkoder] = useState(null); // Initialize barkoder as null

  const onBarkoderViewCreated = barkoder => {
    barkoder.setBarcodeTypeEnabled(Barkoder.BarcodeType.qr, true);
    barkoder.setRegionOfInterestVisible(true);
    setBarkoder(barkoder);
  };

  const startScanning = () => {
    if (barkoder) {
      barkoder.startScanning(async (result) => {
      console.log('Tarama sonucu:', result.textualData);

      try {
        const responseData = await CheckProduct(result.textualData);

        if(responseData){
          // İçerik kontrol ekranına yönlendir
          console.log(responseData.response.ingredients);
          const responseIngredientsData = await CheckIngredientsApi(uniqueWords, false);
          navigation.navigate('IngredientsDetails', { ingredients: responseIngredientsData });
        }
        else{
          // Ürün bulunamadı ekranına yönlendir
          navigation.navigate('ProductNotFound');
        }

      } catch (error) {
        console.error('Hata:', error);
        alert('Hata: Veri alınamadı');
      }
    });
    }
  };

  useEffect(() => {
    startScanning(); // Call startScanning when barkoder is updated
  }, [barkoder]);

  return (
    <SafeAreaView style={styles.container}>
      <BarkoderView
        style={styles.barkoderView}
        licenseKey="PEmBIohr9EZXgCkySoetbwP4gvOfMcGzgxKPL2X6uqM2QB4LG7locYvP2kym_PkgaJYOZrt4Q3LW0WtDzO-C65efhSjQV2fDdEiX8NL3_tFYMXrCBz2NXz1WuFhx5qi-SccGvmDYbDTR6M1MnD2ySdXvN9Oh_M5nSom7GzzMej4VGeGLXDrIHGNNYmNvnQK1qX7w_GgQgB_KhCG-rSJrsg.."
        onBarkoderViewCreated={onBarkoderViewCreated}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barkoderView: {
    flex: 1,
    width: '100%',
  },
});

export default BarcodeScannerScreen;
