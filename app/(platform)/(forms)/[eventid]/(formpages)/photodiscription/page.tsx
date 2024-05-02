"use client"

import React, { useState, ChangeEvent } from 'react';
import { Document, Page, PDFViewer, PDFDownloadLink, StyleSheet, Text, View, Image } from '@react-pdf/renderer';
import Header from '../_components/Header_pd';

interface FormData {
  photo: string | null;
  description: string;
}

const PageComponent = () => {

    if (typeof window === 'undefined') {
        // Server-side rendering logic
        return <div>Loading...</div>;
      }

  const [showModal, setShowModal] = useState<boolean>(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [data, setData] = useState<any[]>([]);

  const handleSubmit = () => {
    setData([...data, { photo, description }]);
    setPhoto(null);
    setDescription('');
    setShowModal(false);
  };
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

  const MyDocument: React.FC = () => {
    return (
      <Document>
        <Page size="A4" style={{padding:10}}>
            <Header/>
          <View style={styles.page}>
            {data.map((item: FormData, index: number) => (
              <React.Fragment key={index}>
                <View style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
                   {item.photo && <Image src={item.photo} style={{ width: 300, height: 300, margin:10 }} />}
                   <Text>{item.description}</Text>
                </View>
               
              </React.Fragment>
            ))}
            {description && <Text>{description}</Text>}
          </View>
        </Page>
      </Document>
    );
  };

  

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-1/2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal(true)}>
          Add New
        </button>
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Upload Photo
                    </label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </button>
                  <button
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/2">
        <div style={{ height: '793.8px', width: '100%', border: '1px solid #ccc' }}>
          <PDFViewer width="100%" height="100%">
            <MyDocument />
          </PDFViewer>
        </div>
        <PDFDownloadLink document={<MyDocument />} fileName="photo_description.pdf">
          {({ blob, url, loading, error }) => (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 block"
              style={{ display: 'block', width: '100%' }}
            >
              {loading ? 'Loading document...' : 'Download PDF'}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PageComponent;
